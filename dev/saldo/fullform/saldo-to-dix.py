#!/usr/bin/env python3

# After running download.sh (until you have no 0-size files left), do
# $ find paradigms -name '*xml' -type f -print0 |xargs -0 cat |python3 saldo-to-dix.py

import sys,re

from itertools import takewhile

def allsame(x):
    return len(set(x)) == 1

def lcp(x):
    return [i[0] for i in takewhile(allsame ,zip(*x))]

def readlines():
    lno=0
    d={}
    intable=False
    for line in sys.stdin:
        lno+=1
        if re.match(".*<table>", line):
            intable=True
            table=[]
        if re.match(".*<w>", line):
            m = re.match("<w><form>(.*)</form><gf>(.*)</gf><pos>(.*)</pos><is>(.*)</is><msd>(.*)</msd><p>(.*)</p></w>", line)
            if not m:
                print ("<!-- Couldn't parse line {}, {} -->".format(lno, line))
            form = m.group(1)
            lemma = m.group(2)
            t_spc = "{} {} {}".format(m.group(3), m.group(4), m.group(5))
            t = tuple(fixtag(t) for t in t_spc.split())
            saldoname = m.group(6)
            table.append([form,lemma,t,saldoname])
        if re.match(".*</table>", line):
            intable=False
            forms=[form for form,lemma,t,saldoname in table]
            lemmas=[lemma for form,lemma,t,saldoname in table]
            fl = forms + lemmas
            prefix = "".join(lcp(fl))
            prelen = len(prefix)
            pdid = tuple(sorted(
                (form[prelen:], lemma[prelen:], t)
                for form,lemma,t,saldoname in table
            ))
            if not saldoname in d:
                d[saldoname]={}
            if not pdid in d[saldoname]:
                d[saldoname][pdid]=set()
            if(len(set(lemmas))) == 0:
                print ("<!-- EMPTY TABLE: {}, at line {}, {} -->".format(table, lno, line))
            if(len(set(lemmas))) > 1:
                print ("<!-- NON-UNIQUE LEMMAS {}, at line {}, {}  -->".format(",".join(set(lemmas)), lno, line))
            d[saldoname][pdid].add(prefix)
    return d

TAGCHANGES={"indef":"ind",
            "nn":"n",
            "av":"adv",
            "avm":"adv",        # difference vs av? interjectiony?
            "u":"ut"}
def fixtag(tag):
    return TAGCHANGES.get(tag, tag)

def maybe_slash(r, pn):
    if len(r)>len(pn):
        print ("<!-- WARNING: strange parname {}, shorter than r {} -->".format(pn, r))
        return pn
    elif len(r)==0:
        return pn
    elif pn.endswith(r):
        return pn[:-len(r)]+"/"+pn[-len(r):]
    else:
        return pn+"/"           # TODO odd stuff goes here

def get_sdefs(d):
    return set(
        tag
        for saldoname in d
        for pdid in d[saldoname]
        for f,l,t in pdid
        for tag in t
    )

def main():
    d = readlines()
    sdefs = get_sdefs(d)
    print (sdefs)
    print ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<dictionary>\n<pardefs>\n")
    section=[]
    for saldoname in d:
        for pdid in d[saldoname]:
            if pdid==():
                print ("<!-- empty pdid! giving up on {}, {} -->".format(saldoname, pdid))
                continue
            if len(set([r for l,r,t in pdid]))>1:
                print ("<!-- more than one r! giving up on {}, {} -->".format(saldoname, pdid))
                continue
            r=[r for l,r,t in pdid][0]
            if len(d[saldoname])==1:
                pn = maybe_slash(r, saldoname)
            else:
                shortest = sorted(list(d[saldoname][pdid]),
                                key=len)[0]
                pn = maybe_slash(r, shortest+"_"+saldoname)
            print ("<pardef n=\"{}\">".format(pn))
            for (l,r,t) in pdid:
                s = "<s n=\"{}\"/>".format("\"/><s n=\"".join(t))
                print ("\t<e><p><l>{}</l>\t<r>{}{}</r></p></e>".format(l,r,s))
            print ("</pardef>")
            for prefix in d[saldoname][pdid]:
                lemma=prefix+r
                e = "<e lm=\"{}\"><i>{}</i><par n=\"{}\"/></e>".format(lemma, prefix, pn)
                section.append(e)

    print ("</pardefs>\n<section id=\"saldo\" type=\"standard\">\n\n")
    print ("\n".join(section))
    print ("\n\n</section>\n</dictionary>")

if __name__ == "__main__":
    main()

#!/usr/bin/env python3

# After running download.sh (until you have no 0-size files left), do
# $ find paradigms -name '*xml' -type f -print0 |xargs -0 cat |python3 saldo-to-dix.py

import sys,re

from itertools import takewhile

def allsame(x):
    return len(set(x)) == 1

def lcp(x):
    return [i[0] for i in takewhile(allsame ,zip(*x))]

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
            print ("WARNING: Couldn't parse line {}".format(line))
        form = m.group(1)
        lemma = m.group(2)
        t = "{} {} {}".format(m.group(3), m.group(4), m.group(5))
        p = m.group(6)
        table.append([form,lemma,t,p])
        #print ([f,l,t,p])
    if re.match(".*</table>", line):
        intable=False
        forms=[form for form,lemma,t,p in table]
        lemmas=[lemma for form,lemma,t,p in table]
        fl = forms + lemmas
        prefix = "".join(lcp(fl))
        prelen = len(prefix)
        pdid = tuple(sorted(
            # p? (saldo parname)
            (form[prelen:], lemma[prelen:], t)
            for form,lemma,t,p in table
        ))
        #print (prefix, pdid)
        if not p in d:
            d[p]={}
        if not pdid in d[p]:
            d[p][pdid]=set()
        if(len(set(lemmas))) == 0:
            print ("<!-- EMPTY TABLE: {}, at line {}, {} -->".format(table, lno, line))
        if(len(set(lemmas))) > 1:
            print ("<!-- NON-UNIQUE LEMMAS {}, at line {}, {}  -->".format(",".join(set(lemmas)), lno, line))
        d[p][pdid].add(prefix)

TAGCHANGES={"indef":"ind",
            "nn":"n",
            "u":"ut"}
def fixtag(tag):
    return TAGCHANGES.get(tag, tag)

def maybe_slash(r, pn):
    if len(r)==0:
        return p
    elif p.endswith(r):
        return p[:len(r)]+"/"+p[len(r):]
    else:
        return p+"/"


print ("DONE reading, printing:")
section=[]
for p in d:
    for pdid in d[p]:
        if pdid==():
            print ("<!-- empty pdid! giving up on {}, {} -->".format(p, pdid))
            continue
        if len(set([r for l,r,t in pdid]))>1:
            print ("<!-- more than one r! giving up on {}, {} -->".format(p, pdid))
            continue
        r=[r for l,r,t in pdid][0]
        if len(d[p])==1:
            pn = maybe_slash(r, p)
        else:
            shortest = sorted(list(d[p][pdid]),
                            key=len)[0]
            pn = maybe_slash(r, shortest+"_"+p)
        print ("<pardef n=\"{}\">".format(pn))
        for (l,r,t) in pdid:
            tags = map(fixtag, t.split())
            s = "<s n=\"{}\"/>".format("\"/><s n=\"".join(tags))
            print ("\t<e><p><l>{}</l>\t<r>{}{}</r></p></e>".format(l,r,s))
        print ("</pardef>")
        for prefix in d[p][pdid]:
            lemma=prefix+r
            e = "<e lm=\"{}\"><i>{}</i><par n=\"{}\"/></e>".format(lemma, prefix, pn)
            section.append(e)

print ("</pardefs>\n<section id=\"saldo\" type=\"standard\">\n\n")
print ("\n".join(section))
print ("\n\n</section>\n</dictionary>")

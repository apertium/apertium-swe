#!/usr/bin/env python3

# After running download.sh (until you have no 0-size files left), do
# $ find paradigms -name '*xml' -type f -print0 |xargs -0 cat |python3 saldo-to-dix.py

import sys,re

from itertools import takewhile

def allsame(x):
    return len(set(x)) == 1

def lcp(x):
    return [i[0] for i in takewhile(allsame ,zip(*x))]

d={}
intable=False
for line in sys.stdin:
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
            print ("!!! EMPTY: {}".format(table))
        if(len(set(lemmas))) > 1:
            print ("!!! NON_UNIQUE LEMMAS {}".format(",".join(set(lemmas))))
        d[p][pdid].add(prefix)

TAGCHANGES={"indef":"ind",
            "nn":"n",
            "u":"ut"}
def fixtag(tag):
    return TAGCHANGES.get(tag, tag)


print ("DONE reading, printing:")
for p in d:
    if len(d[p])!=1:
        bang="!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    else:
        bang=""
    print ("!!! SALDO PAR: {}, has {} pdid's{}".format(p, len(d[p]), bang))
    for pdid in d[p]:
        if len(d[p])==1:
            pn = p
        else:
            shortest = sorted(list(d[p][pdid]),
                            key=len)[0]
            pn = shortest+"_"+p
        print ("!!!\tPDID: {}".format(pdid))
        print ("<pardef n=\"{}\">".format(pn))
        r=[r for l,r,t in pdid][0] # crashes if bad input :)
        for (l,r,t) in pdid:
            tags = map(fixtag, t.split())
            s = "<s n=\"{}\"/>".format("\"/><s n=\"".join(tags))
            print ("\t<e><p><l>{}</l>\t<r>{}{}</r></p></e>".format(l,r,s))
        print ("</pardef>")
        print ("!!!\tPREFIXES: {}".format(len(d[p][pdid])))
        for prefix in d[p][pdid]:
            lemma=prefix+r
            print ("\t\t<e lm=\"{}\"><i>{}</i><par n=\"{}\"/></e>".format(lemma, prefix, pn))


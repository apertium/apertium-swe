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
        f = m.group(1)
        l = m.group(2)
        t = "{} {} {}".format(m.group(3), m.group(4), m.group(5))
        p = m.group(6)
        table.append([f,l,t,p])
        #print ([f,l,t,p])
    if re.match(".*</table>", line):
        intable=False
        forms=[f for f,l,t,p in table]
        lemmas=[l for f,l,t,p in table]
        fl = forms + lemmas
        prefix = "".join(lcp(fl))
        prelen = len(prefix)
        pdid = tuple(sorted(
            # p? (saldo parname)
            (f[prelen:], l[prelen:], t)
            for f,l,t,p in table
        ))
        #print (prefix, pdid)
        if not p in d:
            d[p]={}
        if not pdid in d[p]:
            d[p][pdid]=set()
        if(len(set(lemmas))) != 1:
            print ("!!! NON_UNIQUE LEMMAS {}".format(",".join(set(lemmas))))
        d[p][pdid].add(prefix)


print ("DONE reading, printing:")
for p in d:
    if len(d[p])!=1:
        bang="!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    else:
        bang=""
    print ("SALDO PAR: {}, has {} pdid's{}".format(p, len(d[p]), bang))
    for pdid in d[p]:
        print ("\tPDID: {}".format(pdid))
        if len(d[p])==1:
            pn = p
        else:
            shortest = sorted(list(d[p][pdid]),
                            key=len)[0]
            pn = shortest
        print ("\tPREFIXES: {}, shortest: {}".format(len(d[p][pdid]), shortest))
        for prefix in d[p][pdid]:
            print ("\t\t{}".format(prefix))


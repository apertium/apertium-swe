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
                print("WARNING: Couldn't parse line {}, {}".format(lno, line.rstrip()),
                      file=sys.stderr)
                continue
            form = m.group(1)
            lemma = m.group(2)
            t_spc = "{} {} {}".format(m.group(3), m.group(4), m.group(5))
            t = fixtags(t_spc.split())
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
                print("EMPTY TABLE: {}, at line {}, {}".format(table, lno, line.rstrip()),
                      file=sys.stderr)
            if(len(set(lemmas))) > 1:
                print("NON-UNIQUE LEMMAS {}, at line {}, {}".format(",".join(set(lemmas)), lno, line.rstrip()),
                      file=sys.stderr)
            d[saldoname][pdid].add(prefix)
    return d

TAGCHANGES={                    # http://spraakbanken.gu.se/eng/research/saldo/tagset
    "vb"        :"vblex",
    "pm"        :"np",
    "indef"     :"ind",
    "def"       :"def",
    "nn"        :"n",
    "av"        :"adj",
    "avm"       :"adv",
    "ab"        :"adv",
    "pp"        :"pr",
    "in"        :"ij",
    "nl"        :"num",
    "num"       :"numeral",            # difference with nl?
    "pn"        :"prn",
    "sn"        :"cnjsub",
    "kn"        :"cnjcoo",
    "al"        :"det",
    "ie"        :"infm",
    "aktiv"     :"actv",
    "s-form"    :"pasv",
    "sup"       :"supn",
    "imper"     :"imp",
    "pres_part" :"pprs",
    "pret"      :"past", # or pret? but SALDO's tagset page calls this past
    "u"         :"ut",
    "pret_part" :"pp",
    "ack"       :"acc",
    "gen"       :"gen",
    "ind"       :"indic",
    "inf"       :"inf",
    "poss"      :"poss",
    "pl"        :"pl",
    "p"         :"pl",                   # difference with pl?
    "nom"       :"nom",
    "komp"      :"comp",
    "pos"       :"pos",
    "ord"       :"ord",
    "super"     :"sup",
    "sg"        :"sg",
    "p1"        :"p1",
    "p3"        :"p3",
    "p2"        :"p2",
    "f"         :"f",
    "masc"      :"m",                 # difference with m?
    "m"         :"m",
    "n"         :"nt",
    "u"         :"ut",
    "pres"      :"pres",

    # TODO:
    "v"         :"un",                   #"neuter--non-neuter",
    "h"         :"suffix",
    "w"         :"ntpl",                 # neuter-plural??
    "no_masc"   :"fn",                   # not masculine
    "konj"      :"subjunctive",          # verbs; see MTAGCHANGES
    "invar"     :"invariant",            # remove?

    # TODO:
    "mxc"       :"multiword_prefix",
    "ssm"       :"multiword_clause",
    "sxc"       :"prefix",
    "abh"       :"adverb_suffix",
    "avh"       :"adjective_suffix",
    "nnh"       :"noun_suffix",

    # TODO:
    "c"         :"compound-only-L",#"compound form",
    "ci"        :"compound-only-L",#"compound form, initial",
    "cm"        :"LR.compound-only-L",#"compound form, medial", (we don't distinguish from initial, may overanalyse)
    "sms"       :"cmp-split",#"compound form, free-standing",

    # Ignore the distinction for these:
    "nnm"       :"n",      #"multiword noun",
    "avm"       :"adj",    #"multiword adjective",
    "vbm"       :"vblex",  #"multiword verb",
    "abm"       :"adv",    #"multiword adverb",
    "pnm"       :"prn",    #"multiword pronoun",
    "inm"       :"ij",     #"multiword interjection",
    "ppm"       :"pr",     #"multiword preposition",
    "nlm"       :"num",    #"multiword numeral",
    "knm"       :"cnjcoo", #"multiword conjunction",
    "snm"       :"cnjsub", #"multiword subjunction",
    "pmm"       :"np",     #"multiword proper noun",

    # multitagchange to add abbr?
    "pma"       :"np",     #"proper noun, abbreviation",
    "nna"       :"n",      #"noun, abbreviation",
    "ava"       :"adj",    #"adjective, abbreviation",
    "vba"       :"vblex",  #"verb, abbreviation",
    "aba"       :"adv",    #"adverb, abbreviation",
    "ppa"       :"pr",     #"preposition, abbreviation",
    "kna"       :"cnjcoo", #"conjunction, abbreviation",

    # semtags:
    "ph"        :"ant",                 #"human", TODO: no first name / last name tag :(
    "aa"        :"",#"artefact",            # (famous diamonds etc.)
    "tm"        :"",#"medicine_taxonymy",   # (multiple sclerosis, acr?)
    "ac"        :"org",#"computer",
    "en"        :"",#"natural_event",       # (big bang)
    "ae"        :"food",                # (coca cola)
    "eh"        :"",#"historical_event",    # (french revolution)
    "ag"        :"org",#"ground transport" # (car brands)
    "af"        :"org",#"air transport",
    "oc"        :"org",#"cultral organization",
    "am"        :"",#"medical_artifact",    # (THX, acr?)
    "ec"        :"",#"cultural_event",      # (alla hjärtans dag)
    "ap"        :"",#"prizes",              # (Vasaorden)
    "aw"        :"",#"water_transport",     # (Noah's ark)
    "es"        :"",#"sports",              # (vasaloppet)
    "er"        :"",#"religious_event",     # (Marie bebådelse)
    "lf"        :"top",#"facility location",
    "lg"        :"top",#"geographical location",
    "tz"        :"",#"zoology",             # (Litorina)
    "la"        :"top",#"astronomical location",
    "pa"        :"",#"animals",             # (Rosinante)
    "ls"        :"top",#"streets",
    "lp"        :"top",#"political location",
    "pc"        :"org",#"collective",
    "tb"        :"",#"botany",              # (Ranunculus)
    # Tag order matters 😦 see MTAGCHANGES
    #"pm"       :"mythological person",
    "wc"        :"",#"plays",               # (Hamlet)
    "wb"        :"",#"books",               # (Musse Pigg)
    "wa"        :"",#"art",                 # (Mona Lisa)
    "wn"        :"",#"org",#"news",         # (Aftonbladet)
    "wm"        :"",#"org",#"media",        # (Idol)
    "wp"        :"",#"plays",               # (Charta77)
    "og"        :"org",#"governmental organization",
    "os"        :"org",#"sport organization",
    "op"        :"org",#"political organization",
    "oa"        :"org",#"air industry",
    "oe"        :"",#"educational_event",   # (ABF, CERN, acr?)
    "om"        :"org",#"media organization",
}

MTAGCHANGES={                   # happens after TAGCHANGES
    ("vblex","past","ind","actv"):("vblex","past","actv"),
    ("vblex","pres","ind","actv"):("vblex","pri","actv"),
    ("vblex","pres","subjunctive","pasv"):("vblex","prs","pasv"),
    ("vblex","past","subjunctive","pasv"):("vblex","pis","pasv"),
    ("vblex","pres","subjunctive","actv"):("vblex","prs","actv"),
    ("vblex","past","subjunctive","actv"):("vblex","pis","actv"),
    ("np","f","np"): ("np","f"),
    ("np","m","np"): ("np","m"),
    ("np","ntpl","np"): ("np","ntpl"),
    ("np","pl","np"): ("np","pl"),
    ("np","ut","np"): ("np","ut"),
}

def fixtag(tag):
    return TAGCHANGES.get(tag, tag)
def fixtags(tags):
    ts = tuple(fixtag(t) for t in tags)
    return MTAGCHANGES.get(ts, ts)

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

def uniq_pn(saldoname, d, pdid, r):
    prefixes = d[saldoname][pdid]
    pword = saldoname.split("_")[-1]
    if len(d[saldoname])==1 or pword in prefixes or pword.title() in prefixes:
        return saldoname
    else:
        shortest = sorted(list(prefixes),
                          key=len)[0]
        return saldoname+"_"+shortest+r

def main():
    d = readlines()
    sdefs = get_sdefs(d)
    print ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<dictionary>\n<sdefs>\n")
    print ("\n".join(("\t<sdef n=\"{}\" \tc=\"{}\"/>".format(s,s)
                      for s in sdefs)))
    print ("\n</sdefs>\n<pardefs>\n")
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
            pn = maybe_slash(r, uniq_pn(saldoname, d, pdid, r))
            print ("<pardef n=\"{}\" c=\"SALDO: {}\">".format(pn, saldoname))
            for (l,r,t) in pdid:
                s = "<s n=\"{}\"/>".format("\"/><s n=\"".join(t))
                print ("\t<e><p><l>{}</l>\t<r>{}{}</r></p></e>".format(l.replace(" ","<b/>"),
                                                                       r.replace(" ","<b/>"),
                                                                       s))
            print ("</pardef>")
            for prefix in d[saldoname][pdid]:
                lemma=prefix+r
                e = "<e lm=\"{}\"><i>{}</i><par n=\"{}\"/></e>".format(lemma,
                                                                       prefix.replace(" ","<b/>"),
                                                                       pn)
                section.append(e)

    print ("</pardefs>\n<section id=\"saldo\" type=\"standard\">\n\n")
    print ("\n".join(section))
    print ("\n\n</section>\n</dictionary>")

if __name__ == "__main__":
    main()

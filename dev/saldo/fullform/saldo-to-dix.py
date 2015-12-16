#!/usr/bin/env python3

# After running download.sh (until you have no 0-size files left), do
# $ find paradigms -name '*xml' -type f -print0 |xargs -0 cat |python3 saldo-to-dix.py


# TODO:
# * <g> where possible (1380 of 2308 pardefs are vblex)
# * skip prefixes/suffixes
# * restrict compounding to certain PoS, length?
# * check if there are more strange forms that could go into LR_sort_key
# * sort pardefs and e's by mainpos

import sys,re

from itertools import takewhile, tee

def allsame(x):
    return len(set(x)) == 1

def unzip(list_of_lists):
    return zip(*list_of_lists)

def lcp(x):
    return [i[0] for i in takewhile(allsame, unzip(x))]

def get_prefix(table, lno, line):
    _, forms, lemmas, _, _ = unzip(table)
    if(len(set(lemmas))) > 1:
        print("NON-UNIQUE LEMMAS {}, at line {}, {}".format(",".join(set(lemmas)), lno, line.rstrip()),
              file=sys.stderr)
    prefix = "".join(lcp(forms + lemmas))
    prelen = len(prefix)
    return prefix, prelen

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
            LR, t = fixtags(t_spc.split())
            saldoname = m.group(6)
            if lemma.strip()=="" or form.strip()=="" or t.strip()=="":
                print("WARNING: skipping empty form/lemma/tags at line {}, {}".format(lno, line.rstrip()),
                      file=sys.stderr)
                continue
            table.append([LR,form,lemma,t,saldoname])
        if re.match(".*</table>", line):
            intable=False
            if(len(table)) == 0:
                print("EMPTY TABLE: {}, at line {}, {}".format(table, lno, line.rstrip()),
                      file=sys.stderr)
                continue
            prefix, prelen = get_prefix(table, lno, line)
            pdid = tuple(sorted(
                (LR, form[prelen:], lemma[prelen:], t)
                for LR, form, lemma, t, saldoname in table
            ))
            if not saldoname in d:
                d[saldoname]={}
            if not pdid in d[saldoname]:
                d[saldoname][pdid]=set()
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
    "ind"       :"",            # indicative; but that's the default; subjunctive uses <pis>/<prs>
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
    "no_masc"   :"fn",                   # not masculine → f/nt

    # TODO:
    "v"         :"un",                   #"neuter--non-neuter",
    "h"         :"suffix",
    "w"         :"",            # neuter-plural – remove; only proper nouns like "OD"
    "konj"      :"subjunctive",          # verbs; see MTAGCHANGES
    "invar"     :"",

    # TODO:
    "mxc"       :"multiword_prefix",
    "ssm"       :"multiword_clause",
    "sxc"       :"prefix",
    "abh"       :"adverb_suffix",
    "avh"       :"adjective_suffix",
    "nnh"       :"noun_suffix",

    "c"         :"cmp.compound-only-L",#"compound form",
    "ci"        :"cmp.compound-only-L",#"compound form, initial",
    "cm"        :"cmp.compound-only-L",#"compound form, medial", (we don't distinguish from initial, may overanalyse)
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
    "wn"        :"org",#"news",         # (Aftonbladet)
    "wm"        :"org",#"media",        # (Idol)
    "wp"        :"",#"plays",               # (Charta77)
    "og"        :"org",#"governmental organization",
    "os"        :"org",#"sport organization",
    "op"        :"org",#"political organization",
    "oa"        :"org",#"air industry",
    "oe"        :"",#"educational_event",   # (ABF, CERN, acr?)
    "om"        :"org",#"media organization",
}

MTAGCHANGES={                   # happens after TAGCHANGES
    ("vblex.past.ind.actv")         :("vblex.past.actv"),
    ("vblex.pres.ind.actv")         :("vblex.pri.actv"),
    ("vblex.pres.subjunctive.pasv") :("vblex.prs.pasv"),
    ("vblex.past.subjunctive.pasv") :("vblex.pis.pasv"),
    ("vblex.pres.subjunctive.actv") :("vblex.prs.actv"),
    ("vblex.past.subjunctive.actv") :("vblex.pis.actv"),
    ("np.f.np")                     :("np.f"),
    ("np.m.np")                     :("np.m"),
    ("np.ntpl.np")                  :("np.ntpl"),
    ("np.pl.np")                    :("np.pl"),
    ("np.ut.np")                    :("np.ut"),
    ("n.ut.cmp.compound-only-L")    :("n.ut.sg.ind.cmp.compound-only-L"),
    ("n.nt.cmp.compound-only-L")    :("n.nt.sg.ind.cmp.compound-only-L"),
    ("n.ut.cmp-split")              :("n.ut.sg.ind.cmp-split"),
    ("n.nt.cmp-split")              :("n.nt.sg.ind.cmp-split"),
}
NEEDS_LR = set([
    "cm",
    ])
def fixtag(tag):
    return TAGCHANGES.get(tag, tag)
def fixtags(tags):
    LR = any(tag in NEEDS_LR for tag in tags)
    ts = ".".join(fixtag(tag) for tag in tags)
    ts = re.sub(r'[.][.]+', '.', ts)
    ts = re.sub(r'^[.]|[.]$', '', ts)
    return LR, MTAGCHANGES.get(ts, ts)

def maybe_slash(r, pword):
    if len(r)>len(pword):
        print ("<!-- WARNING: strange parname {}, shorter than r {} -->".format(pword, r))
        return pword
    elif len(r)==0:
        return pword
    elif pword.endswith(r):
        return pword[:-len(r)]+"/"+pword[-len(r):]
    else:
        print ("<!-- WARNING: unexpected parname {} for r {} -->".format(pword, r))
        return pword

def get_mainpos(pdid):
    _,_,_,tags = unzip(pdid)
    if any(t.startswith("vb") for t in tags):
        return "vblex"
    else:
        return tags[0].split(".")[0]

def try_make_pn(saldoname, pnprefix, pdid, r):
    pword = pnprefix + r
    pwordslash = maybe_slash(r, pword)
    pn = "{}__{}".format(pwordslash,
                         get_mainpos(pdid))
    return pn.replace(" ", "_")

def maybe_saldoprefix(prefixes, saldoword, r):
    prefix = saldoword[:-len(r)] if len(r)>0 else saldoword
    if saldoword.endswith(r) and (prefix in prefixes
                                  or prefix.title() in prefixes):
        return [prefix]
    else:
        return []

def make_pn(used, saldoname, d, pdid, r):
    r = r.replace(" ", "_")
    saldoword = saldoname.split("_")[-1]
    prefixes = d[saldoname][pdid]
    good_prefixes = maybe_saldoprefix(prefixes, saldoword, r) + sorted(prefixes, key=len)
    print(saldoname+" "+",".join(good_prefixes))
    for prefix in good_prefixes:
        guess = try_make_pn(saldoname, prefix, pdid, r)
        if not guess in used:
            return guess
    # Giving up and just prefixing with a number (seems to happen when
    # some lemmas have duplicate pardefs)
    return "{}_{}".format(len(used), guess)

def get_sdefs(d):
    return set(
        tag
        for saldoname in d
        for pdid in d[saldoname]
        for _,_,_,t in pdid
        for tag in t.split(".")
    )

def LR_sort_key(e):
    """Prioritise certain forms if we have several forms with one analysis"""
    (LR,l,r,t) = e
    return ("-" in l, l)

def uniq_gen(pdid):
    """Ensure we only generate one l for each r+t"""
    gen=set()
    ret=set()
    # TODO: priority-sort pdid by looking at l's; generatable forms first
    for LR,l,r,t in sorted(pdid, key=LR_sort_key):
        # If we've already added a form for this analysis without LR,
        # then ensure we don't generate this form:
        if (r,t) in gen:
            LR = True
        ret.add((LR, l, r, t))
        if not LR:
            gen.add((r,t))
    return sorted(ret, key=lambda e: (e[2:])) # sort by analysis


def main():
    d = readlines()
    sdefs = get_sdefs(d)
    print ("""<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<dictionary>
 <alphabet>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖØÙÚÛÜàáâäåæçèéêëìíîïñòóôöøùúûüŠš</alphabet>
 <sdefs>
""")
    print ("\n".join(("\t<sdef n=\"{}\" \tc=\"{}\"/>".format(s,s)
                      for s in sdefs)))
    print ("""
 </sdefs>
 <pardefs>
""")
    section=[]
    used_pns=set()
    for saldoname in d:
        for pdid in d[saldoname]:
            if pdid==():
                print ("<!-- empty pdid! giving up on {}, {} -->".format(saldoname, pdid))
                continue
            if len(set([r for _,_,r,_ in pdid]))>1:
                print ("<!-- more than one r! giving up on {}, {} -->".format(saldoname, pdid))
                continue
            r=[r for _,_,r,_ in pdid][0]
            pn = make_pn(used_pns, saldoname, d, pdid, r)
            used_pns.add(pn)
            print ("  <pardef n=\"{}\" c=\"SALDO: {} \">".format(pn, saldoname))
            longest_form = sorted(map(len, [l.replace(" ", "<b/>") for _,l,_,_ in pdid]))[-1]
            for LR,l,r,t in uniq_gen(pdid):
                s = "<s n=\"{}\"/>".format(t.replace(".", "\"/><s n=\""))
                rstr = " r=\"LR\">" if LR else ">       "
                sep = " "*(longest_form-len(l))
                print ("<e{}<p><l>{}</l> {}<r>{}{}</r></p></e>".format(rstr,
                                                                       l.replace(" ","<b/>"),
                                                                       sep,
                                                                       r.replace(" ","<b/>"),
                                                                       s))
            print ("  </pardef>\n")
            for prefix in d[saldoname][pdid]:
                lemma=prefix+r
                e = "<e lm=\"{}\"><i>{}</i><par n=\"{}\"/></e>".format(lemma,
                                                                       prefix.replace(" ","<b/>"),
                                                                       pn)
                section.append(e)

    print (""" </pardefs>
 <section id=\"saldo\" type=\"standard\">

""")
    print ("\n".join(section))
    print ("""

 </section>
</dictionary>""")

if __name__ == "__main__":
    main()

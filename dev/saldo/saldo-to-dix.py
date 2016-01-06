#!/usr/bin/env python3

# After running scrape-paradigms.sh (until you have ~no 0-size files left), do
# $ find paradigms -name '*xml' -type f -print0 |xargs -0 cat |python3 saldo-to-dix.py


# TODO:
# * check if there are more strange forms that could go into LR_sort_key

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

def rev_str(s):
    return "".join(list(reversed(s)))

def get_queue(table):
    """Return pair of queue and negative queue length if all forms end in
    an invariant queue started by a space. Return None as length if
    there is no such queue. The returned `qback` is suitable for
    chopping using `string[:qback]`

    """
    _, forms, lemmas, _, _ = unzip(table)
    spcs_i = set(rev_str(s).rfind(" ") for s in forms+lemmas)
    if len(set(spcs_i)) == 1:
        q1 = spcs_i.pop()
        if q1 == -1 or len(set(forms))==1:
            return '', None
        else:
            q = 1 + q1          # include the space
            queue = lemmas[0][-q:]
            return queue, -q
    return '', None

def readlines():
    lno=0
    d={}
    saldonames={}
    table=[]
    for line in sys.stdin:
        lno+=1
        if re.match(".*<table>", line):
            table=[]
        if re.match(".*<w>", line):
            m = re.match("<w><form>(.*)</form><gf>(.*)</gf><pos>(.*)</pos><is>(.*)</is><msd>(.*)</msd><p>(.*)</p></w>", line)
            if not m:
                print("WARNING: Couldn't parse line {}, {}".format(lno, line.rstrip()),
                      file=sys.stderr)
            else:
                form = m.group(1)
                lemma = m.group(2)
                t_spc = "{} {} {}".format(m.group(3), m.group(4), m.group(5))
                LR, t = fixtags(form, t_spc.split())
                saldoname = m.group(6)
                if lemma.strip()=="" or form.strip()=="" or t.strip()=="":
                    print("WARNING: skipping empty form/lemma/tags at line {}, {}".format(lno, line.rstrip()),
                          file=sys.stderr)
                elif skip_entry(form,lemma,t,saldoname):
                    pass
                else:
                    table.append([LR,form,lemma,t,saldoname])
        if re.search("</table>", line):
            if(len(table)) == 0:
                print("EMPTY TABLE: {}, at line {}, {}".format(table, lno, line.rstrip()),
                      file=sys.stderr)
                continue
            prefix, prelen = get_prefix(table, lno, line)
            queue, qback = get_queue(table)
            pdid_nosub = tuple(sorted(set(
                (LR, form[prelen:qback], lemma[prelen:qback], t, tuple())
                for LR, form, lemma, t, saldoname in table
            )))
            subpars, pdid = with_subpar(uniq_gen(sint_adj(pdid_nosub)))
            if skip_pdid(pdid):
                continue
            if not pdid in d:
                d[pdid]=set()
            d[pdid].add((prefix, queue))
            if not pdid in saldonames:
                saldonames[pdid]=set()
            saldonames[pdid].add(saldoname)
    return saldonames, d

def skip_entry(form,lemma,t,saldoname):
    mainpos = t.split(".")[0]
    if mainpos != "n" and ".compound-only-L" in t:
        # Only compound on n over a certain length:
        return len(form)>2
    return False

def skip_pdid(pdid):
    LRs,forms,lemmas,tags,_ = unzip(pdid)
    flattags = set(tag
                   for ts in tags
                   for tag in ts.split("."))
    if any(tag in SKIP_ENTRIES for tag in flattags):
        return True
    # MWE verbs with sig/sin aren't tagged for person/number, skip:
    if "vblex" in flattags:
        if any(" sig" in l for l in forms) and any(" dig" in l for l in forms):
            return True
        if any(" sin" in l for l in forms) and any(" din" in l for l in forms):
            return True
    return False

SKIP_ENTRIES=set([               # after fixtags, skip any entry in this set
    "multiword_prefix",
    "multiword_clause",
    "prefix",
    "adverb_suffix",
    "adjective_suffix",
    "noun_suffix",
])
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
    "num"       :"",            # subpos of nl it seems
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
    "poss"      :"pos",
    "pl"        :"pl",
    "p"         :"pl",                   # difference with pl?
    "nom"       :"nom",
    "komp"      :"comp",
    "pos"       :"pst",
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
    "h"         :"",# "suffix", # "De Geer", "Descartes", "Hus"

    # TODO:
    "v"         :"un",                   #"neuter--non-neuter",
    "w"         :"",            # neuter-plural – remove; only proper nouns like "OD"
    "konj"      :"subjunctive",          # verbs; see MTAGCHANGES
    "invar"     :"",

    # see SKIP_ENTRIES:
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
    "ae"        :"",#"food",                # (coca cola)
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
    ("n.pl.pl")                     :("n.un.pl"),
    ("np.pl.np")                    :("np.pl"),
    ("np.ut.np")                    :("np.ut"),
    ("np.np")                       :("np"),
    ("np.f.ant")                    :("np.ant.f"),
    ("np.m.ant")                    :("np.ant.m"),
    ("np.nt.org")                   :("np.org.nt"),
    ("np.nt.top")                   :("np.top.nt"),
    ("np.un.top")                   :("np.top.un"),
    ("np.ut.org")                   :("np.org.ut"),
    ("np.ut.top")                   :("np.top.ut"),

    # nno/nob: comp.un.sp
    ("adj.comp")          :("adj.comp.un.sp"),
    # nno/nob: pst.{mf,nt}.sg.ind
    ("adj.pst.ind.sg.ut") :("adj.pst.ut.sg.ind"),
    ("adj.pst.ind.sg.nt") :("adj.pst.nt.sg.ind"),
    # nno/nob: pst.un.pl.ind
    ("adj.pst.ind.pl")    :("adj.pst.un.pl.ind"),
    #          pst.un.sp.def
    ("adj.pst.def.pl")    :("adj.pst.un.pl.def"),
    ("adj.pst.def.sg.fn") :("adj.pst.fn.sg.def"),
    ("adj.pst.def.sg.m")  :("adj.pst.m.sg.def"),
    # nno/nob: sup.un.sp.{ind,def}
    ("adj.sup.def.fn")    :("adj.sup.fn.sp.def"),
    ("adj.sup.def.m")     :("adj.sup.m.sp.def"),
    ("adj.sup.ind")       :("adj.sup.un.sp.ind"),

    # compound-only-L is sg.ind.nom so there
    ("n.un.pl.cmp.compound-only-L") :("n.un.sg.ind.nom.cmp.compound-only-L"),
    ("n.un.pl.cmp-split")           :("n.un.sg.ind.nom.cmp-split"),
    ("n.pl.cmp.compound-only-L")    :("n.un.sg.ind.nom.cmp.compound-only-L"),
    ("n.pl.cmp-split")              :("n.un.sg.ind.nom.cmp-split"),
    ("n.ut.cmp.compound-only-L")    :("n.ut.sg.ind.nom.cmp.compound-only-L"),
    ("n.ut.cmp-split")              :("n.ut.sg.ind.nom.cmp-split"),
    ("n.nt.cmp.compound-only-L")    :("n.nt.sg.ind.nom.cmp.compound-only-L"),
    ("n.nt.cmp-split")              :("n.nt.sg.ind.nom.cmp-split"),
    ("n.un.cmp.compound-only-L")    :("n.un.sg.ind.nom.cmp.compound-only-L"),
    ("n.un.cmp-split")              :("n.un.sg.ind.nom.cmp-split"),
}
NEEDS_LR = set([
    "cm",
    ])
def fixtag(tag):
    return TAGCHANGES.get(tag, tag)
def fixtags(form, tags):
    LR = any(tag in NEEDS_LR for tag in tags)
    ts = ".".join(fixtag(tag) for tag in tags)
    ts = re.sub(r'[.][.]+', '.', ts)
    ts = re.sub(r'^[.]|[.]$', '', ts)
    for bad,good in sorted(MTAGCHANGES.items(),
                           # LRLM:
                           key=lambda kv: len(kv[0])):
        if ts.startswith(bad):
            ts = good + ts[len(bad):]
    if len(form)>2 and ts.startswith('n.') and not (ts.endswith('.compound-only-L')
                                                    or ts.endswith('.cmp-split')):
        ts += '.compound-R'
    return LR, ts

def rem_superfluous_LR(pdid):
    return tuple(sorted(set(
        (LR,l,r,t,p)
        for (LR,l,r,t,p) in pdid
        if not (LR and (False,l,r,t,p) in pdid)
    )))

def sint_adj(pdid):
    _,_,_,tags,_ = unzip(pdid)
    if any(t.startswith("adj.comp") or t.startswith("adj.sup") for t in tags):
        return tuple(sorted(set(
            (LR,l,r,t.replace('adj.', 'adj.sint.'),p)
            for (LR,l,r,t,p) in pdid
        )))
    else:
        return pdid

def with_subpar(pdid):
    cpdids = {}
    pats = [ ('.gen'                     , '.nom'),
             ('.nom.cmp.compound-only-L' , '.nom'),
             ('.nom.cmp-split'           , '.nom'),
             ('.gen.compound-R'          , '.nom.compound-R'),
             ('.nom.cmp.compound-only-L' , '.nom.compound-R'),
             ('.nom.cmp-split'           , '.nom.compound-R'),
             ]
    pdid = set(pdid)
    doRem = set()
    doAdd = set()
    for pat,pat_ in pats:
        es = [e for e in pdid if e[3].endswith(pat)]
        for e in es:
            LR,l,r,t,p = e
            plain = t[:-len(pat)]
            for other in pdid:
                LR_,l_,r_,t_,p_ = other
                if l.startswith(l_) and r==r_ and plain+pat_==t_:
                    doRem.add(other)
                    other = (LR_, l_, r_, plain,p_)
                    doAdd.add(other)
                    if other not in cpdids: cpdids[other]=set()
                    LRs  = False if LR==LR_ else LR
                    LRs_ = False if LR==LR_ else LR_
                    cpdids[other].add((LRs,  l[len(l_):], '',  pat.lstrip('.'), p ))
                    cpdids[other].add((LRs_, '',          '', pat_.lstrip('.'), p_))
                    doRem.add(e)
    cpdids = { other:rem_superfluous_LR(uniq_gen(cpdid))
               for other,cpdid in cpdids.items() }
    with_sub=[]
    for e in (pdid-doRem)|doAdd:
        LR,l,r,t,p=e
        if e in cpdids:
            with_sub.append((LR,l,r,t,cpdids[e]))
        else:
            with_sub.append(e)
    return cpdids.values(), rem_superfluous_LR(with_sub)


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
    _,_,_,tags,_ = unzip(pdid)
    if any(t.startswith("vb") for t in tags):
        # adj+vblex pardef → vblex
        return "vblex"
    elif all(t.startswith("n.") for t in tags):
        gens = set(
            ts[1]
            for t in tags
            for ts in [t.split(".")]
            if len(ts)>1
            and ts[1] in ["f","nt","m","ut","un"]
        )
        if len(gens)==1:
            return "n_{}".format(gens.pop())
        else:
            return "n"
    else:
        return tags[0].split(".")[0]

def try_make_pn(pnprefix, pdid, r):
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
    if saldoname=="_SUB_":
        # Just rename these manually afterwards:
        return "{}_SUB".format(len(used))
    r = r.replace(" ", "_")
    saldoword = saldoname.split("_")[-1]
    prefixes = [p for p,q in d[pdid]]
    good_prefixes = maybe_saldoprefix(prefixes, saldoword, r) + sorted(prefixes, key=len)
    guess = ""
    for prefix in good_prefixes:
        guess = try_make_pn(prefix, pdid, r)
        if not guess in used:
            return guess
    # Giving up and just prefixing with a number (seems to happen when
    # some lemmas have duplicate pardefs)
    return "{}_{}".format(len(used), guess)

def get_sdefs(d):
    return set(
        tag
        for pdid in d
        for _,_,_,t,_ in pdid
        for tag in t.split(".")
    )

def LR_sort_key(e):
    """Prioritise certain forms if we have several forms with one analysis"""
    return ("-" in e[1], e[1])

def uniq_gen(pdid):
    """Ensure we only generate one l for each r+t"""
    gen=set()
    ret=set()
    for LR,l,r,t,p in sorted(pdid, key=LR_sort_key):
        # If we've already added a form for this analysis without LR,
        # then ensure we don't generate this form:
        if (r,t,p) in gen:
            LR = True
        ret.add((LR, l, r, t, p))
        if not LR:
            gen.add((r,t,p))
    return ret

def pardef_sort_key(pdid):
    """Sort by tags, then lemma-suffix"""
    # reversed so we call it "vblex" if both vblex and adj in one pardef:
    return list(reversed([(t,r) for _,_,r,t,_ in pdid]))

def main():
    saldonames, d = readlines()
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
    pnmap={}
    subpardefs = set(p for pdid in d for _,_,_,_,p in pdid if p)
    for sub in subpardefs:
        pn, pdef = make_pardef({sub:set()}, sub, "_SUB_", used_pns, pnmap)
        pnmap[sub]=pn
        print (pdef)
    for pdid in sorted(d, key=pardef_sort_key):
        saldoname = " / ".join(saldonames[pdid])
        pn, pdef = make_pardef(d, pdid, saldoname, used_pns, pnmap)
        pnmap[pdid]=pn
        print(pdef)
        for prefix, queue in sorted(d[pdid]):
            r=[r for _,_,r,_,_ in pdid][0]
            section.append(make_e(prefix, queue, r, pn))
    print (""" </pardefs>
 <section id=\"saldo\" type=\"standard\">

""")
    print ("\n".join(section))
    print ("""

 </section>
</dictionary>""")

def bspc(word):
    return word.replace(" ", "<b/>")

def make_pardef(d, pdid, saldoname, used_pns, pnmap):
    if pdid==():
        return "", "<!-- empty pdid! giving up on {}, {} -->".format(saldoname, pdid)
    if len(set([r for _,_,r,_,_ in pdid]))>1:
        return "", "<!-- more than one r! giving up on {}, {} -->".format(saldoname, pdid)
    r=[r for _,_,r,_,_ in pdid][0]
    pn = make_pn(used_pns, saldoname, d, pdid, r)
    used_pns.add(pn)
    longest_form = sorted(map(len, [bspc(l) for _,l,_,_,_ in pdid]))[-1]
    elts = ""
    for LR,l,r,t,p in sorted(pdid, key=lambda e: (e[2:])): # sort by analysis
        s = "<s n=\"{}\"/>".format(t.replace(".", "\"/><s n=\""))
        rstr = " r=\"LR\">" if LR else ">       "
        sep = " "*(longest_form-len(bspc(l)))
        sub = "<par n=\"{}\"/>".format(pnmap[p]) if p in pnmap else ""
        elts += "<e{}<p><l>{}</l> {}<r>{}{}</r></p>{}</e>\n".format(rstr,
                                                                    bspc(l),
                                                                    sep,
                                                                    bspc(r),
                                                                    s,
                                                                    sub)
    return pn, """  <pardef n="{}" c="SALDO: {} ">\n{}  </pardef>\n""".format(pn,
                                                                              saldoname,
                                                                              elts)


def make_e(prefix, queue, r, pn):
    lemma=prefix+r+queue
    g = "" if queue == "" else ' <p><l>{}</l><r><g>{}</g></r></p>'.format(bspc(queue),
                                                                          bspc(queue))
    return '<e lm="{}"><i>{}</i><par n="{}"/>{}</e>'.format(lemma,
                                                            bspc(prefix),
                                                            pn,
                                                            g)
if __name__ == "__main__":
    main()

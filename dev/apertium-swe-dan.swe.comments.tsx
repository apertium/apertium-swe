<?xml version="1.0" encoding="UTF-8"?>
<tagger name="swedish">


<!-- List of labels:
PREP Prepositions

PRNTONIC  *** not applicable ***

PRNSUBJ Subject form of personal pronouns
PRNOBJ Object form of personal pronouns
PRNPOS Possessive prounouns and determiners, incl. genitiv
PRNREF Reflexive/reciprocal pronouns
PRN any pronoun

ONLYPRN *** not applicable ***

CNJCOO Co-ordinating conjunction
CNJSUB Sub-ordinating conjunction
CNJADV Adverbial conjunction

*** label for <sdef n="cnjadv" 	c="Adverbial conjunction"/> is missing ***

DETDEM Demonstrative pronoun
DETIND Indefinite determiner
DETDEF Definite determiner

DETPOS *** not in use: PRONPOS instead ***

DETORD Ordinal determiner (ordinal number)
DETQNT Quantifier
IJ Interjections

REL *** not applicable ***

NOMSDEF Definite noun
NOMSSING Noun in singular
NOMSPROPIS Proper noun
NOMSNEUTREUTRE Common gender or neuter *** not applicable ***
NOMSNEUTRE Noun, Neuter
NOMSUTRE Noun, Common gender (Utrum)

ADV Adverb

PREADV *** not applicable ***
ADVS *** not applicable ***
ADVPOS *** not applicable ***
CONJADV *** not applicable ***

ADJPLUR adjective in plural NEW
ADJ Adjective
NUM Numeral

NUMS *** not applicable ***
VBMODDA *** not applicable ***
VBMODPRET *** not applicable ***

VBMODINF Modal verb: infinitive
VBMODINFS Modal verb: infinitive + eg. active voice/passive voice
VBMODPRES Modal verb: presens
VBMODPRESS Modal verb: presens + eg. active voice/passive voice
VBMODPAST Modal verb: Past
VBMODPASTS Modal verb: Past + eg. active voice/passive voice
VBMODSUPN Modal verb: Supinum
VBMODPPRES Modal verb: Present participle
VBMODIMP Modal verb: Imperfekt NEW

VBAUXPRS *** not applicable ***
VBAUXDA *** not applicable ***
VBAUXPRET *** not applicable ***
VBAUXINF *** not applicable *** see VAUXINF etc!

VBSPRS *** not applicable ***
VBSDA *** not applicable ***
VBSPRET *** not applicable ***
VBSINF *** not applicable ***

VBLEXPRS Lexical (normal) verb: Present (presens)
VBLEXDA Lexical (normal) verb: Past
VBLEXPART Lexical (normal) verb: Past participle
VBLEXPPRES Lexical (normal) verb: Present participle
VBLEXINF Lexical (normal) verb: Infinitive
VBLEXSUPN Lexical (normal) verb: Supine (Supinum)
VBLEXSUPNS Lexical (normal) verb: Supine + eg. active voice
VBLEXPRET *** not defined ***

VBSERINF vbser (to be): infinitive
VBSERPAST vbser (to be): past
VBSERPRES vbser (to be): present
VBSERSUPN vbser (to be): Supine
VBSERPPRES vbser (to be): Present participle
VBSERPPRESS *** not applicable ***
VBSERIMP vbser (to be): imperfect NEW

VBHAVERPRES vbhaver (to have): present
VBHAVERPAST vbhaver (to have): past
VBHAVERPPRES vbhaver (to have): Present participle
VBHAVERINF vbhaver (to have): Infinitive
VBHAVERSUPN vbhaver (to have): Supine
VBHAVERPP vbhaver (to have): Past participl

VAUXINF auxilary verb: Infinitive
VAUXPRES auxilary verb: Present
VAUXPAST auxilary verb: Past
VAUXPASTS auxilary verb: *** Not used ***
VAUXSUPN auxilary verb: Supine
VAUXSUPNS auxilary verb: *** Not used ***

ADVHÄR lemma 'här':  *** Not used ***

VBCLOSED all other vbser and vbhaver

VB all other lexical verbs (open)

PT: Klart tom rad 1028.

-->

<tagset>

<!-- PT: Prepositions -->
   <def-label name="PREP" closed="true">
    <tags-item tags="pr"/>
  </def-label>
  
<!-- PT: Not applicable  
  <def-label name="PRNTONIC" closed="true">
    <tags-item tags="prn.tn.*"/>
  </def-label>
 -->

<!-- PT: Subject form -->
  <def-label name="PRNSUBJ" closed="true">
	<tags-item tags="prn.pers.p1.un.sg.nom"/>
	<tags-item tags="prn.pers.p2.un.sg.nom"/>
	<tags-item tags="prn.pers.p3.ut.sg.nom"/>
  </def-label>

<!-- PT: Object form -->  
  <def-label name="PRNOBJ" closed="true">
    <tags-item tags="prn.pers.p1.un.sg.acc"/>
	<tags-item tags="prn.pers.p2.un.sg.acc"/>
	<tags-item tags="prn.pers.p3.ut.sg.acc"/>
  </def-label>

<!-- PT: Possessive prounouns and determiners, incl. genitive -->
  <def-label name="PRNPOS" closed="true">
    <!-- PT: not used anywhere <tags-item tags="prn.pos.*"/> -->
	<tags-item tags="det.pos.*"/>
	<tags-item tags="prn.pers.p3.ut.sg.gen"/>
	<tags-item tags="prn.pers.p3.ut.pl.gen"/>	
  </def-label>
 
<!-- PT: Reflexive/reciprocal pronouns --> 
  <def-label name="PRNREF" closed="true">
    <tags-item tags="prn.ref.*"/>
  </def-label>
  
<!-- PT: Any pronoun --> 
  <def-label name="PRN" closed="true">
    <tags-item tags="prn.*"/>
  </def-label>

<!-- PT: Not applicable  
  <def-label name="ONLYPRN" closed="true">
    <tags-item tags="prn"/>
  </def-label>
-->
 
<!-- PT: Co-ordinating conjunction --> 
    <def-label name="CNJCOO" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label>

<!-- PT: Sub-ordinating conjunction -->   
  <def-label name="CNJSUB" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label>
  
<!-- PT: Adverbial conjunctionn -->   
  <def-label name="CNJADV" closed="true">
    <tags-item tags="cnjadv"/>
  </def-label>

<!-- PT: Demonstrative pronoun -->    
  <def-label name="DETDEM" closed="true">
    <tags-item tags="det.dem.*"/>
  </def-label>

<!-- PT: Indefinite determiner -->  
<!-- PT: Useful to prevent definite form to follow -->
  <def-label name="DETIND" closed="true">
    <tags-item tags="det.ind.*"/>
  </def-label>

<!-- PT: Definite determiner -->   
  <def-label name="DETDEF" closed="true">
    <tags-item tags="det.def.*"/>
  </def-label>

<!-- PT: PRONPOS instead
  <def-label name="DETPOS" closed="true">
    <tags-item tags="det.pos.*"/>
  </def-label>
-->

<!-- PT: Ordinal number -->	
  <def-label name="DETORD" closed="true">
    <tags-item tags="det.ord.*"/>
  </def-label>

<!-- PT: Quantifier -->	 
  <def-label name="DETQNT" closed="true">
    <tags-item tags="det.qnt.*"/>
  </def-label>

<!-- PT: Interjections -->  
  <def-label name="IJ" closed="true">
    <tags-item tags="ij"/>
  </def-label>

<!-- PT: not applicable 
  <def-label name="REL" closed="true">
    <tags-item tags="rel.*"/>
  </def-label>
 --> 

<!-- PT: Definite noun --> 
<!-- PT: NEW Useful to prevent definite form to follow indefinite article --> 
  <def-label name="NOMSDEF" closed="true">
    <tags-item tags="n.*.*.def"/>
  </def-label>
  
<!-- PT: noun in singular--> 
<!-- PT: NEW Useful to prevent singular noun to follow plural adjective --> 
  <def-label name="NOMSSING" closed="true">
    <tags-item tags="n.*.sg.*"/>
  </def-label>
  
  <def-label name="NOMSPROPIS">
    <tags-item tags="np.*"/>
  </def-label>
  
<!-- PT: not applicable   
  <def-label name="NOMSNEUTREUTRE">
    <tags-item tags="n.un.*"/>
  </def-label>
 --> 
 
  <def-label name="NOMSNEUTRE">
    <tags-item tags="n.nt.*"/>
  </def-label>
  <def-label name="NOMSUTRE">
    <tags-item tags="n.ut.*"/>
  </def-label>
  <def-label name="ADV">
    <tags-item tags="adv"/>
  </def-label>
  
<!-- PT: not applicable  
  <def-label name="PREADV">
    <tags-item tags="preadv"/>
  </def-label> 
  <def-label name="ADVS">
    <tags-item tags="adv.*"/>
  </def-label>
  <def-label name="ADVPOS">
    <tags-item tags="adv.pos"/>
  </def-label>  
  <def-label name="CONJADV">
    <tags-item tags="cnjadv"/>
  </def-label>
 -->

 <!-- PT: Adjective in plural --> 
<!-- PT: NEW Useful to prevent noun in singular to follow adjective in plural --> 
  <def-label name="ADJPLUR"  closed="true">
    <tags-item tags="adj.*.*.pl.*"/>
  </def-label>
  
  <def-label name="ADJ">
    <tags-item tags="adj.*"/>
  </def-label>
  
  <def-label name="NUM">
    <tags-item tags="num"/>
  </def-label>

<!-- PT: not applicable    
  <def-label name="NUMS">
    <tags-item tags="num.*"/>
  </def-label>
 -->

<!-- Modal verbs -->

<!-- PT: not applicable  
  <def-label name="VBMODDA" closed="true">
    <tags-item tags="vbmod.da"/>
  </def-label>
 --> 

<!-- PT: not applicable   
  <def-label name="VBMODPRET" closed="true">
    <tags-item tags="vbmod.part"/>
  </def-label>
 -->  
  
  <def-label name="VBMODINF" closed="true">
    <tags-item tags="vbmod.inf"/>
  </def-label>
  <def-label name="VBMODINFS" closed="true">
    <tags-item tags="vbmod.inf.*"/>
  </def-label>
  <def-label name="VBMODPRES" closed="true">
    <tags-item tags="vbmod.pres"/>
  </def-label>
  <def-label name="VBMODPRESS" closed="true">
    <tags-item tags="vbmod.pres.*"/>
  </def-label>
  <def-label name="VBMODPAST" closed="true">
    <tags-item tags="vbmod.past"/>
  </def-label>
  <def-label name="VBMODPASTS" closed="true">
    <tags-item tags="vbmod.past.*"/>
  </def-label>
  <def-label name="VBMODSUPN" closed="true">
    <tags-item tags="vbmod.supn.*"/>
  </def-label>
  <def-label name="VBMODPPRES" closed="true">
    <tags-item tags="vbmod.pprs"/>
  </def-label>

<!-- PT: NEW   Modal verb: Imperfekt -->
  <def-label name="VBMODIMP" closed="true">
    <tags-item tags="vbmod.imp"/>
  </def-label>

<!-- Auxilary verbs -->

<!-- PT: not applicable   
   <def-label name="VBAUXPRS" closed="true">
    <tags-item tags="vbaux.prs"/>
  </def-label>
  <def-label name="VBAUXDA" closed="true">
    <tags-item tags="vbaux.da"/>
  </def-label>
  <def-label name="VBAUXINF" closed="true">
    <tags-item tags="vbaux.inf"/>
  </def-label>
  <def-label name="VBAUXPRET" closed="true">
    <tags-item tags="vbaux.part"/>
  </def-label>
--> 

<!-- PT: not applicable  
   <def-label name="VBSPRS" closed="true">
    <tags-item tags="vbs.prs"/>
  </def-label>
  <def-label name="VBSDA" closed="true">
    <tags-item tags="vbs.da"/>
  </def-label>
  <def-label name="VBSPRET" closed="true">
    <tags-item tags="vbs.part"/>
  </def-label>
  <def-label name="VBSINF" closed="true">
    <tags-item tags="vbs.inf"/>
  </def-label>
--> 

<!-- Lexikal verbs -->

   <def-label name="VBLEXPRS" closed="true">
    <tags-item tags="vblex.pres.*"/>
  </def-label>
  <def-label name="VBLEXDA" closed="true">
    <tags-item tags="vblex.past.*"/>
  </def-label>
  <def-label name="VBLEXPART" closed="true">
    <tags-item tags="vblex.pp.*"/>
  </def-label>
  <def-label name="VBLEXPPRES" closed="true">
    <tags-item tags="vblex.pprs"/>
  </def-label>
  <def-label name="VBLEXINF" closed="true">
    <tags-item tags="vblex.inf.*"/>
  </def-label>
  <def-label name="VBLEXSUPN" closed="true">
    <tags-item tags="vblex.supn"/>
  </def-label>
  <def-label name="VBLEXSUPNS" closed="true">
    <tags-item tags="vblex.supn.*"/>
  </def-label>

<!-- verb ser: "To be"  -->

  <def-label name="VBSERINF" closed="true">
    <tags-item tags="vbser.inf.*"/>
  </def-label>
  <def-label name="VBSERPAST" closed="true">
    <tags-item tags="vbser.past.*"/>
  </def-label>
  <def-label name="VBSERPRES" closed="true">
    <tags-item tags="vbser.pres.*"/>
  </def-label>
  <def-label name="VBSERSUPN" closed="true">
    <tags-item tags="vbser.supn.*"/>
  </def-label>
  <def-label name="VBSERPPRES" closed="true">
    <tags-item tags="vbser.pprs"/>
  </def-label>
  
<!-- PT: Not applicable
  <def-label name="VBSERPPRESS" closed="true">
    <tags-item tags="vbser.pprs.*"/>
  </def-label>
 --> 

<!-- PT: NEW vbser (to be): imperfect --> 
  <def-label name="VBSERIMP" closed="true">
    <tags-item tags="vbser.imp"/>
  </def-label>

<!-- Verb haver: "To have" -->  

  <def-label name="VBHAVERPRES" closed="true">
    <tags-item tags="vbhaver.pres.*"/>
  </def-label>
  <def-label name="VBHAVERPAST" closed="true">
    <tags-item tags="vbhaver.past.*"/>
  </def-label>
  <def-label name="VBHAVERPPRES" closed="true">
    <tags-item tags="vbhaver.pprs"/>
  </def-label>
  
<!-- PT: Introduced different tags for different kinds of verbs above -->
<!-- PT: Keep those if useful, otherwise keep the one below. -->
<!-- PT
  <def-label name="IMP">
    <tags-item tags="vblex.imp"/>
    <tags-item tags="vbser.imp"/>
    <tags-item tags="vbhaver.imp"/>
  </def-label>
-->

  <def-label name="VBHAVERINF" closed="true">
    <tags-item tags="vbhaver.inf.*"/>
  </def-label>
  <def-label name="VBHAVERSUPN" closed="true">
    <tags-item tags="vbhaver.supn.*"/>
  </def-label>
  <def-label name="VBHAVERPP" closed="true">
    <tags-item tags="vbhaver.pp.*"/>
  </def-label>
  
  <def-label name="VAUXINF" closed="true">
    <tags-item tags="vaux.inf.*"/>
  </def-label>
  <def-label name="VAUXPRES" closed="true">
    <tags-item tags="vaux.pres.*"/>
  </def-label>
  <def-label name="VAUXPAST" closed="true">
    <tags-item tags="vaux.past"/>
  </def-label>
  
  <!-- PT: not used
  <def-label name="VAUXPASTS" closed="true">
    <tags-item tags="vaux.past.*"/>
  </def-label>
  -->
  
  <def-label name="VAUXSUPN" closed="true">
    <tags-item tags="vaux.supn"/>
  </def-label>
  
  <!-- PT användning???
  <def-label name="VAUXSUPNS" closed="true">
    <tags-item tags="vaux.supn.*"/>
  -->
  
  <!-- PT användning???
  </def-label>
  <def-label name="ADVHÄR" closed="true">
    <tags-item lemma="här" tags="adv"/>
  </def-label>
  -->
 
  <def-label name="VBCLOSED" closed="true">
    <tags-item tags="vbser.*"/>
    <tags-item tags="vbhaver.*"/>
  </def-label>

   <def-label name="VB">
    <tags-item tags="vblex.*"/>
  </def-label>

</tagset>

  <forbid>
  
<!-- PT: NEW Useful to prevent definite form to follow indefinite article --> 
    <label-sequence>
      <label-item label="DETIND"/> <!-- PT: indefinite article -->
      <label-item label="NOMSDEF"/> <!-- PT: definite noun -->
    </label-sequence>

<!-- PT: NEW Useful to prevent singular form to follow plural adjective --> 
    <label-sequence>
      <label-item label="ADJPLUR"/> <!-- PT: indefinite article -->
      <label-item label="NOMSSING"/> <!-- PT: noun in singular -->
    </label-sequence>

    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="PRNSUBJ"/>
    </label-sequence>


    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="NOMNEUTRE"/>	  
    </label-sequence>
	
<!-- PT: NEW -->		
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="NOMSSING"/>
    </label-sequence>
	
<!-- PT: NEW -->		
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="NOMNEUTRE"/>
    </label-sequence>
	
<!-- PT: NEW -->		
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="NOMSSING"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="NOMUTRE"/>
    </label-sequence>
	
<!-- PT: NEW -->	
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="NOMUTRE"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="NOMUTRE"/>
      <label-item label="NOMUTRE"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="NOMUTRE"/>
      <label-item label="NOMNEUTRE"/>
    </label-sequence>

<!-- PT: NEW -->	
    <label-sequence>
      <label-item label="NOMUTRE"/>
      <label-item label="NOMSSING"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
	
<!-- PT: NEW -->	
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="NOMUTRE"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <!-- PT <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
    </label-sequence>
	
<!-- PT: NEW -->
    <label-sequence>
      <label-item label="NOMSSING"/>
      <!-- PT <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
    </label-sequence>	
	
    <label-sequence>
      <label-item label="NOMUTRE"/>
      <!-- PT <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
    </label-sequence>
		
    <label-sequence>
      <label-item label="NOMUTRE"/>
      <label-item label="ADJ"/>
    </label-sequence>
	
<!-- PT: NEW -->
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="ADJ"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="ADJ"/>
    </label-sequence>
	
<!-- PT: NEW begin -->

    <label-sequence>
      <label-item label="NOMUTRE"/>
      <label-item label="ADJPLUR"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="ADJPLUR"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="ADJPLUR"/>
    </label-sequence>

<!-- PT: NEW end -->

<!-- PT: Not applicable
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="NOMNEUTRE"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="NOMUTRE"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="PREP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="PRNTONIC"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="DETPOS"/> 
	  <label-item label="PRONPOS"/>
    </label-sequence>

    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="REL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="DETDEF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="PRNREF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="CNJSUB"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="CNJADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="DETIND"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="IJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNTONIC"/>
      <label-item label="ADJ"/>
    </label-sequence>
-->	
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
	
<!-- PT: NEW -->
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="CNJSUB"/>
    </label-sequence>

<!-- PT: NEW -->
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="CNJSUB"/>
    </label-sequence>	
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="DETDEM"/>
    </label-sequence>
	
<!-- PT: NEW -->
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="DETDEM"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="DETIND"/>
    </label-sequence>

<!-- PT: NEW -->	
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="DETIND"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="DETDEF"/>
    </label-sequence>

<!-- PT: NEW -->
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="DETDEF"/>
    </label-sequence>	
	
    <label-sequence>
      <label-item label="ADJ"/>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
    </label-sequence>

<!-- PT: NEW -->	
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
    </label-sequence>

<!--	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="REL"/>
    </label-sequence>
-->
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBLEXPRS"/>
    </label-sequence>
	
<!-- PT: NEW -->
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="VBLEXPRS"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBLEXDA"/>
    </label-sequence>
	
<!-- PT: NEW -->
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="VBLEXDA"/>
    </label-sequence>

<!-- PT: not defined	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBLEXPRET"/>
    </label-sequence>
-->	
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBMODPRS"/>
    </label-sequence>
	
<!-- PT: NEW -->
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="VBMODPRS"/>
    </label-sequence>

<!-- PT: *** not applicable ***	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBMODDA"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBMODPRET"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBAUXPRS"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBAUXDA"/>
    </label-sequence>

    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBAUXPRET"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBERPRS"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBERDA"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBERPRET"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBHARPRS"/>
    </label-sequence>	
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBHARDA"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBHARPRET"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBSPRS"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBSDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBSPRET"/>
    </label-sequence>
-->	
	
    <label-sequence>
      <label-item label="ADV"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ADV"/>
      <label-item label="IJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="ADV"/>
      <label-item label="PRNREF"/>
    </label-sequence>

<!-- PT: not defined
    <label-sequence>
      <label-item label="PR"/>
      <label-item label="PRNTN"/>
    </label-sequence>

    <label-sequence>
      <label-item label="PR"/>
      <label-item label="CNJCOO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PR"/>
      <label-item label="IJ"/>
    </label-sequence>
-->

<!--	
    <label-sequence>
      <label-item label="PR"/>
      <label-item label="VBAUX"/>
    </label-sequence>

	
    <label-sequence>
      <label-item label="PR"/>
      <label-item label="VBS"/>
    </label-sequence>
-->
	
<!--	
    <label-sequence>
      <label-item label="PR"/>
      <label-item label="VBER"/>
    </label-sequence>

    <label-sequence>
      <label-item label="PR"/>
      <label-item label="VBHAR"/>
    </label-sequence>

    <label-sequence>
      <label-item label="PR"/>
      <label-item label="VBLEX"/>
    </label-sequence>
-->
<!--	
    <label-sequence>
      <label-item label="PR"/>
      <label-item label="VBMOD"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="NP"/>
    </label-sequence>

    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="PR"/>
    </label-sequence>
-->	

    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="ADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="DETDEF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="PRNREF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="PRN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="CNJCOO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="CNJADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="CNJSUB"/>
    </label-sequence>

<!--	
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="REL"/>
    </label-sequence>
-->

    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="IJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="DETIND"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="DETDEM"/>
    </label-sequence>

<!--	
    <label-sequence>
      <label-item label="PRNOBJ"/>
      <label-item label="VBAUX"/>
    </label-sequence>
	
    <label-sequence>
      <label-item label="PRNOBJ"/>
      <label-item label="VBS"/>
    </label-sequence>
-->
	
    <label-sequence>
      <label-item label="PRNOBJ"/>
      <label-item label="VBMOD"/>
    </label-sequence>

<!--	
    <label-sequence>
      <label-item label="PRNOBJ"/>
      <label-item label="VBER"/>
    </label-sequence>
-->
	
    <label-sequence>
      <label-item label="PRNOBJ"/>
      <label-item label="VBHAR"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNOBJ"/>
      <label-item label="VBLEX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNREF"/>
      <label-item label="ADJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNREF"/>
      <label-item label="VBAUX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNREF"/>
      <label-item label="VBS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNREF"/>
      <label-item label="VBMOD"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNREF"/>
      <label-item label="VBER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNREF"/>
      <label-item label="VBHAR"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRNREF"/>
      <label-item label="VBLEX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="NP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="PR"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="ADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="DETDEF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="PRNREF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="PRN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="CNJCOO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="CNJADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="CNJSUB"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="REL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="IJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETDEM"/>
      <label-item label="DETIND"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="NP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="PR"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="ADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="DETDEF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="PRNREF"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="PRN"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="CNJCOO"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="CNJADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="CNJSUB"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="REL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="IJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="DETIND"/>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBLEXDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBLEXPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBMODPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBMODDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBMODPRET"/>
    </label-sequence>

<!--	
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBAUXPRS"/>
    </label-sequence>
-->
	  
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBAUXDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBAUXPRET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBERPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBERDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBERPRET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBHARPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBHARDA"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VBAUX"/>
      <label-item label="VBHARPRET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="PRNTONIC"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBLEXPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBLEXDA"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBLEXPRET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBMODPRS"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBMODDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBMODPRET"/>
    </label-sequence>
<!--	
     <label-sequence>	 
      <label-item label="VBLEX"/>
      <label-item label="VBAUXPRS"/>
    </label-sequence>
-->
	
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBAUXDA"/>
    </label-sequence>
     <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBAUXPRET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBSPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBSDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBSPRET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBERPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBERDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBERRPET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBHARPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBHARDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBLEX"/>
      <label-item label="VBHARPRET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBMOD"/>
      <label-item label="ADJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBMOD"/>
      <label-item label="VBLEX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBMOD"/>
      <label-item label="VBHAR"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBMOD"/>
      <label-item label="VBER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBMOD"/>
      <label-item label="VBMOD"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBMOD"/>
      <label-item label="VBSDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBMOD"/>
      <label-item label="VBSPRET"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBMOD"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBMOD"/>
      <label-item label="PRNREL"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBHAR"/>
      <label-item label="VBLEXPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBHAR"/>
      <label-item label="VBLEXDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBHAR"/>
      <label-item label="VBERPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBHAR"/>
      <label-item label="VBERDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBHAR"/>
      <label-item label="VBHARPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBHAR"/>
      <label-item label="VBHARDA"/>
    </label-sequence>
	
<!--	
    <label-sequence>
      <label-item label="VBHAR"/>
      <label-item label="VBAUXPRS"/>
    </label-sequence>
-->

    <label-sequence>
      <label-item label="VBHAR"/>
      <label-item label="VBAUXDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBHAR"/>
      <label-item label="VBMOD"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBER"/>
      <label-item label="VBLEXPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBER"/>
      <label-item label="VBLEXDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBER"/>
      <label-item label="VBERPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBER"/>
      <label-item label="VBERDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBER"/>
      <label-item label="VBHARPRS"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBER"/>
      <label-item label="VBHARDA"/>
    </label-sequence>

<!--	
    <label-sequence>
      <label-item label="VBER"/>
      <label-item label="VBAUXPRS"/>
    </label-sequence>
-->
	
    <label-sequence>
      <label-item label="VBER"/>
      <label-item label="VBAUXDA"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBER"/>
      <label-item label="VBMOD"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBS"/>
      <label-item label="VBER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBS"/>
      <label-item label="VBHAR"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBS"/>
      <label-item label="VBMOD"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBS"/>
      <label-item label="VBAUX"/>
    </label-sequence>
    <label-sequence>
      <label-item label="VBS"/>
      <label-item label="VBLEX"/>
    </label-sequence>


    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="PR"/>
    </label-sequence>
    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="ADV"/>
    </label-sequence>
    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="PRNTN"/>
    </label-sequence>
    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="VBLEX"/>
    </label-sequence>
    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="VBER"/>
    </label-sequence>
    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="VBHAR"/>
    </label-sequence>
    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="VBAUX"/>
    </label-sequence>
    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="VBMOD"/>
    </label-sequence>
    <label-sequence>
      <!-- <label-item label="DETPOS"/> -->
	  <label-item label="PRONPOS"/>
      <label-item label="VBS"/>
    </label-sequence>

    <label-sequence>
      <label-item label="NOMSNEUTREUTRE"/>
      <label-item label="IMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOMSNEUTRE"/>
      <label-item label="IMP"/>
    </label-sequence>
    <label-sequence>
      <label-item label="NOMSUTRE"/>
      <label-item label="IMP"/>
    </label-sequence>

    <label-sequence>
      <label-item label="IMP"/>
      <label-item label="IMP"/>
    </label-sequence>


    <label-sequence>
      <label-item label="VB"/>
      <label-item label="IMP"/>
    </label-sequence>

	<!--
    <label-sequence>
  <label-item label="PRNSUBJ"/>
  <label-item label="ADVHÄR"/>
    </label-sequence>
	-->

    </forbid>

    <!--
    <enforce-rules>
      <enforce-after label="DETDEF">
        <label-set>
        <label-item label="ADVHÄR"/>
      </label-set>
     </enforce-after>

    </enforce-rules>
    -->
	
    <!-- PT: How to use!? Example!?
    <preferences>
      <prefer label="DETDEF">
        <label-set>
        <label-item label="ADVHÄR"/>
      </label-set>
     </prefer>

    </preferences>
    -->

</tagger>

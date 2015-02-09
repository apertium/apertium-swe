<?xml version="1.0" encoding="UTF-8"?>
<tagger name="swedish">

<tagset>
   <def-label name="ABBR">
    <tags-item tags="abbr"/>
  </def-label>

   <def-label name="PREP" closed="true">
    <tags-item tags="pr"/>
  </def-label>
  
  <def-label name="PRNSUBJ" closed="true">
    <tags-item tags="prn.pers.p1.un.sg.nom"/>
    <tags-item tags="prn.pers.p2.un.sg.nom"/>
    <tags-item tags="prn.pers.p3.ut.sg.nom"/>
  </def-label>

  <def-label name="PRNOBJ" closed="true">
    <tags-item tags="prn.pers.p1.un.sg.acc"/>
    <tags-item tags="prn.pers.p2.un.sg.acc"/>
    <tags-item tags="prn.pers.p3.ut.sg.acc"/>
  </def-label>

  <def-label name="PRNPOS" closed="true">
    <tags-item tags="det.pos.*"/>
    <tags-item tags="prn.pers.p3.ut.sg.gen"/>
    <tags-item tags="prn.pers.p3.ut.pl.gen"/>    
  </def-label>
 
  <def-label name="PRNREF" closed="true">
    <tags-item tags="prn.ref.*"/>
  </def-label>
  
  <def-label name="PRN" closed="true">
    <tags-item tags="prn.*"/>
  </def-label>

    <def-label name="CNJCOO" closed="true">
    <tags-item tags="cnjcoo"/>
  </def-label>

  <def-label name="CNJSUB" closed="true">
    <tags-item tags="cnjsub"/>
  </def-label>
  
  <def-label name="CNJADV" closed="true">
    <tags-item tags="cnjadv"/>
  </def-label>
  
  <def-label name="DETDEM" closed="true">
    <tags-item tags="det.dem.*"/>
  </def-label>

  <def-label name="DETIND" closed="true">
    <tags-item tags="det.ind.*"/>
  </def-label>
 
  <def-label name="DETDEF" closed="true">
    <tags-item tags="det.def.*"/>
  </def-label>

  <def-label name="DETORD" closed="true">
    <tags-item tags="det.ord.*"/>
  </def-label>

  <def-label name="DETQNT" closed="true">
    <tags-item tags="det.qnt.*"/>
  </def-label>
 
  <def-label name="IJ" closed="true">
    <tags-item tags="ij"/>
  </def-label>

  <def-label name="NOMSDEF" closed="true">
    <tags-item tags="n.*.*.def"/>
  </def-label>
  
  <def-label name="NOMSSING" closed="true">
    <tags-item tags="n.*.sg.*"/>
  </def-label>
  
  <def-label name="NOMSPROPIS">
    <tags-item tags="np.*"/>
  </def-label>
  
  <def-label name="NOMSNEUTRE">
    <tags-item tags="n.nt.*"/>
  </def-label>
  <def-label name="NOMSUTRE">
    <tags-item tags="n.ut.*"/>
  </def-label>
  <def-label name="NOMSUN">
    <tags-item tags="n.un.*"/>
  </def-label>
  <def-label name="ADV">
    <tags-item tags="adv"/>
    <tags-item tags="adv.*"/>
  </def-label>
  
  <def-label name="ADJPLUR"  closed="true">
    <tags-item tags="adj.*.*.pl.*"/>
  </def-label>
  
  <def-label name="ADJ">
    <tags-item tags="adj.*"/>
  </def-label>
  
  <def-label name="NUM">
    <tags-item tags="num.*"/>
    <tags-item tags="num.*"/>
  </def-label>
  
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
    <tags-item tags="vbmod.past.*"/>
  </def-label>
  <def-label name="VAUXPAST" closed="true">
    <tags-item tags="vaux.past"/>
    <tags-item tags="vaux.past.*"/>
  </def-label>
  <def-label name="VBMODPASTS" closed="true">
    <tags-item tags="vbmod.past.*"/>
  </def-label>
  <def-label name="VBMODSUPN" closed="true">
    <tags-item tags="vbmod.supn.*"/>
  </def-label>
  <def-label name="VAUXSUPN" closed="true">
    <tags-item tags="vaux.supn"/>
    <tags-item tags="vaux.supn.*"/>
  </def-label>


  <def-label name="VBMODPPRES" closed="true">
    <tags-item tags="vbmod.pprs"/>
  </def-label>

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

  <def-label name="VBSERIMP" closed="true">
    <tags-item tags="vbser.imp"/>
  </def-label>

  <def-label name="VBHAVERPRES" closed="true">
    <tags-item tags="vbhaver.pres.*"/>
  </def-label>
  <def-label name="VBHAVERPAST" closed="true">
    <tags-item tags="vbhaver.past.*"/>
  </def-label>
  <def-label name="VBHAVERPPRES" closed="true">
    <tags-item tags="vbhaver.pprs"/>
  </def-label>
  
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
  
 
  <def-label name="VBCLOSED" closed="true">
    <tags-item tags="vbser.*"/>
    <tags-item tags="vbhaver.*"/>
  </def-label>

   <def-label name="VB">
    <tags-item tags="vblex.*"/>
  </def-label>

</tagset>

  <forbid>
  
    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="NOMSDEF"/>
    </label-sequence>

    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="NOMSSING"/>
    </label-sequence>

    <label-sequence>
      <label-item label="DETIND"/>
      <label-item label="PRNSUBJ"/>
    </label-sequence>


    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="NOMNEUTRE"/>      
    </label-sequence>
        
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="NOMSSING"/>
    </label-sequence>
        
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="NOMNEUTRE"/>
    </label-sequence>
        
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="NOMSSING"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="NOMUTRE"/>
    </label-sequence>
        
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

    <label-sequence>
      <label-item label="NOMUTRE"/>
      <label-item label="NOMSSING"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    
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
      <label-item label="PRONPOS"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="PRONPOS"/>
    </label-sequence>    
    
    <label-sequence>
      <label-item label="NOMUTRE"/>
      <label-item label="PRONPOS"/>
    </label-sequence>
        
    <label-sequence>
      <label-item label="NOMUTRE"/>
      <label-item label="ADJ"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="NOMSSING"/>
      <label-item label="ADJ"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="NOMNEUTRE"/>
      <label-item label="ADJ"/>
    </label-sequence>

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
    
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="CNJSUB"/>
    </label-sequence>

    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="CNJSUB"/>
    </label-sequence>    
    
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="DETDEM"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="DETDEM"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="DETIND"/>
    </label-sequence>

    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="DETIND"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="DETDEF"/>
    </label-sequence>

    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="DETDEF"/>
    </label-sequence>    
    
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="PRONPOS"/>
    </label-sequence>

    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="PRONPOS"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBLEXPRS"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="VBLEXPRS"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBLEXDA"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="VBLEXDA"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJ"/>
      <label-item label="VBMODPRS"/>
    </label-sequence>
    
    <label-sequence>
      <label-item label="ADJPLUR"/>
      <label-item label="VBMODPRS"/>
    </label-sequence>
    
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

    <label-sequence>
      <label-item label="DETDEF"/>
      <label-item label="IJ"/>
    </label-sequence>

    <label-sequence>
      <label-item label="DETDEF"/>
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
    
    <label-sequence>
      <label-item label="PRNOBJ"/>
      <label-item label="VBMOD"/>
    </label-sequence>
    
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
      <label-item label="PRONPOS"/>
      <label-item label="PR"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRONPOS"/>
      <label-item label="ADV"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRONPOS"/>
      <label-item label="PRNTN"/>
    </label-sequence>

    <label-sequence>
      <label-item label="PRONPOS"/>
      <label-item label="PRNOBJ"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRONPOS"/>
      <label-item label="VBLEX"/>
    </label-sequence>

    <label-sequence>
      <label-item label="PRONPOS"/>
      <label-item label="VBER"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRONPOS"/>
      <label-item label="VBHAR"/>
    </label-sequence>
    <label-sequence>
      <label-item label="PRONPOS"/>
      <label-item label="VBAUX"/>
    </label-sequence>

    <label-sequence>
      <label-item label="PRONPOS"/>
      <label-item label="VBMOD"/>
    </label-sequence>

    <label-sequence>
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

    </forbid>

</tagger>

# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Senna Hoving

  #### Je startniveau:
  rood

  #### Je focus:
  responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://dopper.com/nl

  #### Screenshot(s) van de eerste pagina (small screen): 
  <img src="readme-images/dopper_home.jpg" width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  <img src="readme-images/dopper_missie.jpg" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  Er zijn best wel een paar dingen op de dopper site die niet aan de WCAG checklist voldoen. Zo worden er helemaal geen ul- en li-elementen gebruikt over de hele site, er worden bijvoorbeeld in de nav div-elementen gebruikt, en in de footer kan het ook een stuk logischer gemaakt worden door de li-elementen te gebruiken. Ook zijn de headers niet goed gebruikt op de dopper site, er worden namelijk meerderen h1-elementen op één pagina gebruikt, en word het h4-element overgeslagen. 
  
  Als je tab gebruikt om door de website heen te gaan, moet je 2x klikken bij elke link, hij selecteerd namelijk elke keer de button en dan de div binnen de button. De appearance is ook niet geweldig, zo word dark and light mode niet ondersteund. Ook geen optie om de text te vergroten. En als laaste staat er bij sommige foto's geen alt text bij, en bij een klein aantal staat er wel een alt text maar staan er onnodige nummers tussen. 

  voor de rest is de site wel goed, er is een hoog contrast en de content is goed. Alleen voor mensen met een screenreader of slecht zicht is de site denk lastig om te gebruiken. 
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de home pagina: 
  <img src="readme-images/breakdown_schets_home.png" width="375px" alt="breakdown van de hele pagina">

  ### breakdown onze-missie pagina: 
  <img src="readme-images/breakdown_schets_missie.png" width="375px" alt="breakdown van een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Allebij de html pagina's maken ging best goed, nog een paar elementen waar ik nou niet goed weet of ik een header of text nodig heb.
  En ik vroeg me vooral nog of ik de nav op de goede manier heb gemaakt. 

  Ik heb wat grid gebruikt om een klein deel van de site goed te plaatsen, en dat ging eigenlijk erg goed, een geen problemen mee gehad. 
  Wel wilde het nog niet helemaal lukken bij het maken van de for loop om gebruiken om meerdere elementen te selecteren, de for loop will ik namelijk gebruiken voor de dropdowns in de nav. 

  ### mijn html voor de nav:
  <img src="readme-images/nav_mijn_code.png" width="375px">

  ### mijn java script voor de nav: 
  <img src="readme-images/nav_mijn_java.png" width="375px">

  ### hoe de nav eruit ziet op de Dopper site:
  <img src="readme-images/nav_dopper.png" width="375px">




  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - minder tot geen classes, en als je dan een class gebruik dan op de body.
  - probeer geen divs en spans te gebruiken, echt als het niet meer kan.
  - gebruik summary in plaats van javascript
  - op de 3 cards plek kan je spans gebruiken in plaats van divs

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Iets dat deze week wel goed ging was de hele header eigenlijk, ik denk dat de navigatie nu aardig hetzelfde is als op de echte dopper site.het enige dat daarbij nog niet echt werkt is dat die transparant is als de site net inlaad. 

  En iets dat wat minder ging was de nav in de footer, vooral die plusjes dan daar liep ik nog een beetje bij vast. Ik heb die gemaakt van spans en probeerde dan de verticale uit te zetten als die word uitgeklapt maar dat werkt dus nog niet. 

  En kwam ik er niet helemaal uit hoe Dopper die soort snap heeft op de missie pagina, en weet ik ook niet hoe ik het best de achtergrond kan maken op de missie page.

  nog iets met de toegankelijkheid

  ### nav bar niet transparant bij inladen:
  <img src="readme-images/nav_niet_transparant.png.png" width="375px">

  ### hoe de nav in de footer er nu uitziet:
  <img src="readme-images/nav_footer.png" width="375px">

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - De nav bar moet ik omwisselen dus hij moet transparant beginnen, en dan wit worden als je naar beneden scrollt
  - De backgournd op de missie kan gewoon een gradient zijn, en kan nog naar parralax scrollen kijken bij extra tijd
  - de Dopper zelf kan ik met de css perspective proberen te inplementeren
  - en de foto / afb in de ronde vormen kun je met css clip path doen
  - En in de sections kan ik het best een article of header boven aan zetten die je niet kan zien. 
  - het 'blop' effect op de buttons is ook te doen, moet ik dan wel opzoeken, is meer een punt voor extra tijd. 
  - kan een if gebruiken voor maar één java script file

  https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
  https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
  https://codebeautify.org/css-beautify-minify

vragen:
  - Hoe moet het met de nav, moet ik de body niet weergeven of hoe anders?

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. https://www.freecodecamp.org/news/how-to-loop-through-an-array-in-javascript-js-iterate-tutorial/
  2. https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit
  3. ...

</details>
<h2 id="week1">week2</h2>
<section>
<h2>18-11</h2>
<h3>
de structuur van jouw component library</h3>
<p>

eem verzameling van herbruikbare en generieke componenten je kunt downloaden en gebruiken

het gebruik van een component versnelt ontwikkeling door hergebruik 

zorgt voor consistentie in projecten 

vergroot de onderhoudbaarheid 

nadelen van componenenten 

vergroot chaos 

alles ziet er hetzzelfde uit
grote kans op fouten
</p>


<h3>conventies naamgeving componenten</h2>

<p>




waar moet je op letten

je moet je strict aan naamgeving houden en variets voor componenetne
naamgeving van proporties binnen de component
metaangeving componetenen partronen 
indeling van de $lib folder



</p>


<p>
<h3>metaangeving</h3>
Metanaamgeving is een hierarchise benadering om het over bepaalde soorten componenten te hebben
in principe is alles componenet maar hoe noemen we het

geneste componenten
variaties componenten
samengestelde  componenten


pages section componenent 
pages een volledige pagina
section een sectie van een pagina bestaand uit componenten

componenets herbruikbare components 


</p>

<h3>mappenstructuure</h3>
<p>


manieren van mappen structuur

functional layering
inputs componenten voor gebruiksinvoer bijvoorbeeld knoppen of forumlieren
display  componenten voor het weergeven van informatie
navigation componeneten voor navigatie menus 
structureal elementen die structuur bieden grids, containers 

lego is een structuur methode

bricks kleine niet hebruikbare stukjes een icoon of tekstblock

blocks herbruikbare basis componenten een knop of afbeelding

assemblages gecombineerde componenten met een specifieke functie formulier of kaart

constructsions complexe paginas of secties,dashbaord 


</p>

<h3>atomic design</h3>
<p>

atomic design
je hebt atoms basisbouwblokken van de pagina 

molecules een groep atomen bij elkaar 
een zoekformulier met een label input en button

organism een groep moleculen die samen een sectie van je website vormen een header balk met een zoekformulier

templates een group organismen die samen een paginatype vormen een overzichtspagina of detailpagina

pages:ingevuld template met inhoud  

presenter container 

presentitional components: ui specifieke stateless componenten die bepalen hoe data getoond word 

container componenets: componenten die de presentational components van data voorzien en hun gedrag bepalen

compositions combina van containers en presentational components die specifieke pagina secties vormen 

donderdag gaan we kijken naar jullie individuele componenention en testen op accessibility 
</p>


<p>
atomic design

je kan all je bewijstlast verzamlen met 1 component


er zijn signatificanten veranderen van svelte 4 en svelte 5

frustaties van werken met components: een deel van je code die je geschreven hebt zal je moeten herscrhijven omdat het anders is 



</p>

<h3>$props fallback</h3>
<p>
$props

en fallbackvalues als de er geen proportie op het component word meegegeven

je kan proporties hernoemen 

en rest proporties 

een #snippet is een soort component binnen een component 


</p>
</section>

<section>
Ik heb het form aangemaakt met de html  en css ook heb ik gekeken naar de verschillen van de structueren 
en de button opgelost 




<section>
<h2>20-11</h2>
<h3>container query en media query</h3>
<p>

Alispart responsive web design
Web dev the new responsive web design is a data driven
User preference queries
https://web.dev/articles/new-responsive

er zijn macro layouts en grid layouts met daarin je componenents
user container en form factor 3 verschillende dingen
respinsive to the user dus een darkmode of animties voor mensen met epelpsie

de media querie
media feature
media types



</p>

<p>
prefers color schema

prefers reduced data

forced colors

inverted color 

prefers reduce metion bij animaites 

container queries daarin ies ieder element een container 



met een container querie kan je meer op de context van 1 speciefiek element het aanpassen

het word ook goed ondersteund 

media quer met een spanning 

webscreens form factor 

een component schetsen met container queries en user preference media queries 

noteer per onderdeel van het artikel minimaal 1 ding dat je nog niet kent zoek een bron 
en zet dit later in je learning journal

https://web.dev/articles/new-responsive 

</p>

</section>

<section>
<p>

ik heb naar container querys gekekn en nagedacht hoe ik die kan gebruiken en dit geschets ook heb ik mij voorbereid op mijn interview en ik zat nog uit te zoeken heo ik de ui states goed werkend kon krijgen 
ik heb nu dat er bij email al een successtate is
</section>


<section>
<h2>22-11</h2>
<h3>code en design review</h3>
<p> ik heb mij form van de buitenkant kunnen mooi maken alleen wa shet form niet semantisch omdat ik een <a> gebruikt heb in plaats van een button en voor de * had ik nog geen oplossing ook ehb ik tips gekregen hoe ik dit kan oplossen

ook heb ik de verplichte velden kunnen oplossen 
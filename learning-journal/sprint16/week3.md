<h2 id="week1">week3</h2>
<section>
<h2>25-11</h2>
<p>
 state managment 

een aan en uit state 

serverside state 

let {data} = $props()  runes in svelte 

in de + page.server.js

heb je een boolean die is false

daarna is er een export function load met return light

vervolgens is er export const actions = {

in de interactie heb je een gedeelde state waarin andere gerbuikers true of false kunnen aanklikken door op het knopt aan of uit te drukken




</p>

<h3>not shared persistent state</h3> 
<p>

non shared persistent state

dit werkt zolang je op 1 pagina met gebruikers bezig bent

de componenten veranderen op basis van het gedrag van de gebruikers 




</p>
<h3>not shared semipersistent state</h3> 
<p>
non shared semipersistent states

dit is een ingewikkeldere manier 

hierin word de waarde bijgehouden in de layout en de states word aangepast in de childreren

hierin is een nieuwe tab een client 

</p>

<p>


non shared semipersistent state snotshot en dit is de omgekeerd van non shared semipersistent states
dit word lokaal in de pagina bijgehouden 

hier criear je een snapshot een soort kortstondig gehuegen van je applicatie 

met client side javascript word de waarde ingesteld 

en dit maakt ze client side javascript code waardoor het ook wel onhandig is 



</p>
<h3>svelte persistend stores </h3> 
<p>
je kan een database gebruiken voor het blijven opslaan van data 


svelte persistend stores 

https://medium.com/@naqvishahwar120/svelte-the-persistence-store-950e31201b5a 

een store is een stukje geheugen dat opgeslagen word en dat komt in de chache van de gebruiker
en als een gebruiker refresh blijft dit staan omdat het opgelsagen blijft maar het zit niet in een database



non shared states op pagina niveau en layout nivea

serverside persistent storage



</p>
</section>

<section>
<h2>27-11</h2>
<p>
Ik heb gemergd waarin het form in de main moest komenen en ik heb nog kleine problemen verholpen
ook heb ik een pull request aangemaakt die bekeken is door teamgenoten en ik heb de pull requests van andere bekeken en goedgekeurt
</p>
</section>

<section>
<h2>28-11</h2>
<p>
Ik heb de sprint review gehad en feedback ontvangen over het form was die tevreden als feedback kreeg ik dat ik beter de inputfields als losse componenten kan gebruiken en ik heb portflow voorbereid
</p>
</section>

<section>
<h2>29-11</h2>
<p>
Ik heb de sprint review gehad en feedback ontvangen over het form was die tevreden als feedback kreeg ik dat ik beter de inputfields als losse componenten kan gebruiken en ik heb portflow voorbereid
</p>
</section>
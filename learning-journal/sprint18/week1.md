<h2 id="week1">week1</h2>
<section>
<h2>6-1</h2>
<p>
release candidate 

alles moet goed zijn en gebliceerd zijn en de software release life cycle 

alpha testing is de eerste fase 
beta testen is dat het door een grotere groep getest buiten de organisatie 

</p>
<p>
release candidate is klaar om vrij te geven en alle functies zijn gemaakt en getest 

</p>

<p>als team hebben we geinventariseerd wat we gaan doen en we houden de principes en conventies aan
ook gaan we een teamcanvas invullen en nog pokerplanning doen 

goede documentatie en uitvoeren van tests en pull requests waarin het testresultaatt en issues in de pull request zetten 

</p>

<p>gebruik labels en moscow en doe aan pokerplanning </p>

<p>1 iemand heeft een issue en iemand anders doet daar een pull request op</p>



<p>

client side rendering 

</p>

<p>serverside rendering word bij elke aanvraaag een connectie met de server en die haalt de data op uit de database en die gaat weer terug </p>

<p>static site generation: als je npm run build intypt dan word alles gerenderd
en dit is ook supersnel en eleventy is een voorbeeld 
 </p>

<p>incremental static regeneartion:de build word periodiek uitgevoerd en alleen bij aangepaste content en npm run dev is het command waarin je dit doet in sveltekit

</p>

<p>content delivery network en static site genration

de voordelen 

veiligheid
performance
schaalbaarheid cdn
gratis hosting

nadelen
build time
minder dynamisch
content

je upload jouw website naar de website en er zijn een paar kopies zodat de gebruiker naar de hosting omgeving gaat die het dichts in de buurt staat van de gebruiker 

<p>

continous integration is het gebruik maken van github action en dat er een build komt en dit hoef je 1x in te richten 
en dit kan je automatisch alles live zetten 

</p>



<h2>8-1</h2>
<p>
 
gsap uitleg we hebben in codepen gewerkt met gsap om daar mee te oefenen 
verder heb ik [pokerplanning](https://github.com/fdnd-agency/voorhoede/issues/106#issuecomment-2577761128) gedaan met mijn team en ik heb vertelt dat ik vastliep met de [line issue](https://github.com/fdnd-agency/voorhoede/issues/157) waarin de lijnen niet tegen elkaar gingne 


</p>
<h2>10-1</h2>
het probleem moet beter beschreven worden met de code bovenaan en dan de foto zodat iemand buiten het project dit ook snap bij de pull request :https://github.com/lisagjh/voorhoede/pull/54 

![image](https://github.com/user-attachments/assets/5755e2d8-a485-4e67-987a-55a25f0ef2c8)



de code van de pull request moet alleen de code bevatten van de issue dus de oude code en de oplossing en de code refacteren dat moet in een issue en in een nieuwe branch waardoor het niet bovenop de pull request komt 

dus dit had later opgelost moeten worden in een niuwe branch het refacteren van code :

![image](https://github.com/user-attachments/assets/5ea05512-8856-4d26-bbd9-cfc90408ae3c)  


en hier had een kleine uitleg moeten komen hoe ej dit precies test

![image](https://github.com/user-attachments/assets/d8d223dc-9bb0-4744-ad3f-eafaf3b42b40)



<h3>algemene tips pull request</h3>
micro commits een branch maken voor de issue en als een feature af is de pull request zodat je ook volledige transparantie hebt
dus 1 commit voor refacteren code en dit in een aparte branch en andere features ook in aparte branches en een nieuwe branch aanmaken zodat je oude bugs niet meeneemt als je verder gaat

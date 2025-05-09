 - [javascriptweekly]()
- [CSS Weekly newsletter](https://css-weekly.com/)
- [Frontend Focus newsletter](https://frontendfoc.us/issues)
- [Daily.dev - chrome extensie](https://daily.dev/)




<h1 id="news">nieuwsbrieven gelezen en toegepast</h1>

<a href="#gelezen"> gelezen nieuwsbrieven</a> 


<a href="#gelezen-brieven-toegepast">gelezen nieuwsbrieven toegepast in mijn werk</a>

<h2 id="gelezen">gelezen brieven</h2>


<h2>1 mei</h2>
in [css weekly issue 611](https://css-weekly.com/issue-611/) las ik een artikel over[ good versus great animations](https://emilkowal.ski/ui/good-vs-great-animations?utm_source=CSS-Weekly&utm_campaign=Issue-611&utm_medium=web) en daarin werd vertelt wat de verschillen zijn tussen goede en fantastiche animaties en waarom dit uitmaakt

view transities is onder andere een css feature die ervoor zorgt dat je een soepele overgang hebt 

ook is custom easing curves handig waarin je helemaal zelf kan bepalen wat de snelheid is

Ook is een overgang handiger tussen de elementen in de navigatie 


<h2>23 april</h2>


ik las in [frontend focus issue 689]([https://frontendfoc.us/issues/689]) dit artikel 
[So, You Want to Give Up CSS Pre- and Post-Processors…](https://css-tricks.com/so-you-want-to-give-up-css-pre-and-post-processors/)
Dit artikel gaat over native css en heeft support voor 2 features css variables en nesing

ook word er vertelt over posstcss ````PostCSS also contains plugins that can help you create conditionals, mixins, and functions should you need them.````

in tailword word de support for pre-processors weggehaald en tailwind is een css post-precessor called lightning css

````markdown
Lightning CSS is a post-processor can do many things that a modern developer needs — so it replaces most of the PostCSS tool chain including:

postcss-import
postcss-preset-env
autoprefixer

````

Dit is sneller dan javascript based tools en je kan dit direct gebruiken met de vite plugin

<h2>15 april</h2>

Ik las in [smashing magazine issue 503 ](https://mailchi.mp/smashingmagazine/503-eaa-and-accessibility-personas?e=e937b1d1f9)
over de the European Accessibility Act en in dat artikel deelde Léonie Watson een [samenvatting](https://martijnhols.nl/blog/the-european-accessibility-act-for-websites-and-apps)

In de samenvatting stond dat er 28 juni een wet in gaat waarin websites toegankelijk moeten zijn

dit kunnen gebruikers zijn die niet goed kunnen zien
gebruikers met dyslexie
gebruikers die kleurenblind zijn
gebruikers met motorieke problemen
gebruikers die gevoelig zijn voor animaties 

deze regels die gelden alleen voor specifieke diensten

The EAA only applies to specific types of services. The list of covered services currently includes:

```
Electronic communications services, except those used only for machine-to-machine communication.
Audiovisual media service platforms, such as video streaming services.
Passenger transport services (air, bus, rail, and waterborne transport), except for urban and suburban public transport.
Banking and financial services, including payment services, consumer credit, investment services, and insurance-related financial products.
E-books and dedicated reading software.
E-commerce services (i.e. webshops).
Some content is exempt from the EAA:

Pre-recorded media (videos, audio) published before June 28, 2025.
Office documents (PDFs, Word files, etc.) published before June 28, 2025.
Online maps unless used for navigation.
Third-party content that isn't funded, developed, or controlled by the business operating the website or app.
Archived content, meaning pages that are no longer updated or edited after June 28, 2025.
```

De minimale requirementas zijn accessible uit and content
en ook accesibile statement

de wcag2.1 zijn samengevat een paar duidelijke regels

percievable dus alt texten semenatic hmlt en color contrast
operable keyboard accesbility 

visible focus dus dat je een focus lijn ziet

logical navigation en dat de screeenreader linkjes goed opleest en dat de links een goede beschrijving hebben

langauge declaratopm dus dat duidelijk is welke taal de pagina heeft.

consisten navigation met duidelijke menus en makkelijk om te navigeren.

error messages als een pragina niet gevonden word.

valide html dus netjes gestructureerd en error free.

aria roles voor specifieke delen van de website.



<h2> 9 april</h2>

in [frontend focus issue 687]([url](https://frontendfoc.us/issues/687)) las ik over de [Top 5 CSS Navigation Menu Mistakes](https://blog.css-weekly.com/top-5-css-navigation-menu-mistakes) en daarin word vertelt welke fouten er zijn 

fout nummer 1 is small target areas daardoor is de ancher link heel erg klein

fout nummer 2 is het gebruik van margin in plaats van gap met flexbox waardoor je onnodig code schrijft

fout nummer 3 een dropdown met submenus zorgt ervoor dat er soms ook een stuk lege ruimte blijft en als de gebruiker erop kikt kan dit ervoor zorgen dat het menu sluit en dit kan je oplossen met een after

fout nummer 4 is geen delay op het menu items waardoor er geen smooth transition is om de submenus te laten zien en dit kan je met css oplossen

fout nummer 5 geen animaite op anker links waarin de gebruiker drukt op een link en er in 1 keer is terwijl je met smooth scrolling een mooie onvergang eraan kan geven


<h2> 2 arpil </h2>
in [thisweekreact]([url](https://thisweekinreact.com/newsletter/228)) heb ik gelezen dat react 19.1 uit is met deze features:

```
React 19.1 has been released this week, the most notable changes are:

A new captureOwnerStack() API that will be used by frameworks to provide better error information in dev. It’s different from the existing component stacks in how it handles children and DOM nodes.
The “React side” of Server Components support in Parcel, that works hand-in-hand with the new features in Parcel 2.14.
An experimental unstable_prerender() for prerendering React Server Components on the server.
This release also includes a slew of minor changes and fixes, most of them related to Server Components or Suspense boundaries.
```

ook las ik dit [artikel]([url](https://fullystacked.net/css-in-js-still-a-thing/)) of css in javascript nog steeds een issue is.

er word in dit artikel vertelt dat ze hebben gekeken of css in javascript kan met component libraries maar dat gaat niet altijd goed vanwege de de performence in de browser 

ook is tailwind een betere oplossing om css te gebruiken in combinaite met react te gebruiken  

de frameworks svelte en vue js is handiger omdat het beter geintrigreerd zit 

<h2>24 maart </h2>

ik las dit artikel [The select element can now be customized with CSS](https://developer.chrome.com/blog/a-customizable-select) in chrome developers blog waarin je het select element kan aanpassen

met deze code 

```
.custom-select {
  &, &::picker(select) {
    appearance: base-select;    
  }
}
```

en hier staat het [codevoorbeeld]([url](https://codepen.io/web-dot-dev/pen/zxYaXzZ)) op codepen



<h2>20 maart</h2>

in [css weekly issue ](https://css-weekly.com/issue-609/)609 las ik een artikel van [jermey keith](https://adactio.com/journal/21797?utm_source=CSS-Weekly&utm_campaign=Issue-609&utm_medium=web) over het probleem waar er een voorstel lag om de developer meer controle te geven over de styling van form controls 

dit is wat ze voorstellen: The proposal suggests that authors can opt-in to the new styling possibilities by declaring:
appearance: base;

Het idee is dat zodra de developer de apperance base gebruik kan je de pseudo-elementen stylen 

Dit voorstel zou van toepassing zijn op vrijwel alle formulierbesturingselementen die u kunt bedenken: input progress meter buttons select 

ook wil jeremy dat het legend element makkelijk te stylen en dat dit net zo is als een span of een div 



<h2>14 maart</h2>

in [javascript weekly issue 727](https://javascriptweekly.com/issues/727) las ik over [Introducing command and commandfor](https://developer.chrome.com/blog/command-and-commandfor) en hierin word vertelt dat er 2 nieuwe html attributen zijn waardoor er minder snel javasctipt nodig is en dat is 'command' en 'commandfor' dit word gebruikt voor popovers en dialogen


'command' en 'commandfor' zijn ontworpen ter vervanging van de oudere popovertargetaction en popovertarget attributen en dit is ook beter voor toegankelijkheid omdat aria en focusbeheer gebruikt word

<h2>13 maart</h2>

In [css weekly issue 608](https://css-weekly.com/issue-608/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-608-march-13-2025&_bhlid=b0a87c60715b4c17d25ad0fc674c149110dd9910) las ik een artikel over [View Transitions Applied: Smoothly animating a border-radius with a View Transition ](https://www.bram.us/2025/03/11/view-transitions-border-radius/?utm_source=CSS-Weekly&utm_campaign=Issue-608&utm_medium=web)en daarin werd vertelt hoe je view transitions kan gebruiken in combinatie met een border en er staan een aantal voorbeelden in met code hoe de border radius word aangepast 

ook staat erin welke methoden en technieken er gebruikt worden en dat je met view transitions een vloeiende overgang hebt

<h2>12 maart</h2>

in [frontend focus issue 683](https://frontendfoc.us/issues/683) las ik een [tutorial](https://css-tricks.com/grouping-selection-list-items-together-with-css-grid/) hoe je list items kan grouperen in css met grid 

in [thisweekreact issue 225](https://thisweekinreact.com/newsletter/225) heb ik een uitleg gelezen hoe je middleware in react gebruikt 

Met react middleware heb je dat er een extra autencitatie laag is voor als je als nieuwe gebruiker bijvoorbeeld wilt inloggen 
ook word middelware gebruikt om de credentials te checken of je als gebruiker rechten hebt om een specifieke pagina te zien

als je van de ene naar de andere pagina wilt gaat dan word er ook middelware gebruikt aan de hand van de react router

<h2>11 maart</h2>

in [smashing mazagine issue 498 ](https://mailchi.mp/smashingmagazine/498-usability-ux?e=e937b1d1f9) las ik over [good design practises](https://goodpractices.design/) 

hier is een voorbeeld hoe het niet moet en wel

![image](https://github.com/user-attachments/assets/609650a1-465d-4d52-893d-b24da1ceedff)





het is belangrijk om de naamgeving duidelijk te hebben 

<img width="483" alt="image" src="https://github.com/user-attachments/assets/c43086fc-26f4-4cca-a81e-b1d551f274cc" />

<hr>


en dit is een voorbeeld ervan 

![image](https://github.com/user-attachments/assets/c3dd6888-fdba-4f48-9ab8-418b71fc6f5c) en de naamgeving van je kleuren is ook handig voor je css custom proporties dat je de verschillen weet

<img width="413" alt="image" src="https://github.com/user-attachments/assets/efd3df8a-08ae-47f9-916f-1a74a5f793b7" />



<h2>7 maart</h2>

in [javascript weekly issue 726](https://css-weekly.com/issue-607/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-607-march-6-2025&_bhlid=0cb5b83b11e2dd3ff80ebea08261cdbcf8ca85d6) las ik een artikel over [React data tale responsive dynamic table component](https://css-weekly.com/issue-607/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-607-march-6-2025&_bhlid=0cb5b83b11e2dd3ff80ebea08261cdbcf8ca85d6) en dit ging over een react library over hoe je data in een tabel kan zetten en dat er door de library een tabel gemaakt word 

<h2>6 maart</h2>

in [css weekly issue 607](https://css-weekly.com/issue-607/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-607-march-6-2025&_bhlid=0cb5b83b11e2dd3ff80ebea08261cdbcf8ca85d6) las ik over [favorite devtools features of 2025](https://css-weekly.com/issue-607/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-607-march-6-2025&_bhlid=0cb5b83b11e2dd3ff80ebea08261cdbcf8ca85d6) hierin stond ook over hoe je de dom size kan optimaliseren 

en er werd vertelt dat je third party scripts kan kan filteren met techcrunch

met privacy en security kan je je jouw website testen zonder third party cookies omdat de cookies ook invloed hebben op de performance van je website

ook kan je scrollable areas ontdekken 





<h2>5 maart</h2>

in [thisweekinreact issue 224](https://thisweekinreact.com/newsletter/224) las ik een [tutorial](https://sergiodxa.com/tutorials/create-show-a-404-in-react-router) hoe ik een 404 router kan laten tonen 



<h2>3 maart</h2>

in [frontend focus issue ](https://frontendfoc.us/issues/682) las ik over [css functions](https://css-tricks.com/functions-in-css/) en dat ze vooral gebruikt worden zodat je meer flexibiliteit hebt en code kan herbruiken en dit is nog niet voleldig werkend in alle browsers

ook is het vergelijkbaar met custom proporties maar dan in een functie

````
@function --dashed-border(--color: red) {
   result: 2px dashed var(--color);
}

div {
  border: --dashed-border(); /* 2px dashed red */
}
````

verder kan je in een funcite list argumetns hebben en een media query gebruiken 

<h2> 28 februari</h2>

in [javascript weekly issue 725](https://javascriptweekly.com/issues/725) las ik over [typescript vs javascript](https://2ality.com/2025/02/what-is-typescript.html) en daarin worden de verschillen uitgelegd 

<h2>25 februari</h2>

in [frontend focus 681](https://frontendfoc.us/issues/681) las ik over [Better Anchor Positioning with position-area](https://www.oddbird.net/2025/02/25/anchor-position-area/) en ik vond deze tool [anchor position tool](https://anchor-tool.com/) over hoe je een element aan een ander element kan positioneren dit kan onder ander gebruikt worden voor reclame buttons of in een hamburgermenu


[in react nieuwsletter 223 ](https://thisweekinreact.com/newsletter/223) las ik tips over [functional programming in react](https://www.56kode.com/posts/level-up-react-functional-programming-in-react/) en daarin werd vertelt over varianten die er zijn qua programming en welke voordelen er zijn aan functional programming

![image](https://github.com/user-attachments/assets/9bb316ea-d25e-45eb-bfd9-0c0d7b175613)

verder is ook vertelt over de verschillen tussen object oreintatted programming en functional en dat je met functional geen verandering hebt in de state

en nog veel meer zoals pure functions, higher order class 




<h2>24 februari </h2>

in [smash magazine issue 496](https://mailchi.mp/smashingmagazine/496-psychology-and-ux?e=e937b1d1f9) las ik een artikel over  Deceptive Patterns ook wel dark patterns in user interface (UI) en user experience (UX) design. en dat houd in hoe bepaalde trucjes worden gebruikt om je te verleiden om meer te verkopen of dat je toch het product koopt zonder dat je dit nodig hebt en op deze [website](https://www.deceptive.design/) staan alle tips en dit is een [voorbeeld ](https://www.deceptive.design/types/nagging) over de melding van notificaties


![image](https://github.com/user-attachments/assets/f9ae1a18-ac05-44b7-a10e-c92593ffe69c)


<h2>21 februari</h2>

in [javascript weekly issue 724](https://javascriptweekly.com/issues/724) las ik een artikel over [interrop](https://webkit.org/blog/16458/announcing-interop-2025/) en dat gaat over hoe verschillende css functies die je gebruikt bij de ene browser wel werkt en bij de andere stuk gaat 

![image](https://github.com/user-attachments/assets/3511016a-9126-4ee0-afc1-d26400bd2a25)


<h2>20 februari</h2>

ik las in [css weekly issue 606](https://css-weekly.com/issue-606/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-606-february-19-2025&_bhlid=db407701352427b879574efd4a0caa6a17eab163) stond een artikel over hoe je de [inspector](https://www.debugbear.com/blog/use-chrome-devtools?utm_source=CSS-Weekly&utm_campaign=Issue-606&utm_medium=web) kan gebruiken waarin alle stappen doorlopen en ook de debugger

![image](https://github.com/user-attachments/assets/67157c0c-e239-4fd7-aac8-41f8fe54ba7f)

Verder werd er ook verteld over back en forwarch chache en network requests en daar heb ik nu meer over geleerd

ook las ik over[ Reimagining Fluid Typography](https://www.oddbird.net/2025/02/12/fluid-type/?utm_source=CSS-Weekly&utm_campaign=Issue-606&utm_medium=web) en daarin gaat het over hoe je de de font sizes kan aanpassen met onder andere 'clamp' of 'vw' en dat dit beter is dan media querys omdat je  


<h2>19 fenruari</h2>

in [frontend focus issue 680](https://github.com/yujing-student/i-love-web.git) las ik over de [style observer
](https://lea.verou.me/blog/2025/style-observer/) en dit is een library die je kan gebruiken om je css changes te checken

er stond ook een link naar hoe je dit met npm kan gebruiken

![image](https://github.com/user-attachments/assets/198861c3-447f-498d-a425-6cc725ad4ddf)

in [thisreact](https://thisweekinreact.com/newsletter/222) nieuwsletter issue 22 las ik een voorbeeld hoe je met react een [checkbox animatie](https://reactiive.io/articles/checkbox-interactions) kan maken 

![image](https://github.com/user-attachments/assets/dcae5412-4143-454d-a14a-dcc492c24ad1)

verder las ik ook dat[ React Native 0.78 - React 19](https://reactnative.dev/blog/2025/02/19/react-native-0.78) uit is 



<h2>14 februari</h2>

in [javascript weekly issue 723](https://javascriptweekly.com/issues/723) las ik over how to start a react project in 2025 en daarin werd vertelt over de voor en nadelen met het gebruik van vite . en ook of next.js handiger is om te gebruiken. ook werd vertelt over ssg, ssr,csr,spas. als allerlaatste hebben ze gekeken naar react with astro. en als je nieuw bent is het het beste om vite met react te nemen 


<h2>11 februari</h2>

in [smashing magazine issue 494 ](https://mailchi.mp/smashingmagazine/494-ux-and-product-design?e=e937b1d1f9) las ik over designing for clarity en daarin werd vertelt waarom een design clear moet zijn en duidelijk. ook werden er voorbeelden gegven hoe het niet moet en hoe je zo'n restructering van je interface kan aanpakken

<h2>7 februari</h2>

in [javascript weekly issue 722](https://javascriptweekly.com/issues/722) las ik over een [tutorial hoe je vite met typescript](https://www.robinwieruch.de/vite-typescript/) kan gebruiken end at je daar een aantal aanpassingen voor moet doen


<h2>6 februari</h2>

in [css weekly issue 605](https://css-weekly.com/issue-605/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-605-february-6-2025&_bhlid=202c987ac5f07e2680804931a5d6302b68abab62) las ik over [Optimizing The Critical Rendering Path ](https://www.debugbear.com/blog/optimizing-the-critical-rendering-path?utm_source=CSS-Weekly&utm_campaign=Issue-605&utm_medium=web) . Daarin werd vertelt dat eerst de html word ingeladen dan de css en dat die files invloed hebben op de cpr. en de fonts en images hebben ook een grote invloed.

![image](https://github.com/user-attachments/assets/55b2330b-8654-4020-9f57-e7c70266a35c)


ook heb ik gelezen over het [framework blend](https://blendy.tahazsh.com/?utm_source=CSS-Weekly&utm_campaign=Issue-605&utm_medium=web)y voor smoothly transitions 


<h2>5 februari</h2>

In [frontend focus issue 678](https://frontendfoc.us/issues/678) las ik over de voordelen van een [klein team](https://newsletter.posthog.com/p/the-magic-of-small-engineering-teams) waarin vertelt werd dat zulke teams flxible zijn en snel omdat je niet met heel veel andere mensen te maken hebt. ook heb je meestal 1 techlead die de taken verdeelt.


<h2 id="gelezen-brieven-toegepast">gelezen werk toegepast</h2>


<h3>use state en use reffc</h3>
Ik kreeg het verzoek om use reff te gebruiken in plaats van use state en dit [artikel]([url](https://dzone.com/articles/usestate-vs-useref-understand-the-technical-differ#:~:text=The%20main%20difference%20between%20useState,not%20trigger%20a%20re%2Drender.)) had ik gelezen om het op te lossen 

artikel: https://dzone.com/articles/usestate-vs-useref-understand-the-technical-differ#:~:text=The%20main%20difference%20between%20useState,not%20trigger%20a%20re%2Drender.


<h3>accesibility</h3>

ik heb dit artikel gelezen over een [toegankelijke naam voor een link in een logo](https://nldesignsystem.nl/blog/toegankelijke-naam-link-logo-header/)


ik heb dit gelezen van de wcag over [Focus Not Obscured (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) dit heb ik gebruikt voor een ticket zodat ik kan checken of ik de acceptcrteria haal

dit artikel over [Buttons must have discernible text](https://dequeuniversity.com/rules/axe/4.10/button-name?application=AxeChrome) gelezen over een beschrijvende naam voor de buttons heb ik gelezen


Ik heb dit ariktel [Setting up i18n in your React app from day one](https://localazy.com/blog/setting-up-i18n-in-your-react-app-from-day-one?srsltid=AfmBOoruKafWiIUWF4Kys7G1yknaA7Jzv94YwHG9zfWllh5NGP7OifEm)gelezen om te begrijpen wat react-i18next is. en hoe dit gebruikt word 
zodat ik snap hoe het werkt en dit ook zelf kan toepassen

Ik heb dit artikel [Accessibility essentials every front-end developer should know](https://martijnhols.nl/blog/accessibility-essentials-every-front-end-developer-should-know) gelezen zodat ik beter begrijp wat accesibility is en waarom het belangrijk is 

<h3>prop spreading</h3>

Ik heb dit [artikel](https://medium.com/@matthudson1509/explicit-prop-spreading-in-react-explicitly-spread-the-%EF%B8%8F-ec061609ac69) gelzen over prop spreading en dat houd in dat je code de code in een constant als prop neerzet en de prop aanroept

voorbeeld

```react
const defaultLinklist: Props = {
  title: 'title tekst',
  link: '/',
};
```

```react
 <componentitem.Item {...defaultLinklist} label="label van de listitem" />
```

<h3>prop drilling</h3>

Ik heb dit [artikel](https://www.freecodecamp.org/news/prop-drilling-in-react-explained-with-examples/) gelezen over prop drilling

Propdrilling is dat je 1 hoofdcomponent hebt en daarin childcomponenten het nadeel hiervan is dat het best ingewikkeld in elkaar zit

Mijn opdracht was om de knop meer informatie te verbergen en die moest weg als de gebruiker al op de detailpage was van de school
dus heb ik moeten begrijpen wat propdrilling is zodat ik ook snap hoe de data opgehaald word en wat de code doet want de code zelf heb ik niet geschreven 

https://www.swvadam.nl/onze-scholen/berlage-lyceum 

![image](https://github.com/user-attachments/assets/8743312a-0944-458c-97d1-0f9e6e76c803)

<h4>oplossing</h4>

Ik heb een boolean variable die heb ik op de button meer informatie gezet

De boolean-variabele die aan de knop is gekoppeld, bepaalt of de knop zichtbaar is of niet, op basis van de paginanummers. De logica is als volgt:

De boolean wordt true (waar) als het paginanummer van de huidige data overeenkomt met een specifiek paginanummer. In dit geval wordt de knop getoond.

De boolean wordt false (onwaar) als het paginanummer van de huidige data niet overeenkomt met een specifiek paginanummer. In dit geval wordt de knop verborgen."


https://www.swvadam.nl/onze-scholen/berlage-lyceum

![image](https://github.com/user-attachments/assets/be6aa789-a818-45b2-9e13-34d6e0f949e8)





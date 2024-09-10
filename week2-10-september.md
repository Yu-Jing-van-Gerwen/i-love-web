op 9 september heb ik een workshop over figma gekregen en hebben we simpele oefeningen gedaan die we moeten na maken 
![image](https://github.com/user-attachments/assets/d74326d3-7e1e-43ba-a7c0-506963346f25)

verder hebben we het ook gehad over componeneten en de basisstof van figma zoals auto layout en compononetnen hoe je kleuren en buttons kan herbruiken 
In de les heb ik ook geprobeerd om zo'n kaartje na te maken met grid en hoe je dit kan positioneren 

![image](https://github.com/user-attachments/assets/8aa45266-22f4-46a5-971b-fe77beb61594)

en ik heb vandaag geleerd hoe ik de connectie met de database maak en iedereen kan laten zien en als je klikt op 1 naam dat je naar de profilecard gaat
dit is de code in de +page.js

```
import fetchJson from "$lib/fetch-json"

export async function load() {
	const url = 'https://fdnd.directus.app/items/person/?filter={"squad_id":3}'
	const squadD = await fetchJson(url)

	const url1 = 'https://fdnd.directus.app/items/person/?filter={"squad_id":4}'
	const squadE = await fetchJson(url1)

	const url2 = 'https://fdnd.directus.app/items/person/?filter={"squad_id":5}'
	const squadF = await fetchJson(url2)

	// iedereen
	const everyone = 'https://fdnd.directus.app/items/person/'
	const persons = await fetchJson(everyone)


	return {
		persons: persons.data,
		squadD: squadD.data,
		squadE: squadE.data,
		squadF: squadF.data
	}
}
export let csr = false;
```

dit is de code in svelte 
```
<ul>
    {#each data.squadD as person}
        <li>
            <a href="/{person.id}">


                {person.name}
            </a>
        </li>
    {/each}
</ul>
```

verder hebben we die dag ook inspiratie opgedaan en de papieren schetsen gebropeerd uit te werken in figma 

inpsiratie
![image](https://github.com/user-attachments/assets/42ccf209-49d6-460f-9e14-03106c7f3297)

de papieren schets
![image](https://github.com/user-attachments/assets/e43b37e6-101f-4f54-83eb-307e2102ef74)
mijn uitwerking van de papieren schets
![image](https://github.com/user-attachments/assets/b78c1e75-3574-418d-ae4d-a90a832cc2d7)

op 10 september heb ik de squadpage 
gemaakt een basisopzet zie de link https://github.com/KaanKalmi/your-tribe-for-life-squad-page/tree/squadpage2.2-yujing

en ik heb aan mijn visitekaartje gewerkt
daarin heb ik een voorbeeld gevonden hoe ik mooi effect kan geven aan een hover
https://codepen.io/twhite96/embed/brryVq?height=600&default-tab=result&embed-version=2#result-box

ook heb ik gekeken naar hoe ik tekst kan laten verschijn na 2 seconden zie hier de code pen
https://codepen.io/hubspot/embed/ExWxByR?height=384.6151123046875&theme-id=39533&default-tab=css%2Cresult&slug-hash=ExWxByR&editable=true&user=hubspot&name=cp_embed_2#result-box
en ik heb 3 componenten gemaakt en toegepast in mijn visitekaartje waardoor ik meer overicht heb 
welke code ik gebruik en waar welke styling van is

zie de components
https://github.com/yujing-student/your-tribe-for-life-profile-card/blob/animation/src/routes/MoreInfo.svelte
https://github.com/yujing-student/your-tribe-for-life-profile-card/blob/animation/src/routes/Socialmedia.svelte
https://github.com/yujing-student/your-tribe-for-life-profile-card/blob/animation/src/routes/button.svelte


export let csr = true


//
// import rehypeStringify from 'rehype-stringify'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import {unified} from 'unified'
//
// const file = await unified()
//     .use(remarkParse)
//     .use(remarkRehype)
//     .use(rehypeSanitize)
//     .use(rehypeStringify)
//     .process('# hier vertel ik over wat ik geleerd heb in deze sprint\n' +
//         '\n' +
//         '## mijn leervragen\n' +
//         '\n' +
//         '\n' +
//         '**Ik wil beter worden in figma en designen hoe je zo\'n ontwerp mooi kan maken** \n' +
//         '3.4.2 Schetst om gedachten en processen te verkennen, abstracte begrippen over te brengen en de oplossingsrichting inzichtelijk te maken.\n' +
//         '\n' +
//         '**Ik wil beter worden in plannen waardoor mijn wiki en project gestructureerd is**\n' +
//         '4.1.1 Richt projecten efficiënt en effectief in volgens de development-lifecycle en houdt rekening met de beschikbare tijd.\n' +
//         '\n' +
//         '\n' +
//         '\n' +
//         '**Ik wil svelte leren kennen en weten hoe ik dit kan gebruiken**\n' +
//         '3.1.2 Combineert onderbouwd principes, standaarden en best-practices op het gebied van \n' +
//         'frontend design en development om een oplossing voor een opdrachtgever te realiseren.\n' +
//         '\n' +
//         '**Hoe haal je data uit een Headless CMS door middel van een framework te renderen in een website?**\n' +
//         '\n' +
//         '**hoe lever je bewijslast goed in**\n' +
//         '\n' +
//         '**hoe zorg ik dat mijn repository overzicheljk en goed navolgbaar is zonder wiki**\n' +
//         '\n' +
//         '\n' +
//         '<h2>ga naar</h2> \n' +
//         '<a href="#geleerd1">dit heb ik geleerd</a>\n' +
//         '<br>\n' +
//         '<a href="#leerlogboek">dit heb ik gedaan</a>\n' +
//         '<h2 id="leerlogboek">leerlogboek</h2>\n' +
//         '<h3>2-9-2024</h3>\n' +
//         'Ik heb mijn 1ste les dag gehad en daarin heb ik svelte geinstalleerd en een ontwerp gemaakt van de squadpage en een tutorial gevolgd van svelte\n' +
//         '\n' +
//         '\n' +
//         'dit is een kleine samenvatting over svelte\n' +
//         '\n' +
//         'Svelte: Een Compilerende Componentenframework\n' +
//         'Scoped Styling: Elke component heeft zijn eigen CSS-scope, waardoor stijlen niet conflicteren tussen componenten.\n' +
//         'Reactive State: Veranderingen in data worden automatisch weerspiegeld in de DOM, zonder dat je handmatig DOM-manipulatie hoeft te doen.\n' +
//         'CSR (Client-Side Rendering): De applicatie wordt volledig in de browser gerenderd, waardoor interactieve gebruikerservaringen mogelijk zijn.\n' +
//         'Compiler: Svelte compileert je componenten naar efficiënte JavaScript-code, waardoor de runtime overhead minimaal is.\n' +
//         '\n' +
//         '\n' +
//         'dit gaat over sveltekit\n' +
//         'SvelteKit: Een Metaframework Gebouwd op Svelte\n' +
//         'SSG, MPA, AMD, SPA, SSR: SvelteKit ondersteunt verschillende renderingsstrategieën, waaronder Static Site Generation (SSG), Multi-Page Applications (MPA), en Server-Side Rendering (SSR).\n' +
//         'Folder-Based Routing: Je definieert routes door het aanmaken van mappen en bestanden in je projectstructuur.\n' +
//         'Data Fetching: SvelteKit maakt het eenvoudig om data op te halen van servers via GET en POST requests.\n' +
//         'Code Splitting: Code wordt slim verdeeld over client en server, waardoor de initiële laadtijd van je applicatie wordt verminderd.\n' +
//         'Hydration: SvelteKit kan server-rendered HTML "hydrateren" om een volledig interactieve client-side applicatie te creëren.\n' +
//         'SSR Only Mode: Je kunt je applicatie volledig server-side renderen, wat ideaal is voor SEO en voor gebruikers met JavaScript uitgeschakeld.\n' +
//         '\n' +
//         '\n' +
//         '````sveltehtml\n' +
//         ' npm create svelte@latest\n' +
//         '                     npm install\n' +
//         '                     npm run dev\n' +
//         '                    npm install @directus/sdk\n' +
//         '````\n' +
//         '\n' +
//         '\n' +
//         '<h3>3-9</h3>\n' +
//         'Ik heb verder de tutorial gevolgd en \n' +
//         'ik heb gekeken naar hoe ik mijn project kan deployen op vercel en dat is gleukt dankzij deze link https://vercel.com/docs/frameworks/sveltekit\n' +
//         '\n' +
//         '\n' +
//         '\n' +
//         '\n' +
//         '<h3>4-9</h3> ik heb verder de tutorial gevolgd en een schets gemaakt voor mijn profilecard en ik heb op vercel deze tutorial gevonden en dit heeft mij enorm geholpen in het begrijpen van sveltekit\n' +
//         'https://vercel.com/docs/beginner-sveltekit\n' +
//         '\n' +
//         'ophalen data met directus\n' +
//         '\n' +
//         '````javascript\n' +
//         '\n' +
//         '\n' +
//         'export default async function fetchJson(url, payload = {}) {\n' +
//         '  return await fetch(url, payload)\n' +
//         '    .then((response) => response.json())\n' +
//         '    .catch((error) => error)\n' +
//         '}\n' +
//         '\n' +
//         '````\n' +
//         '\n' +
//         '\n' +
//         '<h3>5-9</h3> ik heb mijn profilecard in code uitgewerkt en het button component gemaakt voor de squad page en dit is gelukt met behulp van de tutorial\n' +
//         '\n' +
//         '![img.png](../img.png)\n' +
//         '\n' +
//         '\n' +
//         '<h3>6-9</h3> ik heb geleerd hoe ik netjes issues kan inschieten en feedback kan\n' +
//         'geven waardoor eerstejaars beter begrijpen hoe ze naar de oplossing kunnnen werken\n' +
//         '\n' +
//         '\n' +
//         '<h2 id="geleerd1">dit heb ik geleerd</h3>\n' +
//         '\n' +
//         '<h4>svelte</h4>\n' +
//         '<p>dit zijn aantekingen over svelte en sveltekit</p>\n' +
//         '\n' +
//         '\n' +
//         'Svelte: Een Compilerende Componentenframework\n' +
//         '    Scoped Styling: Elke component heeft zijn eigen CSS-scope, waardoor stijlen niet conflicteren tussen\n' +
//         '    componenten.\n' +
//         '    <br>\n' +
//         '    Reactive State: Veranderingen in data worden automatisch weerspiegeld in de DOM, zonder dat je handmatig\n' +
//         '    DOM-manipulatie hoeft te doen.\n' +
//         '    <br>\n' +
//         '    CSR (Client-Side Rendering): De applicatie wordt volledig in de browser gerenderd, waardoor interactieve\n' +
//         '    gebruikerservaringen mogelijk zijn.\n' +
//         '    <br>\n' +
//         '    Compiler: Svelte compileert je componenten naar efficiënte JavaScript-code, waardoor de runtime overhead\n' +
//         '    minimaal\n' +
//         '    is.\n' +
//         '\n' +
//         '   installeren svelte\n' +
//         '<pre><code class="">\n' +
//         '            npm create svelte@latest\n' +
//         '             npm install\n' +
//         '             npm run dev\n' +
//         '            npm install @directus/sdk\n' +
//         '        </code></pre>\n' +
//         '\n' +
//         '<p>ophalen data uit de databse\n' +
//         '\n' +
//         'fetch json file\n' +
//         '\n' +
//         '````javascript\n' +
//         'export default async function fetchJson(url, payload = {}) {\n' +
//         '  return await fetch(url, payload)\n' +
//         '    .then((response) => response.json())\n' +
//         '    .catch((error) => error)\n' +
//         '}\n' +
//         '\n' +
//         '\n' +
//         '````\n' +
//         '\n' +
//         '\n' +
//         'in de page.server.js\n' +
//         '````javascript\n' +
//         'import fetchJson from "$lib/fetch-json.js"\n' +
//         '\n' +
//         'export async function load() {\n' +
//         '\t// const url = \'https://fdnd.directus.app/items/person/?filter={"squad_id":3}\'\n' +
//         '\tconst url = \'https://fdnd.directus.app/items/person/9\'\n' +
//         '\tconst persons = await fetchJson(url)\n' +
//         '\treturn {\n' +
//         '\t\tpersons: persons.data\n' +
//         '\t}\n' +
//         '}\n' +
//         '\n' +
//         '````\n' +
//         '\n' +
//         'op de +page.svelte\n' +
//         '````sveltehtml\n' +
//         '\n' +
//         ' <h1>{data.persons.name}  {data.persons.prefix}  {data.persons.surname}</h1>\n' +
//         '            <picture>\n' +
//         '                <source\n' +
//         '                        srcset="{data.persons.avatar}?format=webp"\n' +
//         '                        type="image/webp"\n' +
//         '\n' +
//         '                />\n' +
//         '                <source\n' +
//         '                        srcset="{data.persons.avatar}?format=avif"\n' +
//         '                        type="image/avif"\n' +
//         '                />\n' +
//         '\n' +
//         '                <img  src={data.persons.avatar} alt="foto van mij"/>\n' +
//         '            </picture>\n' +
//         '            <section class="animationfade">\n' +
//         '                <h2>Over mij</h2>\n' +
//         '                <p> Leeftijd: 20</p>\n' +
//         '                <p>{data.persons.bio}  </p>\n' +
//         '                <p>Op dit moment doe ik de opleiding frontend design en development en zit ik in mijn\n' +
//         '                    afstudeerjaar</p>\n' +
//         '````\n' +
//         '\n' +
//         '</p>\n' +
//         '    <h4>sveltekit</h4>\n' +
//         '    <p>\n' +
//         '        SvelteKit: Een Metaframework Gebouwd op Svelte\n' +
//         '        SSG, MPA, AMD, SPA, SSR: SvelteKit ondersteunt verschillende renderingsstrategieën, waaronder Static Site\n' +
//         '        Generation\n' +
//         '        <br>\n' +
//         '        (SSG), Multi-Page Applications (MPA), en Server-Side Rendering (SSR).\n' +
//         '        Folder-Based Routing: Je definieert routes door het aanmaken van mappen en bestanden in je projectstructuur.\n' +
//         '        Data Fetching: SvelteKit maakt het eenvoudig om data op te halen van servers via GET en POST requests.\n' +
//         '        <br>\n' +
//         '        Code Splitting: Code wordt slim verdeeld over client en server\n' +
//         '    </p>\n' +
//         '\n')

// console.log(String(file))
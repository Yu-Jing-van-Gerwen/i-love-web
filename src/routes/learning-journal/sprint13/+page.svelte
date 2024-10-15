<script>
    import Week1 from './week1.svelte';
    import Week2 from './week2.svelte';
    import Week3 from './week3.svelte';
    import Header from '../../../lib/Header.svelte';
</script>
<Header/>
<main>
    <section class="generalStyling learningquestions ">
        <h1 id="mijn-leervragen">mijn leervragen</h1>
        <ul>
            <li>Ik wil beter worden in figma en designen hoe je zo&#39;n ontwerp mooi kan maken</li>
            <li>

                3.4.2 Schetst om gedachten en processen te verkennen, abstracte begrippen over te brengen en de
                oplossingsrichting
                inzichtelijk te maken.
            </li>


        </ul>
        <ul>
            <li>Ik wil beter worden in plannen waardoor mijn wiki en project gestructureerd is</li>
            <li>4.1.1 Richt projecten efficiënt en effectief in volgens de development-lifecycle en houdt rekening met
                de
                beschikbare tijd.
            </li>

        </ul>
        <ul>
            <li>Ik wil svelte leren kennen en weten hoe ik dit kan gebruiken</li>
            <li>
                3.1.2 Combineert onderbouwd principes, standaarden en best-practices op het gebied van
                frontend design en development om een oplossing voor een opdrachtgever te realiseren
            </li>
        </ul>
    </section>
    <section class="generalStyling ">


        <h2>andere vragen</h2>
        <ul>
            <li>Hoe haal je data uit een Headless CMS door middel van een framework te renderen in een website?</li>
            <li>hoe lever je bewijslast goed in</li>
            <li>hoe zorg ik dat mijn repository overzicheljk en goed navolgbaar is zonder wiki</li>
        </ul>
    </section>

    <section class="generalStyling">
        <h2>leerlogboek</h2>
        <ul>
            <li>ga naar <a href="#week1">week1</a></li>
            <li>ga naar <a href="#week2">week2</a></li>
            <li>ga naar <a href="#week3">week3</a></li>
        </ul>
        <Week1/>

    </section>
    <Week2/>
    <Week3/>


</main>
<style>
    main {
        padding: 2em;
        display: grid;
        gap: 2em;
        font-family: Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;


    }
    /*@media (width > 725px) {*/
    /*    section:nth-child(1) {*/
    /*        grid-column-start: 1;*/
    /*    }*/

    /*    section:nth-child(2) {*/
    /*        grid-column-start: 2;*/
    /*    }*/

    /*    section:nth-child(3) {*/
    /*        grid-column-start: 1;*/
    /*        grid-row: 2;*/
    /*    }*/

    /*    section:nth-child(4) {*/
    /*        grid-row: 2;*/
    /*        grid-column-start: 2;*/
    /*    }*/

    /*}*/


    .generalStyling {
        padding: 2em;
        background-color: #bdf487a3;
        box-shadow: inset 0px 1px 11px 0px;
        border-radius: 15px;
    }

</style>
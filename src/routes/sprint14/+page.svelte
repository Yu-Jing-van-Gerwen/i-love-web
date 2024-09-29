<script>
    import Week1 from './week1.svelte';
    import Week2 from './week2.svelte';
    import Week3 from './week3.svelte';
</script>
<main>
    <section class="generalStyling learningquestions ">
        <h1 id="mijn-leervragen">mijn leervragen</h1>

    </section>
    <section class="generalStyling ">

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
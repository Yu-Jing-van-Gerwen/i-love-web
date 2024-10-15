<script>

    import Header from '../../lib/Header.svelte'
</script>
<Header/>
<main class="">
    <section class="generalStyling">


    <h2> kies welke sprint je wilt zien</h2>
    <ul>
        <li>
            <a href="learning-journal/sprint13/">ga naar sprint 13</a>
        </li>
        <li>
            <a href="learning-journal/sprint14/">ga naar sprint 14</a>
        </li>
    </ul>
    </section>
</main>
<style>
    main {
        padding: 2em;
        display: grid;
        gap: 2em;
        font-family: Arial, Helvetica, sans-serif;
        scroll-behavior: smooth;

    }
    .generalStyling {
        padding: 2em;
        background-color: #bdf487a3;
        box-shadow: inset 0px 1px 11px 0px;
        border-radius: 15px;
    }

</style>
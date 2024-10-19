<script>

</script>

<nav class="generalStyling ">
    <ul class="flex-container">
        <li class="flex-items">
            <a href="/">

                homepagina </a>
        </li>
        <li class="flex-items">
            <a href="/learning-journal">

                learning journal </a>

        </li>
        <li class="flex-items">
            <a href="/digital-garden">

                digital garden
            </a>
        </li>

        <li class="flex-items">
            <a href="/we-love-web">
                we-love-web
            </a>
        </li>

    </ul>
</nav>

<slot/>

<style>
    body{
        font-family: Arial, Helvetica, sans-serif;

    }
    .generalStyling {
        padding: 2em;
        background-color: #bdf487a3;
        box-shadow: inset 0px 1px 11px 0px;
        border-radius: 15px;
    }

    .flex-container {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: normal;
        align-items: normal;
        align-content: normal;
        gap: 28px;
    }

    .flex-items:nth-child(1) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

    .flex-items:nth-child(2) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

    .flex-items:nth-child(3) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }
    .flex-items:nth-child(4) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }
</style>
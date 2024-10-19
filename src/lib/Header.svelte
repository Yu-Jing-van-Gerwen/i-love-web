<script>


</script>

<nav class="generalStyling ">
    <ul class="flex-container">
        <li class="flex-items">
            <a href="/">
                Yu Jing van Gerwen </a>
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

<style>

    .flex-container{
        display: flex;
        flex-direction: column;
        border-radius: 1em;
        background: #00ff92;
        background: linear-gradient(0deg, #00EFEF 40%, #4FDD51 100%);
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, .1);
        padding: 2em;
        row-gap: 22px;
    }
    li{
        list-style: none;
    }
    a {
        display: flex;
        border-bottom: 2px solid #611adc;

    }






    a{
        text-decoration: none;
        color: black;
        font-size: 28px;
    }

    @media (min-width: 600px) {
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

    }


</style>
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

                Learning journal </a>

        </li>
        <li class="flex-items">
            <a href="/digital-garden">

            Digital garden
            </a>
        </li>

        <li class="flex-items">
            <a href="/we-love-web">
           We-love-web
            </a>
        </li>

    </ul>
</nav>

<style>

    nav{
        display: flex;
        flex-direction: column;
        border-radius: 1em;
        background: var(--white);
        /*background: linear-gradient(0deg, #00EFEF 40%, #4FDD51 100%);*/
        box-shadow: 0 0 20px 20px rgba(0, 0, 0, .1);
        padding: 1em 2em 1em 0;
        row-gap: 22px;
    }
    ul{
        display: flex;
        flex-direction: column;
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
        font-size: 20px;
    }

    @media (min-width: 1000px) {
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
<script>
    import SocialMedia from '$lib/Socialmedia.svelte';
</script>

    <article class="general-styling-section">


        <h1>Yu Jing van Gerwen</h1>
        <section class="more-over-me">
            <h2 class="about-me">about me</h2>
            <p>
                Ik ben op dit moment student aan de hogeschool van amsterdam.</p>
            <p>Ik doe de opleiding Frontend Design & Development en ik zou graag frontend developer willen worden.</p>

        </section>

            <SocialMedia/>


    </article>
    <section class="general-styling-section">
        <h2 class="hide">over mij</h2>

        <ul class="buttons">
            <li>
                <a href="/learning-journal" class="moreinfo pulse">
                    Learning journal
                </a>
            </li>
            <li>
                <a href="/we-love-web" class="moreinfo pulse">
                    we love web gastsprekers
                </a>
            </li>
            <li>
                <a href="/digital-garden" class="moreinfo pulse ">
                    digital garden
                </a></li>
        </ul>

    </section>
<style>
    .hide{
        display: none;
    }


    h2{
        /*border-bottom: solid 2px var(--purple);*/
    }
    .more-over-me{
        font-size: 20px;

    }
    li{
        list-style: none;
        margin: 0 auto;
        padding: 0;
    }
    ul{
        padding: 0;

    }
    .buttons{
        display: grid;
        gap: 2em;
        margin-right: 2rem;
    }


    @media (min-width: 900px) {
        .buttons{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
            row-gap: 2rem;
        }
    }
    .moreinfo {
        display: grid;
        border-radius: 4px;
        padding: 16px;
        margin: 1em 0 0 1em;
        font-family: sans-serif;
        text-decoration: none;

        color: var(--white);
        letter-spacing: 2px;
        text-align: center;
        position: relative;
        transition: all .35s;
        background:var(--purple);
        font-weight: normal;
        width:130px;
    }

    .pulse{
        animation: pulse 2s infinite;
        box-shadow: 14px 13px 0 0;
    }
    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }

        50% {
            transform: scale(1.25);
            box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
        }

        100% {
            transform: scale(1.3);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }

</style>

<!--gevonden op daily dev-->
<!--[//]: # (https://skillivo.in/css-rotate-property-explained-5/ )-->

<!--[//]: # (https://skillivo.in/css-translate-property-guide/?ref=dailydev)-->



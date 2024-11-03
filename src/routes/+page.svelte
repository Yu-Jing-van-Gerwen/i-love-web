<script>
    import SocialMedia from '$lib/Socialmedia.svelte';
</script>

    <article class="general-styling-section">


        <h1>Yu Jing van Gerwen</h1>
        <section class="more-over-me">
            <h2 class="about-me">About me</h2>
            <p>
                I am currently a student at the Amsterdam University of Applied Sciences.</p>
            <p>I am studying Frontend Design & Development and I would like to become a frontend developer.</p>


        </section>

            <SocialMedia/>


    </article>
    <section class="general-styling-section ">
        <h2 class="hide">About me</h2>
        <ul class="buttons">
            <li class="text-buttons">
                You can see what I learn each week in my learning journal. I keep track of it in a README.
            </li>
            <li class="item-button">
                <a href="/learning-journal" class="moreinfo pulse">
                    Learning journal
                </a>
            </li>
            <li class="text-buttons">
                I keep all my guest lecture notes on the 'We Love Web' page.

            </li>
            <li class="item-button">
                <a href="/we-love-web" class="moreinfo pulse">
                    We love web
                </a>
            </li>
            <li class="text-buttons">
                My digital garden is my portfolio with all my work
            </li>
            <li class="item-button">
                <a href="/digital-garden" class="moreinfo pulse">
                    Digital garden / portfolio
                </a></li>
        </ul>

    </section>
<style>
    li{
        font-size: 20px;
    }
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
        grid-template-columns: 268px;
        gap: 2em;
    }


    @media (min-width: 1000px) {
        .buttons{
            display: grid;
            /*grid-template-columns: 1fr 1fr 1fr;*/
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            grid-template-rows: auto auto;
            /*grid-template-columns: 20em 20em 20em;*/
            row-gap: 2rem;
            column-gap: 2rem;
            /*justify-self: start;*/
        }
        .text-buttons{
            grid-row: 1;
            /*text-align: left;*/

        }
        .item-button{
            grid-row: 2;
            justify-self: start;
            align-items: start;
        }
    }

    /*@media (min-width: 1200px) {*/
    /*    .buttons{*/

    /*        grid-template-columns: 20em 20em 20em;*/

    /*    }*/
    /*    .text-buttons{*/
    /*        grid-row: 1;*/
    /*    }*/
    /*}*/
    .moreinfo {
        display: grid;
        border-radius: 4px;
        padding: 16px;
        margin: 1em 0 0 1em;
        font-family: sans-serif;
        text-decoration: none;
        color: #120000;
        cursor: pointer;
        /*color: var(--white);*/
        letter-spacing: 2px;
        text-align: center;
        position: relative;
        transition: all .35s;
        background-color: #76c54b5e;
        font-weight: normal;
        width:130px;
    }
    .moreinfo:hover{
        background-color: #00EFEF;
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



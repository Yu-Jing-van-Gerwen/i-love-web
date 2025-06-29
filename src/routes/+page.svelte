<script>
    import SocialMedia from '$lib/Socialmedia.svelte';
</script>
<div class="home-main">
    <article class="general-styling-section">
        <h1>Yu Jing van Gerwen</h1>
        <section class="more-over-me">
            <h2 class="about-me">About me</h2>
            <p>
                I am currently a student at the Amsterdam University of Applied Sciences.</p>
            <p>I am studying Frontend Design & Development and I would like to become a frontend developer.</p>
            <a href="https://www.linkedin.com/in/yu-jing-van-gerwen-a959431b7/">
                <img alt="profilefoto van mij" class="profile-image" src="img/profile-image/profielfoto.jpg"/>
            </a>
        </section>
    </article>
    <article class="general-styling-section">
        <SocialMedia/>
        <p>Scan the qr code to see my Linkedin or github. </p>
        <ul class="qr-code">
            <li class="icons">
                <a href="https://github.com/Yu-Jing-van-Gerwen">
                    <picture>
                        <img alt="GitHub" class="qr-images" src="/img/qr-code/github.png"/>
                    </picture>
                </a>
            </li>
            <li class="icons">
                <a href="https://www.linkedin.com/in/yu-jing-van-gerwen-a959431b7/">

                    <img alt="linkedin" class="qr-images" src="/img/qr-code/linkedn.png"/>
                </a>
            </li>
        </ul>
    </article>
    <article class="general-styling-section">
        <h4 class="text-buttons">
            In my portfolio you can see all my projects and what I have done so far.
        </h4>
        <p class="item-button">
            <a class="moreinfo pulse" href="/Portfolio">
                Portfolio
            </a></p>
    </article>
</div>
<div class="portfolio-projects-background">
    <h2 class="title-projects">projects</h2>
    <div class="portfolio-projects">
        <!--    portfolio-cards-->
        <article class="portfolio-cards">
            <h4 class="title-cards">Redesign van de dda website</h4>
            <img alt="all the things" class="project-images" src="img/semester3/dda.png">
            <ul class="buttons-ul-list">
                <li><a class="button-website" href="">live website</a></li>
                <li><a class="button-website" href="">code</a></li>
            </ul>
        </article>
        <article class="portfolio-cards">
            <h4 class="title-cards">mijn profielkaartje</h4>
            <!--        todo deze foto van het profielkaartje moet opniew waarin je alleen het kaartje hebt-->
            <img alt="all the things" class="project-images" src="img/semester3/profielkaartje.png">
            <ul class="buttons-ul-list">
                <li><a class="button-website" href="">live website</a></li>
                <li><a class="button-website" href="">code</a></li>
            </ul>
        </article>
        <article class="portfolio-cards">
            <h4 class="title-cards">Squad page</h4>
            <img alt="all the things" class="project-images" src="img/semester3/squad.png">
            <ul class="buttons-ul-list">
                <li><a class="button-website" href="">live website</a></li>
                <li><a class="button-website" href="">code</a></li>
            </ul>
        </article>
        <article class="portfolio-cards">
            <h4 class="title-cards">Homepagina BNR</h4>
            <img alt="all the things" class="project-images" src="img/semester2/bnr.png">
            <ul class="buttons-ul-list">
                <li><a class="button-website" href="">live website</a></li>
                <li><a class="button-website" href="">code</a></li>
            </ul>
        </article>

    </div>

</div>
<style>

    @media (min-width: 800px) {
        .home-main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            /*background-color: #ed2d2d;*/
            gap: 2rem;
        }

        .general-styling-section:nth-child(1) {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row: 1;
        }

        .general-styling-section:nth-child(2) {
            grid-column-start: 1;
            grid-row: 2;
        }

        .general-styling-section:nth-child(3) {
            grid-column-start: 2;
            grid-row: 2;
        }
    }

    @media (min-width: 1000px) {
        .home-main {
            max-width: 700px;
        }

        .general-styling-section:nth-child(2) {
            width: 400px;
        }

        .general-styling-section:nth-child(3) {
            width: 400px;
        }
    }

    @media (min-width: 1200px) {
        .home-main {
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    li {
        font-size: 20px;
    }

    .more-over-me {
        font-size: 20px;

    }

    li {
        list-style: none;
        margin: 0 auto;
        padding: 0;
    }

    ul {
        padding: 0;

    }

    .qr-code {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 2em 8rem;
        padding: 1em 1em 0 0;
        gap: 2em;
        margin-top: -1em;
    }

    .qr-images {
        width: 70px;
    }

    .profile-image {
        width: 100%;
    }


    .portfolio-cards {
        background: #dff5db;
        font-weight: normal;
        border-radius: 0.25rem;
        margin-top: 1.5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center; /* Add this */
        margin-bottom: 3rem;
    }

    @media (min-width: 1200px) {
        .portfolio-cards {
            display: grid;
            /*gap: 15rem;*/
            grid-template-rows: auto auto auto auto;
        }

        .project-images {
            max-width: 100%;
            max-height: 15em;
            width: auto;
            height: auto;
            object-fit: contain; /* or use cover for cropping */
            display: block;
            margin: 0 auto;
        }


    }


    .buttons-ul-list {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;
        padding-bottom: 1rem;
    }

    .project-images {
        width: auto; /* Change from 100% to auto */
        max-width: 90%; /* Prevent overflow */
        height: auto;
        display: block;
        margin-bottom: 2rem;
    }

    .portfolio-projects {
        /*background-color: #ffffff;*/
        padding: 2rem;
    }

    .portfolio-projects-background {
        background-color: #ffffff;
    }

    @media (min-width: 500px) {
        .profile-image {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            margin-left: auto;
            margin-right: auto;
        }

        .portfolio-projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            justify-content: center;
        }

        /*.project-images {*/
        /*    width: 100%;*/
        /*}*/
    }

    .title-projects {
        text-align: center;
        font-size: 2em;
        margin-top: 2rem;
        margin-bottom: 1rem;
        padding-top: 2rem;
    }

    .title-cards {
        font-size: 2em;
        padding: 1rem;
    }

    @media (min-width: 1000px) {

        .text-buttons {
            grid-row: 1;
            /*text-align: left;*/

        }

        .item-button {
            grid-row: 2;
            justify-self: start;
            align-items: start;
        }
    }

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
        width: 130px;
    }

    .moreinfo:hover {
        background-color: #00EFEF;
    }

    .pulse {
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



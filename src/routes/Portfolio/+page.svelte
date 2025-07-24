<script>
    let uitgelichte_projecten = [
        {
            title: "Proof of concept",
            period: "2024",

            programming_languages: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "Directus CMS"],
            semester: 'semester2',
            img: '/img/semester2/bnr.png',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/proof-of-concept',
            live_url: 'https://proof-of-concept-bnr.vercel.app/',
            agency: "BNR",
            agency_github: "https://github.com/Yu-Jing-van-Gerwen/proof-of-concept/wiki/1%E2%80%90Analyseren",
            sprint: "Sprint 12"
        },
        {
            title: "Your tribe for life squad page",
            programming_languages: ["SvelteKit", "Directus CMS", "Web components "],
            semester: 'semester 1',
            link_project: 'https://github.com/KaanKalmi/your-tribe-for-life-squad-page',
            img: '/img/semester3/squad.png',
            live_url: 'https://your-tribe-for-life-squad-page-five.vercel.app/',
            agency_github: "Not applicable",
            agency: "Not applicable",

        },
        {
            title: "Your tribe for life profile card",
            period: "2023",
            year: "jaar 1",
            programming_languages: ["SvelteKit", "Directus CMS", "Web components "],
            semester: 'semester 1',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/your-tribe-for-life-profile-card',
            img: '/img/semester3/profile-card.png',
            live_url: 'https://your-tribe-for-life-profile-card-gold.vercel.app/',
            agency_github: "Not applicable",
            agency: "Not applicable",

        },
        {
            title: "Lose-your-head",

            programming_languages: ["SvelteKit", "Directus CMS", "Web components "],
            semester: 'semester 3',
            link_project: 'https://github.com/lisagjh/voorhoede',
            img: '/img/semester3/dda.png',
            live_url: 'https://dda.agency.fdnd.nl/'
            ,
            agency: "De voorhoede",
            agency_github: "https://github.com/fdnd-agency/voorhoede",

        },


    ]
    let freeprojects = [
        {
            title: "Angular profile card",

            programming_languages: ["Angular"],
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/angular-profile-card',
            img: '/img/free-time/profile.png',
            live_url: 'https://angular-profile-card.vercel.app/',
            agency_github: "Not applicable",
            agency: "Not applicable",

        },
        {
            title: "Unc Inc assesment",

            programming_languages: ["React"],
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/React-unc-inc',
            img: '/img/free-time/unc-inc.png',
            live_url: 'https://react-unc-inc.vercel.app/',
            agency_github: "https://github.com/Yu-Jing-van-Gerwen/React-unc-inc/wiki#unc-inc-assessment---react-routing",
            agency: "Unc Inc",
        }
    ]
    let projects_year2_semester1 = [

        {
            title: "Your tribe squad page",
            programming_languages: ["SvelteKit", "Directus CMS", "Web components "],
            semester: 'semester 1',
            link_project: 'https://github.com/KaanKalmi/your-tribe-for-life-squad-page',
            img: '/img/semester3/squad.png',
            live_url: 'https://effortless-choux-a35df0.netlify.app/',
            cms: "Directus CMS",
            agency: "Not applicable",


        },
        {
            title: "Your tribe for life profile card",
            period: "2023",
            year: "jaar 1",
            programming_languages: ["SvelteKit", "Directus CMS", "Web components "],
            semester: 'semester 1',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/your-tribe-for-life-profile-card',
            img: '/img/semester3/profile-card.png',
            live_url: 'https://your-tribe-for-life-profile-card-gold.vercel.app/',
            cms: "Directus CMS",
            agency: "Not applicable",
        },

        {
            title: "Lose-your-head",
            programming_languages: ["SvelteKit", "Directus CMS", "Web components "],
            semester: 'semester 1',
            link_project: 'https://github.com/lisagjh/voorhoede',
            img: '/img/semester3/dda.png',
            live_url: 'https://dda.agency.fdnd.nl/',
            cms: "Directus CMS",
            agency: "De voorhoede",
            agency_github: "https://github.com/fdnd-agency/voorhoede",
        },


        {
            title: "Choices-choices-the-tech-stack",

            programming_languages: ["SvelteKit", "Directus CMS", "Web components "],
            semester: 'semester 1',
            img: '/img/dda.png',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/choices-choices-the-tech-stack',
            live_url: 'https://choices-choices-the-tech-stack-cyan.vercel.app/member',
            cms: "Directus CMS",
            agency: "De voorhoede",
            agency_github: "https://github.com/fdnd-agency/voorhoede",
        },

    ];
    let projects_year1_semester2 = [

        {
            title: "Connect your tribe",
            period: "2024",
            programming_languages: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "Directus CMS"],
            semester: 'semester2',
            img: '/img/squad-.png',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/connect-your-tribe-squad-page',
            live_url: 'https://connect-your-tribe-squad-page-axqp.onrender.com/',
            agency: "Not applicable",
        },
        {
            title: "Connect your tribe profile card",
            period: "2024",
            programming_languages: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "Directus CMS"],
            semester: 'semester2',
            img: '/img/semester2/profile-card-sprint-7.png',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/connect-your-tribe-profile-card',
            live_url: 'https://connect-your-tribe-profile-card-6snt.onrender.com/',
            cms: "Directus CMS",
            agency: "Not applicable",
        },

        {
            title: "Serverside side rendering",
            period: "2024",

            programming_languages: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "Directus CMS"],
            semester: 'semester2',
            img: '/img/semester2/serverside.png',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/server-side-rendering-server-side-website',
            live_url: 'https://server-side-rendering-server-side-website-e9cr.onrender.com/',
            cms: "Directus CMS",
            agency: "Funda",
            agency_github: "https://github.com/fdnd-agency/funda",
        },
        {
            title: "The web is for everyone",
            period: "2024",

            programming_languages: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "Directus CMS"],
            semester: 'semester2',
            img: '/img/semester2/the-web-is-for-everyone.png',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/the-web-is-for-everyone-interactive-functionality',
            live_url: 'https://the-web-is-for-everyone-interactive-q19o.onrender.com/',
            cms: "Directus CMS",
            agency: "Funda",
            agency_github: "https://github.com/fdnd-agency/funda",
        },
        {
            title: "User experience",
            period: "2024",

            programming_languages: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "Directus CMS"],
            semester: 'semester2',
            img: '/img/semester2/user-experience.png',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/user-experience-enhanced-website',
            live_url: 'https://user-experience-enhanced-website-b0jz.onrender.com/', cms: "Directus CMS",
            agency: "Funda",
            agency_github: "https://github.com/fdnd-agency/funda",

        },
        {
            title: "Pleasurable ui",
            period: "2024",

            programming_languages: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "Directus CMS"],
            semester: 'semester2',
            img: '/img/semester2/pleasurable-ui.png',
            link_project: 'https://github.com/OniWithTheHoodie/pleasurable-ui',
            live_url: 'https://pleasurable-ui.onrender.com/', cms: "Directus CMS",
            agency: "Funda",
            agency_github: "https://github.com/fdnd-agency/funda",
        },

        {
            title: "Proof of concept",
            period: "2024",

            programming_languages: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "EJS", "Directus CMS"],
            semester: 'semester2',
            img: '/img/semester2/bnr.png',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/proof-of-concept',
            live_url: 'https://proof-of-concept-bnr.vercel.app/', cms: "Directus CMS",
            agency: "BNR",
            agency_github: "https://github.com/Yu-Jing-van-Gerwen/proof-of-concept/wiki/1%E2%80%90Analyseren",
        },


    ];
    let projects_year1_semester1 = [
        {
            title: "Your profile card",
            period: "2023",
            year: "jaar 1",
            programming_languages: ["HTML", "CSS"],
            semester: 'semester 1',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/your-tribe-profile-card',
            live_url: 'https://Yu-Jing-van-Gerwen.github.io/your-tribe-profile-card/',
            img: '/img/semester1/profile-card.png',
            agency: "Not applicable",
        },
        {
            title: "Your tribe squad page",
            period: "2023",
            year: "jaar 1",
            programming_languages: ["HTML", "CSS"],
            semester: 'semester 1',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/your-tribe-squad-page',
            live_url: 'https://Yu-Jing-van-Gerwen.github.io/your-tribe-squad-page/',
            img: '/img/semester1/squadpage.png',
            agency: "Not applicable",
        },

        {
            title: "The client",
            period: "2023",
            year: "jaar 1",
            programming_languages: ["HTML", "CSS"],
            semester: 'semester 1',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/the-client-website',
            live_url: 'https://Yu-Jing-van-Gerwen.github.io/the-client-website/',
            img: '/img/semester1/the-client.png',
            agency: "Openbare bibliotheek van Amsterdam",
            agency_github: "https://github.com/fdnd-agency/oba/blob/main/PROJECT_FAMILIEOVERZICHT_ABONNEMENTEN.md",

        }, {
            title: "all-human-accessible-website",
            period: "2023",
            year: "jaar 1",
            programming_languages: ["HTML", "CSS", "JavaScript"],
            semester: 'semester 1',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/all-human-accessible-website',
            live_url: 'https://Yu-Jing-van-Gerwen.github.io/all-human-accessible-website/',
            img: '/img/semester1/all-the.png',
            agency: "Openbare bibliotheek van Amsterdam",
            agency_github: "https://github.com/fdnd-agency/oba/blob/main/PROJECT_FAMILIEOVERZICHT_ABONNEMENTEN.md",
        },

        {
            title: "Look and feel",
            period: "2023",
            year: "jaar 1",
            programming_languages: ["HTML", "CSS", "JavaScript"],
            semester: 'semester 1',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/look-and-feel-corporate-identity',
            live_url: 'https://Yu-Jing-van-Gerwen.github.io/look-and-feel-corporate-identity/',
            img: '/img/semester1/look-and-feel.png',
            agency: "Openbare bibliotheek van Amsterdam",
            agency_github: "https://github.com/fdnd-agency/oba/blob/main/PROJECT_FAMILIEOVERZICHT_ABONNEMENTEN.md",
        },

        {
            title: "Fix the flow",
            period: "2023",
            year: "jaar 1",
            programming_languages: ["HTML", "CSS", "JavaScript"],
            semester: 'semester 1',
            img: '/img/semester1/fix-the-flow.png',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/fix-the-flow-interactive-website',
            live_url: 'https://Yu-Jing-van-Gerwen.github.io/fix-the-flow-interactive-website/',
            agency: "Openbare bibliotheek van Amsterdam",
            agency_github: "https://github.com/fdnd-agency/oba/blob/main/PROJECT_FAMILIEOVERZICHT_ABONNEMENTEN.md",
        },
        {
            title: "The startup",
            period: "2023",
            year: "jaar 1",
            programming_languages: ["HTML", "CSS", "JavaScript"],
            img: '/img/semester1/funda-projects.png',
            semester: 'semester 1',
            link_project: 'https://github.com/Yu-Jing-van-Gerwen/the-startup-responsive-interactieve-website',
            live_url: 'https://Yu-Jing-van-Gerwen.github.io/the-startup-responsive-interactieve-website/',
            agency: "Openbare bibliotheek van Amsterdam",
            agency_github: "https://github.com/fdnd-agency/oba/blob/main/PROJECT_FAMILIEOVERZICHT_ABONNEMENTEN.md",
        },


    ];

</script>


<section class="general-styling-section  ">
    <h1>Portfolio</h1>
    <p>
        Here you can see all my schoolwork, including my best projects. Click on the title to view the GitHub project.
    </p>

    <h2>Best projects</h2>
    <div class="grid-container best-projects">
        {#each uitgelichte_projecten as member}
            <article class="card">
                <a href="{member.link_project}">
                    <picture>
                        <source srcset="{member.img}?format=avif" type="image/avif">
                        <source srcset="{member.img}?format=webp" type="image/webp">
                        <img class="" src="{member.img}" alt="image of project {member.title}">

                    </picture>
                </a>
                <h3 aria-label="project {member.title}"><a href="{member.link_project}" class="titel-project">
                    {member.title}
                </a>
                </h3>
                <ul>
                    <li>
                        <div class="languages-list">
                            {#each member.programming_languages as language}
                                <p class="list-programming-languages">{language}</p>
                            {/each}
                        </div>
                    </li>
                </ul>
                <ul class="buttons-ul-list">
                    <li>
                        <a href="{member.live_url}" class="button-website">Live website</a>
                    </li>
                    <li>
                        <a href="{member.link_project}" class="button-website">GitHub Code</a>

                    </li>
                    <li>
                        <a href="{member.agency_github}" class="button-website">client: {member.agency}</a>
                    </li>
                </ul>

            </article>
        {/each}


    </div>
    <section class="">
        <h2>Free projects</h2>
        <p>This are projects that i make in my free time.</p>
        <div class="grid-container">
            {#each freeprojects as member}
                <article class="card-freeprojects card">
                    <a href="{member.link_project}">

                        <picture>
                            <source srcset="{member.img}?format=avif" type="image/avif">
                            <source srcset="{member.img}?format=webp" type="image/webp">
                            <img src="{member.img}" alt="image of project {member.title}">

                        </picture>


                    </a>
                    <h3 aria-label="project {member.title}"><a href="{member.link_project}" class="titel-project">
                        {member.title}
                    </a>
                    </h3>
                    <ul class=" ">
                        <li>
                            {#each member.programming_languages as language}
                                <p class="list-programming-languages">{language}</p>
                            {/each}
                        </li>
                    </ul>
                    <ul class="buttons-ul-list">
                        <li>
                            <a href="{member.live_url}" class="button-website">Live website</a>
                        </li>
                        <li>
                            <a href="{member.link_project}" class="button-website">GitHub Code</a>
                        </li>
                        <li>
                            <a href="{member.agency_github}" class="button-website">client: {member.agency}</a>
                        </li>

                    </ul>

                </article>
            {/each}
        </div>

    </section>
    <section class="">
        <h2>Projects 2024 September or Later</h2>
        <div class="grid-container">
            {#each projects_year2_semester1 as member}
                <article class="card">
                    <a href="{member.link_project}">
                        <picture>
                            <source srcset="{member.img}?format=avif" type="image/avif">
                            <source srcset="{member.img}?format=webp" type="image/webp">
                            <img class="" src="{member.img}" alt="image of project {member.title}">

                        </picture>
                    </a>
                    <h3 aria-label="project {member.title}"><a href="{member.link_project}" class="titel-project">
                        {member.title}
                    </a>
                    </h3>
                    <ul>
                        <li>
                            <div class="languages-list">
                                {#each member.programming_languages as language}
                                    <p class="list-programming-languages">{language}</p>
                                {/each}
                            </div>
                        </li>
                    </ul>
                    <ul class="buttons-ul-list">
                        <li>
                            <a href="{member.live_url}" class="button-website">Live website</a>
                        </li>
                        <li>
                            <a href="{member.link_project}" class="button-website">GitHub Code</a>

                        </li>
                        <li>
                            <a href="{member.agency_github}" class="button-website">client: {member.agency}</a>
                        </li>
                    </ul>

                </article>
            {/each}
        </div>
    </section>

    <section class="animation-projects-part2">
        <h2>Projects 2023 februari until july </h2>
        <p class="note-render">Please be aware that the live website hosted on <a href="https://render.com/">Render</a>
            is slow. I've tried deploying it on Vercel but encountered ongoing issues.</p>
        <div class="grid-container animation-projects-part2" >
            {#each projects_year1_semester2 as member}

                <article class="card">
                    <a href="{member.link_project}">
                        <picture>
                            <source srcset="{member.img}?format=avif" type="image/avif">
                            <source srcset="{member.img}?format=webp" type="image/webp">
                            <img class="" src="{member.img}" alt="image of project {member.title}">

                        </picture>
                    </a>
                    <h3 aria-label="project {member.title}"><a href="{member.link_project}" class="titel-project">
                        {member.title}
                    </a>
                    </h3>
                    <ul>
                        <li>
                            <div class="languages-list">
                                {#each member.programming_languages as language}
                                    <p class="list-programming-languages">{language}</p>
                                {/each}
                            </div>
                        </li>
                    </ul>
                    <ul class="buttons-ul-list">
                        <li>
                            <a href="{member.live_url}" class="button-website">Live website</a>
                        </li>
                        <li>
                            <a href="{member.link_project}" class="button-website">GitHub Code</a>

                        </li>
                        <li>
                            <a href="{member.agency_github}" class="button-website">client: {member.agency}</a>
                        </li>
                    </ul>

                </article>
            {/each}
        </div>
    </section>

    <section class="">
        <h2>Projects 2023 september until januari </h2>
        <div class="grid-container animation-projects-part2">
            {#each projects_year1_semester1 as member}
                <article class="card">
                    <a href="{member.link_project}">
                        <picture>
                            <source srcset="{member.img}?format=avif" type="image/avif">
                            <source srcset="{member.img}?format=webp" type="image/webp">
                            <img class="" src="{member.img}" alt="image of project {member.title}">

                        </picture>
                    </a>
                    <h3 aria-label="project {member.title}"><a href="{member.link_project}" class="titel-project">
                        {member.title}
                    </a>
                    </h3>
                    <ul>
                        <li>
                            <div class="languages-list">
                                {#each member.programming_languages as language}
                                    <p class="list-programming-languages">{language}</p>
                                {/each}
                            </div>
                        </li>
                    </ul>
                    <ul class="buttons-ul-list">
                        <li>
                            <a href="{member.live_url}" class="button-website">Live website</a>
                        </li>
                        <li>
                            <a href="{member.link_project}" class="button-website">GitHub Code</a>

                        </li>
                        <li>
                            <a href="{member.agency_github}" class="button-website">client: {member.agency}</a>
                        </li>
                    </ul>

                </article>
            {/each}
        </div>
    </section>

</section>

<style>
    @keyframes reveal {
        0% {
            opacity: 0;
        }

        10% {
            opacity: 10%;
        }

        20% {
            opacity: 20%;
        }

        30% {
            opacity: 30%;
        }

        40% {
            opacity: 100%;
        }


    }


    @keyframes revealsemester2 {
        0% {
            opacity: 0;
        }

        10% {
            opacity: 100%;
        }

        20% {
            opacity: 100%;
        }

        25% {
            opacity: 100%;
        }

        30% {
            opacity: 100%;
        }

        35% {
            opacity: 100%;
        }


    }

    /*.animation-projects-part2{*/
    /*    animation-timeline: view();*/
    /*    animation: revealsemester2 3s linear both;*/

    /*}*/
    /*!*voor mesters 2 en 1 moet moet die anders waarin je eerder ziet dat de tekst zichtbaar is*!*/
    /*.grid-container{*/
    /*    animation: reveal 1s linear both;*/
    /*    animation-timeline: view();*/
    /*}*/

    .card{
        animation: reveal 1s linear both;
        animation-timeline: view();
    }

    .grid-container {
        display: grid;
        grid-row-gap: 4rem;
        grid-column-gap: 2rem;
        margin-top: 2rem;
        border-bottom: 2px solid var(--purple);
        padding-bottom: 2rem;
    }

    .card, .card-freeprojects {
        overflow: hidden;
        padding: 2rem;
        display: grid;
        gap: 16px;
        background-color: #dff5db;
        border-radius: 0.25rem;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
    }

    /*dit is de intro van de projecten*/
    .summary-projects {
        border: solid 1px #120000;
        padding: 0.5rem;
    }

    span {
        font-weight: bold;
    }

    /*dit zit in het groene kaartje*/
    .titel-project {
        text-decoration: none;
        color: #120000;
    }

    .titel-project:active {
        transform: translateY(5px);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }

    .titel-project:hover {
        text-decoration: underline;
        color: blue;
    }


    img {
        object-fit: contain;

        margin: 0 ;
    }

    .list-programming-languages {
        border: solid 1px #120000;
        width: max-content;
        padding: 0.5rem;
        margin: 0;
    }



    .languages-list, .buttons-ul-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 0;
    }

    .buttons-ul-list{
        gap: 2rem;
    }

    .note-render {
        color: red;
    }


    @media (max-width: 500px) {
        .card {
            grid-template-rows: 200px  3rem auto;
        }

        img {
            height: 12em;
            max-width: 100%;
        }
    }

    @media (min-width: 500px) {
        img {
            max-width: 100%;
            max-height: 15em;
            width: auto;
            height: auto;
            object-fit: contain; /* or use cover for cropping */
            display: block;
        }

    }

    @media (min-width: 500px) {
        .grid-container {
            grid-template-columns: repeat(auto-fill, minmax(413px, 1fr));
        }
    }

    @media (min-width: 800px) {
        .grid-container {
            grid-template-columns: repeat(auto-fill, minmax(513px, 1fr));
        }

        .general-styling-section {
            font-size: 20px;
        }

        .card {
            grid-template-rows: 308px 4rem auto auto auto;
        }

        .card-freeprojects {
            grid-template-rows: 308px 4rem auto auto;
        }

        img {
            max-width: 100%;
            max-height: 15em;
            width: auto;
            height: auto;
            object-fit: contain; /* or use cover for cropping */
            display: block;
        }


        .titel-project {
            text-decoration: none;
            color: #120000;
            font-size: 1.5rem;
        }

    }
</style>
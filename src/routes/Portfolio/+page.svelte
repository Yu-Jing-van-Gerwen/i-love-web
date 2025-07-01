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
            sprint: "Sprint 13"
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
            sprint: "Sprint 13"
        },
        {
            title: "Lose-your-head",

            programming_languages: ["SvelteKit", "Directus CMS", "Web components "],
            semester: 'semester 3',
            link_project: 'https://github.com/lisagjh/voorhoede',
            img: '/img/semester3/dda.png',
            live_url: 'https://dda-liard.vercel.app/members'
            ,
            agency: "De voorhoede",
            agency_github: "https://github.com/fdnd-agency/voorhoede",
            sprint: "Sprint 14, 15, 16, 17, 18"
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
            sprint: "Sprint 13"

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
            sprint: "Sprint 13"
        },

        {
            title: "Lose-your-head",
            programming_languages: ["SvelteKit", "Directus CMS", "Web components "],
            semester: 'semester 1',
            link_project: 'https://github.com/lisagjh/voorhoede',
            img: '/img/semester3/dda.png',
            live_url: 'https://dda-liard.vercel.app/members',
            cms: "Directus CMS",
            agency: "De voorhoede",
            agency_github: "https://github.com/fdnd-agency/voorhoede",
            sprint: "Sprint 14, 15, 16, 17, 18"
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
            sprint: "Sprint 15"
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
            sprint: "Sprint 7"
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
            sprint: "Sprint 7"
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
            sprint: "Sprint 8"
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
            sprint: "Sprint 9"
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
            sprint: "Sprint 10"

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
            sprint: "Sprint 11"
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
            sprint: "Sprint 12"
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
            sprint: "Sprint 1",
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
            sprint: "Sprint 1",
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
            sprint: "Sprint 2"

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
            sprint: "Sprint 3"
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
            sprint: "Sprint 4"
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
            sprint: "Sprint 5"
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
            sprint: "Sprint 6"
        },


    ];

</script>


<section class="general-styling-section  ">
    <h1>Portfolio</h1>
    <p>
        Here you can see all my schoolwork, including my best projects. Click on the title to view the GitHub project.
        There is also a short description about the project that I made
    </p>

    <h2>Best projects</h2>
    <p class="summary-projects">

        <span>proof of concept</span>: This was my final project of year 1 I made for BNR a playlist page where the user
        can listen to music and read some articles. In this projects I have fetch data from the database
        and show the data with Node.js and EJS.
    </p>
    <p class="summary-projects">
        <span> Your tribe for life squad page</span>: This was a team project where I worked in branches and implemented
        components to create a squad page displaying our class members names.
        I retrieve data from the database and the framework that I used is SvelteKit

    </p>
    <p class="summary-projects">
        <span> Your tribe for life profile card</span>: I made my profile card in SvelteKit and I made use of components
        to use dry code

    </p>
    <p class="summary-projects">
        <span> Lose your head</span>:
        For this project, I chose De Voorhoede as the company. As part of a team, I developed the members page, while my
        teammates worked on the homepage and vacancy page. This project started in Sprint 14 and will end in Sprint 18
    </p>
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
                <p>{member.sprint}</p>
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
                <article class="card-freeprojects">
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
        <h2>School Projects 2024 September or Later</h2>
        <h3>Semester 3</h3>
        <p>This year I'm in my graduation year and I'm working on learning Frameworks. You can view all sprints in the
            School Assignments section.</p>

        <p class="summary-projects">
            <span> Your tribe for life squad page</span>: This was a team project where I worked in branches and
            implemented components to create a squad page displaying our class members names.
            I retrieve data from the database and the framework that I used is SvelteKit

        </p>
        <p class="summary-projects">
            <span> Your tribe for life profile card</span>: I made my profile card in SvelteKit and I made use of
            components to use dry code

        </p>
        <p class="summary-projects">
            <span> Lose your head</span>:
            For this project, I chose De Voorhoede as the company. As part of a team, I developed the members page,
            while my teammates worked on the homepage and vacancy page. This project started in Sprint 14 and will end
            in Sprint 18
        </p>
        <p class="summary-projects">
            <span>Choices-choices-the-tech-stack</span>:
            For this project, I chose The framework Eleventy to try out and the goal was to make a small part of the dda
            website and to figure out what the pros and cons are of this framework eleventy
            <a href="https://github.com/Yu-Jing-van-Gerwen/justify-your-tech-stack/wiki/User-eXperience">here
            </a>you can view my documentation about my tech stack research this is in dutch written

        </p>

        <a class="button-schoolopdrachten" href="https://programma.fdnd.nl/workflow-tooling-Frameworks"> School
            Assignments for Semester 3</a>


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
                    <p>{member.sprint}</p>
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
        <h2>School Projects 2023 februari until juli </h2>
        <h3>Semester 2</h3>
        <p>This semester, I have learned about JavaScript, Node.js, and Express, and I've also worked with EJS.
            You can view all sprints in the School Assignments section.


        </p>
        <p class="note-render">Please be aware that the live website hosted on <a href="https://render.com/">Render</a>
            is slow. I've tried deploying it on Vercel but encountered ongoing issues.</p>
        <p class="summary-projects">
            <span>Connect your tribe</span>:
            I worked in a team to make a squadpage which shows all the names of our squad we needed to make this with
            node.js and EJS.
            My task was to make a searchfunction and a filter function

        </p>
        <a class="button-schoolopdrachten" href="https://programma.fdnd.nl/data-driven-web">School assignments
            semester 2</a>
        <div class="grid-container">
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
                    <p>{member.sprint}</p>
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
        <h2>School Projects 2023 september until januari </h2>
        <h3>Semester 1</h3>
        <p>This year I started studying and I have learned the basics of HTML, CSS, and JavaScript.
            You can view all sprints in the School Assignments section.
            <a class="button-schoolopdrachten" href="https://programma.fdnd.nl/static-web">School assignments semester
                1</a>
        </p>

        <div class="grid-container">
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
                    <p>{member.sprint}</p>
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
            /*background-position: 0% 50%;*/
        }
        25% {
            opacity: 20%;
            /*background-position: 0% 50%;*/
        }

        50% {
            opacity: 100%;
        }

        75% {
            opacity: 75%;
        }

        100% {
            opacity: 50%;
        }
    }

    .grid-container{
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
            grid-template-rows: 308px 4rem auto 3rem auto;
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
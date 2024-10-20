<script>
    let projects_year1_semester1 = [
        {
            title: "Your profile card",
            period: "2023",
            year: "jaar 1",
            programming_language: "html,css",
            semester:'semester 1',
            link_project:'https://github.com/yujing-student/your-tribe-profile-card',
            img:'',
        },
        {
            title: "Your tribe squad page",
            period: "2023",
            year: "jaar 1",
            programming_language: "html,css",
            semester:'semester 1',
            link_project:'https://github.com/yujing-student/your-tribe-squad-page',
            img:'',
        },

        {
            title: "The client",
            period: "2023",
            year: "jaar 1",
            programming_language: "html,css",
            semester:'semester 1',
            link_project:'https://github.com/yujing-student/the-client-website',
            img:'',
        }, {
            title: "Look and feel",
            period: "2023",
            year: "jaar 1",
            programming_language: "html,css",
            semester:'semester 1',
            link_project:'https://github.com/yujing-student/look-and-feel-corporate-identity',
            img:''
        },
        {
            title: "fix the flow",
            period: "2023",
            year: "jaar 1",
            programming_language: "html,css, javascript",
            semester:'semester 1',
            img:'',
            link_project: 'https://github.com/yujing-student/fix-the-flow-interactive-website'
        },
        {
            title: "The startup",
            period: "2023",
            year: "jaar 1",
            programming_language: "html,css, javascript",
            img:'',
            semester:'semester 1',
            link_project: 'https://github.com/yujing-student/the-startup-responsive-interactieve-website'
        },



    ];


    let projects_year1_semester2 = [

        {
            title: "connect your tibe",
            period: "2024",
            year: "jaar 1",
            programming_language: "html,css, javascript,node js,express",
            semester:'semester 2',
            img:''
        },

        {
            title: "serverside side rendering",
            period: "2024",
            year: "jaar 2",
            programming_language: "html,css, javascript,node js,express",
            semester:'semester 2',
            img:''
        },


    ];

    let smallproject = [
        {
            title: "css layout",
            period: "2023",
            year: "jaar 1",
            programming_language: "html,css, javascript,node js,express",
            semester:'semester 1',
        }
    ]


    let projects_year2_semester1 = [
        {
            title: "your tribe for life profile card",
            period: "2023",
            year: "jaar 1",
            programming_language: "sveltekit",
            semester:'semester 1',
            link_project:'https://github.com/yujing-student/your-tribe-for-life-profile-card',
            img:'/img/dda-website.png'
        },
        {
            title: "Your tribe squad page",
            programming_language: "sveltekit",
            semester:'semester 1',
            link_project:'https://github.com/KaanKalmi/your-tribe-for-life-squad-page',
        },


        {
            title: "choices-choices-the-tech-stack",

            programming_language: "eleventy",
            semester:'semester 1',
            link_project:'https://github.com/yujing-student/choices-choices-the-tech-stack',
        },

    ];
</script>


<section class="general-styling-section  ">
    <h1>digital garden</h1>
    <p>
        hier kunt u all mijn schoolwerk zien met hier de hoofdprojecten
    </p>


    <h2>schoolprojecten dit jaar</h2>
    <p>Dit jaar ben ik bezig met frameworks om hier beter in te wordem</p>
    <div class="grid-container">
        {#each projects_year2_semester1 as member}
            <article class="card">
                <picture>
                    <source src="{member.img}">
                    <img src="{member.img}">

                </picture>
            <h3 aria-label="project {member.title}"><a href="{member.link_project}">
                {member.title}
            </a> </h3>
            <ul>
                <li>{member.programming_language}</li>
            </ul>
            </article>
        {/each}
    </div>



    <h2>schoolprojecten 2023</h2>
    <p>Dit jaar heb ik html en css geleerd en ook een beetje javascript</p>
    <div class="grid-container">
        {#each projects_year1_semester1 as member}
            <article class="card">
                <picture>
                    <source src="{member.img}">
                    <img src="{member.img}">

                </picture>
                <h3 aria-label="project {member.title}"><a href="{member.link_project}">
                    {member.title}
                </a> </h3>
                <ul>
                    <li>{member.programming_language}</li>
                </ul>
            </article>
        {/each}
    </div>
</section>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
        grid-row-gap: 1rem;
    }
    ul{
        padding: 0;
    }
    li{
        list-style: none;
    }

    .card {
        width: 150px;
        overflow: hidden;
        padding: 2rem;
        display: grid;
        gap: 16px;
        background-color: #00ff92;
    }

    img {
        object-fit: cover;
        width: 150px;
    }

    h1 {

    }

    h2 {
        /*border-bottom: solid 2px var(--purple);*/
    }


</style>
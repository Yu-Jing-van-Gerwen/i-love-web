<script>


</script>
<section class="socialmedia whitebackground animationfade">
    <h2>Social media</h2>
    <ul>
        <li class="icons">
            <a href="https://github.com/Yu-Jing-van-Gerwen">
                <picture>

                    <img src="/img/github-logo.png" alt="GitHub"/>
                </picture>
            </a>
        </li>
        <li class="icons">
            <a href="https://www.linkedin.com/in/yu-jing-van-gerwen-a959431b7/">

                <img  src="/img/linkedin.jpg" alt="linkedin"/>
            </a>
        </li>
    </ul>
</section>
<style>

    li {
        list-style: none;
    }

    ul {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 4em 1fr;
        padding: 1em 1em 0 0;
        gap: 2em;

        margin-top: -1em;

    }
    img{
        width: 70px;
    }


    .icons:hover{
        transform: scale(1);
    }
    .whitebackground{
        /*box-shadow: 14px 13px 0px 0px;*/
        background: #fff;
        font-weight: normal;
        /*width: 13em;*/
        border-radius: 0.25rem;

        display: grid;

    }
    .animationfade {
        animation: fadeIntest 12s;
        -webkit-animation: fadeIntest 10s;
        -moz-animation: fadeIntest 12s;
        -o-animation: fadeIntest 12s;
        -ms-animation: fadeIntest 12s;
    }

    @keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-moz-keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-webkit-keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-o-keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @-ms-keyframes fadeIntest {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>
<script>

</script>
    <section class="general-styling-section ">
        <h1 id="mijn-leervragen">Learning-journal</h1>
        <p>Mijn learning journal gaat over wat ik iedere week leer en dit hou ik bij in een markdown
            omdat dit overzichtelijker is.
        </p>
        <p>
            Kies de sprint uit en dan zie je 4 markdown files waarvan 1 file leervragen en de andere files zijn het logboek.
            <br>

        <img src="/img/log.png" alt="screenshot logboek">


        </p>
        <ul class="buttons">
            <li>
                <a href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint13" class="moreinfo pulse">Sprint 13</a>
            </li>
            <li>
                <a href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint14" class="moreinfo pulse">Sprint 14</a>
            </li>
            <li>
                <a href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint15" class="moreinfo pulse">Sprint 15</a>
            </li>
        </ul>


    </section>
<style>
    .buttons{
        display: flex;
        flex-direction: column;
        gap: 2em;

    }
    .moreinfo:hover{
        background-color: #00EFEF;
    }
    li{
        list-style: none;

    }
    p{
        font-size: 20px;
    }

    @media (max-width: 400px) {
        img{
            width: 329px;
        }
    }
    @media (min-width: 400px) {
        img{
            object-fit: cover;
            width: 100%;
        }
    }

    @media (min-width: 800px) {
        .buttons{
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 2em;
        }
        img{
            object-fit: cover;
            width: 100%;
            max-width: 800px;
        }

    }

</style>
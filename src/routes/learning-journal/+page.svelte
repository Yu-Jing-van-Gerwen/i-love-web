<script>

</script>
    <section class="general-styling-section ">
        <h1 id="mijn-leervragen">Learning-journal</h1>
        <p>mijn learning journal gaat over wat ik iedere week leer en dit hou ik bij in een markdown
            omdat dit overzichtelijker is kies de sprint uit en klik dan welke week je wilt zien
        </p>
        <ul class="buttons">
            <li>
                <a href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint13" class="moreinfo pulse">sprint 13</a>
            </li>
            <li>
                <a href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint14" class="moreinfo pulse">sprint 14</a>
            </li>
            <li>
                <a href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint15" class="moreinfo pulse">sprint 15</a>
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


    @media (min-width: 800px) {
        .buttons{
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 2em;
        }

    }

</style>
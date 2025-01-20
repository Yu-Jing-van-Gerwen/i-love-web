<script>

</script>
<section class="general-styling-section ">
    <h1 id="mijn-leervragen">Learning-journal</h1>

    <p>
        My learning journal tracks what I learn each week, and I keep it in a markdown file because it’s more organized.


        <br>
        Choose a sprint, and you’ll see four markdown files, one of which contains learning questions and the others are
        logbooks.
        the learning journal is in dutch and not in English.
        <br>
    <ul class="buttons">
        <li>
            <a class="moreinfo pulse"
               href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint13">Sprint 13</a>
        </li>
        <li>
            <a class="moreinfo pulse"
               href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint14">Sprint 14</a>
        </li>
        <li>
            <a class="moreinfo pulse"
               href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint15">Sprint 15</a>
        </li>
        <li>
            <a class="moreinfo pulse"
               href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint16">Sprint 16</a>
        </li>
        <li>
            <a class="moreinfo pulse"
               href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint17">Sprint 17</a>
        </li>
        <li>
            <a class="moreinfo pulse"
               href="https://github.com/yujing-student/i-love-web/tree/main/learning-journal/sprint18">Sprint 18</a>
        </li>
    </ul>

    <hr>
    <p>When you click on one of the buttons this is what you will see and chose the week.</p>
    <img alt="screenshot logboek" src="/img/log.png">




</section>
<style>
    .buttons {
        display: flex;
        flex-direction: column;
        gap: 2em;

    }

    .moreinfo:hover {
        background-color: #00EFEF;
    }

    li {
        list-style: none;

    }

    p {
        font-size: 20px;
    }

    @media (max-width: 400px) {
        img {
            width: 329px;
        }
    }

    @media (min-width: 400px) {
        img {
            object-fit: cover;
            width: 100%;
        }
    }

    @media (min-width: 800px) {
        .buttons {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 2em;
        }

        img {
            object-fit: cover;
            width: 100%;
            max-width: 800px;
        }

    }

</style>
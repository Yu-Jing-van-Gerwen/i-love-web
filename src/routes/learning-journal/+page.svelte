<script>

</script>
<section class="general-styling-section ">
    <h1 id="mijn-leervragen">Learning-journal</h1>
    <p>
        My learning journal tracks what I learn each week, and I keep it in a markdown file because it’s more organized.
        <br/>
        Choose a sprint, and you’ll see four markdown files, one of which contains learning questions and the others are
        logbooks. the learning journal is in dutch and not in English.
        <br/>
    </p>
    <hr/>
    <p>When you click on one of the buttons this is what you will see and chose the week.</p>
    <img alt="screenshot logboek" src="/img/log.png"/>
</section>

<style>
    p {
        font-size: 20px;
    }

    img {
        object-fit: cover;
        width: 100%;
    }

    @media (max-width: 400px) {
        img {
            width: 329px;
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
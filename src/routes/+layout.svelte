<script>
    import Header from "$lib/Header.svelte";

</script>
<Header/>
<body>


<main>
    <slot></slot>
</main>
</body>
<style>

    @media (min-width: 00px) {

    }

    body{
        background: #00ff92;
        /*background: linear-gradient(0deg, #00EFEF 40%, #4FDD51 100%);*/

        background: linear-gradient(269deg, #00EFEF 40%, #4FDD51 100%);
    }
    main{
        margin-top: 4rem;
    }
</style>
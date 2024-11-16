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


    body{
        background: #aedac7;
    }
    main{
        margin-top: 4rem;
    }
</style>
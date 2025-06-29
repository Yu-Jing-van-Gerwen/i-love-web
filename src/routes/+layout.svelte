<script>
    import Header from "$lib/Header.svelte";
    import '../stylesheet/global.css';
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
<nav class="generalStyling ">
    <ul class="flex-container">
        <li class="flex-items">
            homepagina
        </li>
        <li class="flex-items">learning journal</li>
        <li class="flex-items">digital garden</li>
    </ul>
</nav>

<style>
    .generalStyling {
        padding: 2em;
        background-color: #bdf487a3;
        box-shadow: inset 0px 1px 11px 0px;
        border-radius: 15px;
    }

    .flex-container {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: normal;
        align-items: normal;
        align-content: normal;
        gap: 28px;
    }

    .flex-items:nth-child(1) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

    .flex-items:nth-child(2) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }

    .flex-items:nth-child(3) {
        display: block;
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: auto;
        align-self: auto;
        order: 0;
    }
</style>
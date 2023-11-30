<script>
    import { page } from "$app/stores";

    /**
     * @type {any}
     */
    export let title;

    /**
     * @type {string | number | Date}
     */
    export let date;

    /**
     * @type {any}
     */
    export let description;

    $: date = new Date(date).toISOString().split("T")[0];
    $: link = $page.url.href;
</script>

<header class="dashed-vector">
    <h1>
        <cli-title>{title}</cli-title>
    </h1>
    <p>Date: <time>{date}</time></p>
    <p>
        Link: <a href={link}>{link}</a>
    </p>
    <p>
        {description || "No description."}
    </p>
</header>
<div class="md">
    <slot />
</div>

<style>
    @import "../../styles/code.css";
    @import "../../styles/markdown.css";

    header {
        border-top: 0.1em dashed var(--color-text);
        border-bottom: 0.1em dashed var(--color-text);
    }
</style>

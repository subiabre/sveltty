<script>
    import { page } from "$app/stores";

    /**
     * @type {string}
     */
    export let title;

    /**
     * @type {string | number | Date}
     */
    export let date;

    /**
     * @type {string}
     */
    export let slug;

    /**
     * @type {any}
     */
    export let description;

    $: date = new Date(date).toISOString().split("T")[0];
    $: link = `${$page.url.origin}${slug}`;
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
        margin: 0 0 2rem 0;

        border-top: 0.1rem dashed var(--color-text);
        border-bottom: 0.1rem dashed var(--color-text);
    }

    header > *:not(:last-child) {
        margin: 1em 0 0 0;
    }

    header > *:first-child {
        margin: 2rem 0 0 0;
    }

    header > *:last-child {
        margin: 1em 0 2rem 0;
    }
</style>

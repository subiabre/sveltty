<script lang="ts">
    import { onMount } from "svelte";

    export let args: string[];

    let date: string = (new Date).toISOString();

    onMount(() => {
        setInterval(() => {
            date = (new Date).toISOString();
        }, Number(args[1] || 10))
    });
</script>

<article>
    { date }
</article>

<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import MessageMarkdown from "$lib/Message/MessageMarkdown.svelte";

    export let args: string[];

    // For some reason if you try to build the path directly at the import
    // it will not actually load the file even if it exists, it needs to
    // have the path built before the import despite just being a string
    // I hate JavaScript
    const path = `../../posts/${args[1]}`;
    const post = import(/* @vite-ignore */path);

    function updateLocation() {
        if ($page.url.pathname !== `/${args[1]}`) goto(args[1]);
    }
</script>

{#await post}
    <p>Loading</p>
{:then post}
    <MessageMarkdown meta={post.metadata} body={post.default} on:mount={updateLocation} />
{:catch}
    <p>
        <cli-danger>ERROR</cli-danger>: File '<cli-alert>{args[1]}</cli-alert>' not found.
    </p>
{/await}

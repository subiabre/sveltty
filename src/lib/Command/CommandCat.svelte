<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import Message from "$lib/Message/Message.svelte";
    import { stdout } from "$lib/stdout";

    export let args: string[];

    // For some reason if you try to build the path directly at the import
    // it will not actually load the file even if it exists, it needs to
    // have the path built before the import despite just being a string
    // I hate JavaScript
    const path = `../../posts/${args[1]}`;
    const post = import(/* @vite-ignore */ path);

    function updateLocation() {
        if (
            $stdout.length > 0 &&
            $stdout[$stdout.length - 1].props.args[0] === "cat" &&
            $stdout[$stdout.length - 1].props.args[1] === $page.params.file
        ) {
            return;
        }

        if ($page.url.pathname !== `/${args[1]}`) goto(args[1]);
    }
</script>

{#await post}
    <p>Loading</p>
{:then post}
    <Message on:mount={updateLocation}>
        <svelte:component this={post.default} slug={`/${args[1]}`} />
    </Message>
{:catch}
    <p>
        <cli-danger>ERROR</cli-danger>: File '<cli-alert>{args[1]}</cli-alert>'
        not found.
    </p>
{/await}

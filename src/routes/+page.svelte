<script lang="ts">
    import { onMount } from 'svelte';
    import { stdout } from '$lib/stdout.js';
    import MessageLs from '$lib/Message/MessageLs.svelte';
    import CommandPrompt from '$lib/Command/CommandPrompt.svelte';

    export let data;

    onMount(() => {
        stdout.write(CommandPrompt, { args: ["ls"] });
        stdout.write(MessageLs, { posts: data.posts }); 
    });
</script>

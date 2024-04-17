<script lang="ts">
    import { fs } from "$lib/fs";
    import MessageLs from "$lib/Message/MessageLs.svelte";

    const posts = fs.posts();
</script>

{#await posts then posts}
    <MessageLs {posts} />
{/await}

<script lang="ts">
    import { fs } from "$lib/fs";

    const posts = fs.posts();
</script>

{#await posts then posts}
    <p>total {posts.length}</p>
    <ol>
        {#each posts as post}
            <li>
                <p><a href={post.slug}>{post.slug}</a></p>
                <p>{post.meta.title}</p>
            </li>
        {/each}
    </ol>
{/await}

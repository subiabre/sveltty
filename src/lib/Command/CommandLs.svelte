<script lang="ts">
    import { fs } from "$lib/fs";

    const posts = fs.posts();
</script>

{#await posts then posts}
    <ol>
        {#each posts as post}
            <li>
                <a href={post.slug}>
                    {post.slug}
                </a>
            </li>
        {/each}
    </ol>
{/await}

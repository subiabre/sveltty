<script lang="ts">
    import { fs } from "$lib/fs";

    const posts = fs.posts();
</script>

{#await posts then posts}
    <p>total {posts.length}</p>
    <table>
        <tbody>
            {#each posts as post}
                <tr>
                    <!-- <td>{post.meta.title}</td> -->
                    <td>{post.meta.date}</td>
                    <td><a title={post.meta.title} href={post.slug}>{post.slug}</a></td>
                </tr>
            {/each}
        </tbody>
    </table>
{/await}

<style>
    tr td:last-child {
        padding: 0 0 0 1rem;
    }
</style>

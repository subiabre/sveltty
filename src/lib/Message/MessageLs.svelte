<script lang="ts">
    import type { Post } from "$lib/fs";

    export let posts: Post[] = [];
</script>

<p>total {posts.length}</p>
<table>
    <tbody>
        {#each posts as post}
            <tr>
                <!-- <td>{post.meta.title}</td> -->
                <td>{post.meta.date}</td>
                <td
                    ><a title={post.meta.title} href={post.file.slug}>{post.file.file}</a
                    ></td
                >
            </tr>
        {/each}
    </tbody>
</table>

<style>
    tr td:last-child {
        padding: 0 0 0 1rem;
    }
</style>

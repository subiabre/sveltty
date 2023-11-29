<script lang="ts">
    import { page } from "$app/stores";
</script>

<article>
    <p>Welcome to <a href="/">{$page.url.host}</a>.</p>
    <ul>
        <li>
            This site looks and behaves like a CLI, but it's just a
            <s>not so</s> regular web app.
        </li>
        <li>
            Have fun feeling like a hacker while you actually just read my blog.
        </li>
    </ul>
    <p>Type <code>help</code> to get started.</p>
</article>

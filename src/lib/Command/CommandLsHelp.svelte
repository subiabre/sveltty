<script lang="ts">
    export let verbose: boolean = false;
</script>

<code>ls</code>
<p>List the contents of the directory.</p>
{#if verbose}
    <ul>
        <li>
            Aliases: <code>list</code>
        </li>
    </ul>
{/if}

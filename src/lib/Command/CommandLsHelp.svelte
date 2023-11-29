<script lang="ts">
    export let verbose: boolean = false;
</script>

<code>ls</code> - List the contents of the directory.
{#if verbose}
    <ul>
        <li>
            Aliases: <code>list</code>
        </li>
    </ul>
{/if}

<script lang="ts">
    export let verbose: boolean = false;
</script>

<p>
    <code>ls</code>
    <br />
    List the contents of the directory.
</p>
{#if verbose}
    <ul>
        <li>
            Aliases: <code>list</code>
        </li>
    </ul>
{/if}

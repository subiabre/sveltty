<script lang="ts">
    export let verbose: boolean = false;
</script>

<code>help</code> [<span>command</span>] - Print help on available commands.
{#if verbose}
    <ul>
        <li>
            Example: <code>help</code> cat
        </li>
        <li>
            Arguments:
            <ul>
                <li>
                    [<span>command</span>] - Optional.
                </li>
            </ul>
        </li>
    </ul>
{/if}

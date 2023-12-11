<script lang="ts">
    export let verbose: boolean = false;
</script>

<code>help</code> [<cli-info>command</cli-info>]
<p>Print help on available commands.</p>
{#if verbose}
    <ul>
        <li>
            Example: <code>help</code> cat
        </li>
        <li>
            Arguments:
            <ul>
                <li>
                    [<cli-info>command</cli-info>] - Optional. Default: none.
                    Command for which to show help.
                </li>
            </ul>
        </li>
    </ul>
{/if}

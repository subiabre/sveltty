<script lang="ts">
    export let verbose: boolean = false;
</script>

<code>date</code> [<cli-info>n</cli-info>]
<p>Display the ISO 8601 date in real time.</p>
{#if verbose}
    <ul>
        <li>
            Example: <code>date</code> 10
        </li>
        <li>
            Aliases: <code>time</code>, <code>clock</code>
        </li>
        <li>
            Arguments:
            <ul>
                <li>
                    [<cli-info>n</cli-info>] - Optional. Default: 10.
                </li>
            </ul>
        </li>
    </ul>
{/if}

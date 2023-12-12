<script lang="ts">
    export let verbose: boolean = false;
</script>

<p>
    <code>date</code> [<cli-info>refresh-rate</cli-info>]
    <br />
    Display the ISO 8601 date in real time.
</p>
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
                    [<cli-info>refresh-rate</cli-info>] - Optional. Default: 10.
                    Refresh rate in milliseconds.
                </li>
            </ul>
        </li>
    </ul>
{/if}

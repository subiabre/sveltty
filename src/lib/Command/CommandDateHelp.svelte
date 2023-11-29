<script lang="ts">
    export let verbose: boolean = false;
</script>

<code>date</code> [<span>n</span>] - Display the ISO 8601 date in real time.
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
                    [<span>n</span>] - Optional. Default: 10.
                </li>
            </ul>
        </li>
    </ul>
{/if}

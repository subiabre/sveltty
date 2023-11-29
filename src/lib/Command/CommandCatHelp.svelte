<script lang="ts">
    export let verbose: boolean = false;
</script>

<code>cat</code> &lt;<cli-alert>file</cli-alert>&gt;
<p>Print the contents of a file.</p>
{#if verbose}
    <ul>
        <li>
            Example: <code>cat</code> <cli-alert>README.md</cli-alert>
        </li>
        <li>
            Aliases: <code>read</code>
        </li>
        <li>
            Arguments:
            <ul>
                <li>
                    &lt;<cli-alert>file</cli-alert>&gt; - Path to the file to be
                    read.
                </li>
            </ul>
        </li>
    </ul>
{/if}

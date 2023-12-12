<script lang="ts">
    export let verbose: boolean = false;
</script>

<p>
    <code>cat</code> &lt;<cli-alert>file</cli-alert>&gt;
    <br/>
    Print the contents of a file.
</p>
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
                    &lt;<cli-alert>file</cli-alert>&gt; - Required. Name of the
                    file to be read.
                </li>
            </ul>
        </li>
    </ul>
{/if}

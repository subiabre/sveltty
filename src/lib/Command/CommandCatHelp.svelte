<script lang="ts">
    export let verbose: boolean = false;
</script>

<code>cat</code> &lt;<span>file</span>&gt; - Print the contents of a file.
{#if verbose}
    <ul>
        <li>
            Example: <code>cat</code> <span>README.md</span>
        </li>
        <li>
            Aliases: <code>read</code>
        </li>
        <li>
            Arguments:
            <ul>
                <li>
                    &lt;<span>file</span>&gt; - Path to the file to be read.
                </li>
            </ul>
        </li>
    </ul>
{/if}

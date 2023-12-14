<script lang="ts">
    import type { ComponentType } from "svelte";
    import { cmnds, shell } from "$lib/shell";

    export let args: string[];

    let commands: ComponentType[] = getCommands();

    function getCommands(): ComponentType[] {
        if (args.length > 1) {
            return [shell.help(args[1])];
        }

        return [...new Set(Object.entries(cmnds).map((cmd) => cmd[1].help))];
    }
</script>

<article>
    {#if commands.length > 1}
        <p>Available commands:</p>
        {#each commands as command}
            <svelte:component this={command} verbose={false} />
        {/each}
    {:else}
        {#each commands as command}
            <svelte:component this={command} args={[args[1]]} verbose={true} />
        {/each}
    {/if}
</article>

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
        <p>
            This is my blog, it looks and behaves like a command line, but it's
            just a regular website. You can still navigate by clicking around,
            but you'll need to type some commands to discover stuff.
        </p>
        <p>
            Like any regular shell it has input with history (<kbd>↑</kbd> &
            <kbd>↓</kbd>) and autocompletion (<kbd>Tab</kbd>). Unlike most
            shells the input is not always active, you need to focus on it, in
            exchange you get regular keyboard navigation when not on input.
        </p>
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

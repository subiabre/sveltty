<script lang="ts">
    import type { ComponentType } from "svelte";
    import CommandCatHelp from "./CommandCatHelp.svelte";
    import CommandClearHelp from "./CommandClearHelp.svelte";
    import CommandDateHelp from "./CommandDateHelp.svelte";
    import CommandLsHelp from "./CommandLsHelp.svelte";
    import CommandHelpHelp from "./CommandHelpHelp.svelte";
    import { shell } from "$lib/shell";

    export let args: string[];

    let commands: ComponentType[] = getCommands();

    function getCommands(): ComponentType[] {
        if (args.length > 1) {
            return [shell.help(args[1])];
        }

        return [
            CommandHelpHelp,
            CommandCatHelp,
            CommandLsHelp,
            CommandClearHelp,
            CommandDateHelp,
        ];
    }
</script>

<article>
    {#if commands.length > 1}
        <p>Type <code>help</code> [<cli-info>command</cli-info>] to get detailed help on a given command.</p>
        <p>Available commands:</p>
        <ul>
            {#each commands as command}
                <li>
                    <svelte:component this={command} verbose={false} />
                </li>
            {/each}
        </ul>
    {:else}
        {#each commands as command}
            <svelte:component this={command} args={[args[1]]} verbose={true} />
        {/each}
    {/if}
</article>

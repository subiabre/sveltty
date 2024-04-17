<script lang="ts">
    import "../app.css";
    import { shell } from "$lib/shell";
    import { stdout } from "$lib/stdout";
    import TerminalInput from "$lib/Terminal/TerminalInput.svelte";
    import TerminalOutput from "$lib/Terminal/TerminalOutput.svelte";
    import TerminalWindow from "$lib/Terminal/TerminalWindow.svelte";
    import TerminalPrompt from "$lib/Terminal/TerminalPrompt.svelte";
    import CommandPrompt from "$lib/Command/CommandPrompt.svelte";

    function handleSubmit(e: CustomEvent) {
        const command = shell.exec(e.detail.args[0]);

        stdout.write(CommandPrompt, { args: e.detail.args });
        stdout.write(command, { args: e.detail.args });
    }
</script>

<TerminalWindow>
    <slot />
    <TerminalOutput bind:values={$stdout} />
    <TerminalPrompt>
        <TerminalInput on:submit={handleSubmit} />
    </TerminalPrompt>
</TerminalWindow>

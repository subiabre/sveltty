<script lang="ts">
    import "../app.css";
    import CommandPrompt from "$lib/Command/CommandPrompt.svelte";
    import TerminalInput from "$lib/Terminal/TerminalInput.svelte";
    import TerminalOutput from "$lib/Terminal/TerminalOutput.svelte";
    import TerminalPrompt from "$lib/Terminal/TerminalPrompt.svelte";
    import { shell } from "$lib/shell";
    import { stdin } from "$lib/stdin";
    import { stdout } from "$lib/stdout";

    let main: HTMLElement;
    let mainHeight: number = 0;

    let input: TerminalInput;
    let output: TerminalOutput;

    async function handleInput(
        event: CustomEvent<{ value: string; keyboard: KeyboardEvent }>,
    ) {
        // Autocomplete
        if (event.detail.keyboard.key === "Tab") {
            event.detail.keyboard.preventDefault();

            let args = event.detail.value.trimEnd()?.split(" ");

            const auto = await shell.auto(args);
            input.write(auto.join(" "));
            input.focus();
        }

        // Submit
        if (event.detail.keyboard.key === "Enter") {
            event.detail.keyboard.preventDefault();

            const args = $stdin.input[$stdin.index].split(" ");
            mainHeight = main.scrollHeight;

            stdin.send();

            stdout.write(CommandPrompt, { args });
            stdout.write(shell.exec(args[0]), { args });
        }

        // Previous input
        if (event.detail.keyboard.key === "ArrowUp") {
            stdin.prev();
            input.focus();
        }

        // Next input
        if (event.detail.keyboard.key === "ArrowDown") {
            stdin.next();
            input.focus();
        }
    }

    stdout.subscribe(() => {
        if (typeof main !== "object") return;

        setTimeout(() => {
            main.scroll({
                top: mainHeight,
                behavior: "smooth",
            });
        }, 100);
    });
</script>

<main bind:this={main}>
    <div>
        <slot />
        <TerminalOutput bind:this={output} values={$stdout} />
        <TerminalPrompt>
            <TerminalInput
                bind:this={input}
                bind:value={$stdin.input[$stdin.index]}
                on:input={handleInput}
            />
        </TerminalPrompt>
    </div>
</main>

<style>
    main {
        height: 100%;

        overflow-y: scroll;
    }

    div {
        max-width: 75ch;
    }
</style>

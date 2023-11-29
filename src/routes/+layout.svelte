<script lang="ts">
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
        }

        // Submit
        if (event.detail.keyboard.key === "Enter") {
            event.detail.keyboard.preventDefault();

            const args = $stdin.input[$stdin.index].split(" ");

            stdin.send();
            stdout.write(CommandPrompt, { args });
            stdout.write(shell.exec(args[0]), { args });

            setTimeout(() => {
                main.scroll({
                    top: mainHeight,
                    behavior: "smooth",
                });

                mainHeight = main.scrollHeight;
            }, 100);
        }

        // Previous input
        if (event.detail.keyboard.key === "ArrowUp") {
            stdin.prev();
        }

        // Next input
        if (event.detail.keyboard.key === "ArrowDown") {
            stdin.next();
        }

        input.focus();
    }
</script>

<main bind:this={main}>
    <slot />
    <TerminalOutput bind:this={output} values={$stdout} />
    <TerminalPrompt>
        <TerminalInput
            bind:this={input}
            bind:value={$stdin.input[$stdin.index]}
            on:input={handleInput}
        />
    </TerminalPrompt>
</main>

<style>
    :global(body) {
        height: 100dvh;

        margin: 0;
    }

    main {
        height: calc(100% - 2em);

        padding: 1em;

        overflow-y: scroll;
    }
</style>

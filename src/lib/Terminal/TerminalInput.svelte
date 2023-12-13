<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let value: string;

    export function focus() {
        if (typeof window === "undefined") return;

        const range = document.createRange();
        const selection = window.getSelection();

        setTimeout(() => {
            range.setStart(input.childNodes[0] || input, value.length);

            range.collapse(true);

            selection?.removeAllRanges();
            selection?.addRange(range);
        }, 10);
    }

    export function clear() {
        value = "";
    }

    export function write(message: string) {
        value = message;
    }

    const dispatch = createEventDispatcher<{
        input: { value: string; keyboard: KeyboardEvent };
    }>();

    let input: HTMLSpanElement;

    function handleInput(event: KeyboardEvent) {
        dispatch("input", {
            value: value,
            keyboard: event,
        });
    }
</script>

<span
    id="input"
    tabindex="0"
    role="textbox"
    autocorrect="off"
    spellcheck="false"
    autocapitalize="off"
    contenteditable="true"
    aria-label="Type help to get a list of available commands"
    bind:this={input}
    bind:innerHTML={value}
    on:keydown={handleInput}
/>

<button on:click={() => focus()}>Unlock input.</button>

<style>
    @keyframes blink {
        from {
            background-color: var(--color-text);
        }
        to {
            background-color: var(--color-background);
        }
    }

    span[contenteditable="true"] {
        line-break: auto;
        white-space: pre-wrap;

        block-size: 1ch;
        min-inline-size: 100%;
        writing-mode: horizontal-tb;

        outline: none;
    }

    span[contenteditable="true"]::after {
        content: "\00a0 ";
        white-space: pre;

        outline: none;

        box-shadow:
            inset -1px 0 0 var(--color-text),
            inset 0 -1px 0 var(--color-text),
            inset 1px 0 0 var(--color-text),
            inset 0 1px 0 var(--color-text);
    }

    span[contenteditable="true"]:focus-visible::after {
        animation-name: blink;
        animation-duration: 0.61s;
        animation-direction: alternate;
        animation-iteration-count: infinite;

        box-shadow: none;
    }

    button {
        position: absolute;

        width: 100%;

        opacity: 0;
    }

    button:hover {
        cursor: pointer;
    }
</style>

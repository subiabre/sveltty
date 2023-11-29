<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let value: string;

    export function focus() {
        setTimeout(() => {
            input.focus();
            input.setSelectionRange(value.length, value.length);
        }, 0);
    }

    export function clear() {
        value = "";
    }

    export function write(message: string) {
        value = message;
    }

    function handleInput(event: KeyboardEvent) {
        dispatch("input", {
            value: value,
            keyboard: event,
        });
    }

    const dispatch = createEventDispatcher<{
        input: { value: string; keyboard: KeyboardEvent };
    }>();

    let input: HTMLInputElement;
</script>

<form on:submit|preventDefault>
    <input
        type="text"
        autocomplete="off"
        bind:value
        bind:this={input}
        on:keydown={handleInput}
    />
</form>

<style>
    form input {
        width: 100%;
        padding: 0;

        border: none;
        outline: none;

        font-size: inherit;
        font-family: inherit;
    }
</style>

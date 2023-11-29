import { writable } from "svelte/store";

function createStdin() {
    let input: string[] = [""];
    let index: number = 0;

    const { subscribe, set, update } = writable({ input, index });

    return {
        set,
        send: () => update((stdin) => {
            return {
                ...stdin,
                input: [...stdin.input, ""],
                index: stdin.index + 1,
            }
        }),
        next: () => update((stdin) => {
            if (stdin.index < stdin.input.length - 1) stdin.index++;

            return { ...stdin }
        }),
        prev: () => update((stdin) => {
            if (stdin.index > 0) stdin.index--;

            return { ...stdin }
        }),
        subscribe,
    }
}

export const stdin = createStdin();

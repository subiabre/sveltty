import type { ComponentType } from "svelte";
import { writable } from "svelte/store";

function createStdout() {
    const { subscribe, set, update } = writable<{output: ComponentType, props?: any }[]>();

    return {
        set,
        clear: () => set([]),
        write: (output: ComponentType, props?: any) => update((stdout) => {
            return [
                ...stdout,
                { output, props }
            ]
        }),
        subscribe,
    }
}

export const stdout = createStdout();

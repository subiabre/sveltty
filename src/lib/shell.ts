import type { ComponentType } from "svelte";
import CommandClear from "$lib/Command/CommandClear.svelte";
import CommandNotFound from "$lib/Command/CommandNotFound.svelte";
import CommandHelp from "./Command/CommandHelp.svelte";
import CommandDate from "./Command/CommandDate.svelte";
import CommandDateHelp from "./Command/CommandDateHelp.svelte";
import CommandClearHelp from "./Command/CommandClearHelp.svelte";
import CommandHelpHelp from "./Command/CommandHelpHelp.svelte";
import CommandCatHelp from "./Command/CommandCatHelp.svelte";
import CommandLsHelp from "./Command/CommandLsHelp.svelte";
import CommandCat from "./Command/CommandCat.svelte";
import CommandLs from "./Command/CommandLs.svelte";
import CommandWhoami from "./Command/CommandWhoami.svelte";
import CommandWhoamiHelp from "./Command/CommandWhoamiHelp.svelte";
import { fs } from "./fs";

export const cmnds = {
    "date": { cmnd: CommandDate, help: CommandDateHelp },
    "time": { cmnd: CommandDate, help: CommandDateHelp },
    "clock": { cmnd: CommandDate, help: CommandDateHelp },

    "ls": { cmnd: CommandLs, help: CommandLsHelp },
    "list": { cmnd: CommandLs, help: CommandLsHelp },

    "cat": { cmnd: CommandCat, help: CommandCatHelp },
    "read": { cmnd: CommandCat, help: CommandCatHelp },

    "help": { cmnd: CommandHelp, help: CommandHelpHelp },

    "clear": { cmnd: CommandClear, help: CommandClearHelp },

    "whoami": { cmnd: CommandWhoami, help: CommandWhoamiHelp }
}

export const shell = {
    exec: (arg0: string): ComponentType => {
        const cmnd = arg0 as keyof typeof cmnds;

        return cmnd in cmnds ? cmnds[cmnd].cmnd : CommandNotFound;
    },

    help: (arg1: string): ComponentType => {
        const cmnd = arg1 as keyof typeof cmnds;

        return cmnd in cmnds ? cmnds[cmnd].help : CommandNotFound;
    },

    auto: async (args: string[]): Promise<string[]> => {
        switch (args[0]) {
            case "cat":
            case "read":
                let posts = await fs.posts()

                return [
                    args[0],
                    posts
                        .map(post => post.slug)
                        .sort((a, b) => a > b ? 1 : -1)
                        .filter(post => post.startsWith(args[1]))[0]
                ]
            case "help":
                return [
                    args[0],
                    Object.keys(cmnds)
                        .sort((a, b) => a > b ? 1 : -1)
                        .filter(cmnd => cmnd.startsWith(args[1]))[0]
                ];
            default:
                return [
                    Object.keys(cmnds)
                        .sort((a, b) => a > b ? 1 : -1)
                        .filter(cmnd => cmnd.startsWith(args[0]))[0]
                ];
        }
    },
}

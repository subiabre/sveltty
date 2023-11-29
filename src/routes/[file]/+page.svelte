<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { page } from "$app/stores";
    import CommandCat from "$lib/Command/CommandCat.svelte";
    import CommandPrompt from "$lib/Command/CommandPrompt.svelte";
    import { stdin } from "$lib/stdin";
    import { stdout } from "$lib/stdout";

    afterNavigate(() => {
        stdin.set({ input: [`cat ${$page.params.file}`], index: 0 });
        stdin.send();

        if (
            $stdout.length > 0 &&
            $stdout[$stdout.length - 1].props.args[0] === "cat" &&
            $stdout[$stdout.length - 1].props.args[1] === $page.params.file
        ) {
            return;
        }

        stdout.write(CommandPrompt, { args: ["cat", $page.params.file] });
        stdout.write(CommandCat, { args: ["cat", $page.params.file] });
    });
</script>

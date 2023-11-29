<script lang="ts">
    import TerminalPrompt from "$lib/Terminal/TerminalPrompt.svelte";

    export let args: string[];
</script>

<TerminalPrompt>
    {args.join(" ")}
</TerminalPrompt>

<script lang="ts">
    import MessageWelcome from "$lib/Message/MessageWelcome.svelte";
    import { stdout } from "$lib/stdout";
    import { onMount } from "svelte";

    onMount(() => stdout.write(MessageWelcome));
</script>

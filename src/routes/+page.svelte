<script lang="ts">
    import MessageWelcome from "$lib/Message/MessageWelcome.svelte";
    import { stdout } from "$lib/stdout";

    stdout.write(MessageWelcome);
</script>
<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import MessageWelcome from "$lib/Message/MessageWelcome.svelte";
    import { stdin } from "$lib/stdin";
    import { stdout } from "$lib/stdout";

    afterNavigate(() => {
        if ($stdin.input.length < 2) {
            stdout.write(MessageWelcome);
        }
    });
</script>

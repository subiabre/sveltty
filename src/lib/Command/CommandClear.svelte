<script lang="ts">
    import { goto } from "$app/navigation";
    import { stdout } from "$lib/stdout";
    import { onMount } from "svelte";

    onMount(() => {
        stdout.clear();

        goto('/');
    });
</script>

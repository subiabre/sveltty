<script lang="ts">
    import { stdout } from "$lib/stdout";
    import { onMount } from "svelte";

    onMount(() => {
        stdout.clear();
    });
</script>

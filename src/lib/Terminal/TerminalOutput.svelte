<script lang="ts">
    import type { ComponentType } from "svelte";

    export let values: {
        output: ComponentType;
        props?: any;
    }[] = [];
</script>

{#each values as value}
    <svelte:component this={value.output} {...value.props} />
{/each}

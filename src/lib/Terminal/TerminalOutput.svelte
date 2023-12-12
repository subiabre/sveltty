<script lang="ts">
    import type { ComponentType } from "svelte";

    export let values: {
        output: ComponentType;
        props?: any;
    }[] = [];
</script>

{#each values as value}
    <div class="output">
        <svelte:component this={value.output} {...value.props} />
    </div>
{/each}

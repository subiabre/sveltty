<script lang="ts">
    import { afterUpdate, createEventDispatcher, type ComponentType } from "svelte";

    export let values: {
        output: ComponentType;
        props?: any;
    }[] = [];

    const dispatch = createEventDispatcher();

    afterUpdate(() => {
        dispatch("update");
    });
</script>

{#each values as value}
    <div class="output">
        <svelte:component this={value.output} {...value.props} />
    </div>
{/each}

<script lang="ts">
    import { afterUpdate, createEventDispatcher, type ComponentType } from "svelte";

    export let values: {
        component: ComponentType;
        args?: any;
    }[] = [];

    const dispatch = createEventDispatcher();

    afterUpdate(() => {
        dispatch("update");
    });
</script>

{#each values as value}
    <div class="output">
        <svelte:component this={value.component} args={[...value.args]} />
    </div>
{/each}

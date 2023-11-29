<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    export let meta: any;
    export let body: any;

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("mount");
    });
</script>

<article class="md">
    {#if meta}
        <header>
            <h1>
                <span>{meta.title}</span>
            </h1>

            <dl>
                {#each Object.entries(meta) as data}
                    <dt>{data[0]}</dt>
                    <dd>{data[1]}</dd>
                {/each}
            </dl>
        </header>        
    {/if}

    <svelte:component this={body} />
</article>
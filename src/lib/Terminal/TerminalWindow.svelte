<script lang="ts">
    let div: HTMLDivElement;
    let divScroll: number = 0;

    export function scroll() {
        if (typeof div === "undefined") return;

        setTimeout(() => {
            div.scroll({
                top: divScroll,
                behavior: "smooth",
            });
        }, 100);

        setTimeout(() => {
            divScroll = div.scrollHeight;
        }, 200);
    }
</script>

<div bind:this={div}>
    <slot />
</div>

<style>
    div {
        height: calc(100% - 2em);
        max-height: calc(100dvh - 2em);

        padding: 1em;

        overflow-y: scroll;
    }
</style>

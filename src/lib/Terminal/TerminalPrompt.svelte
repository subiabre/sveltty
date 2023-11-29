<script lang="ts">
    export let user: string = "guest";
    export let host: string = "sveltty";
    export let path: string = "/app";
</script>

<div class="prompt">
    <div class="prompt-code">
        <code>{user}@{host}</code>:<strong>{path}</strong>$&nbsp;
    </div>
    <div class="prompt-slot">
        <slot />
    </div>
</div>

<style>
    .prompt {
        display: flex;
    }

    .prompt-slot {
        flex-grow: 1;
    }
</style>

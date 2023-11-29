<script lang="ts">
    export let user: string = "guest";
    export let host: string = "sveltty";
    export let path: string = "/app";
</script>

<div class="prompt" tabindex="-1">
    <div class="prompt-data">
        <code>{user}@{host}</code>:<cli-info>{path}</cli-info>$
    </div>
    <slot />
</div>

<style>
    .prompt {
        position: relative;

        padding: 1rem 0;

        overflow-x: hidden;
    }

    .prompt-data {
        display: inline-block;
    }
</style>

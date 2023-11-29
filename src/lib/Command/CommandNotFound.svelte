<script lang="ts">
    export let args: string[];
</script>

<article>
    <p>
        <cli-danger>ERROR</cli-danger>: Command '<cli-alert>{args[0]}</cli-alert>' is not a valid
        command.
    </p>
    <p>
        Type <code>help</code> to learn about the available commands.
    </p>
</article>

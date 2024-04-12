<script lang="ts">
    import { version } from "$app/environment";

    const semver = getSemver();
    const build = getBuild();
    const login = getLastLogin();

    function getSemver(): string {
        const date = new Date();

        date.setTime(new Number(version).valueOf());

        const minor = date.getMonth();

        const major = Math.abs(
            new Number(date.getFullYear().toString().substr(-2)).valueOf() - 25,
        );

        const patch =
            date.getDate() *
            new Number(
                date.getMonth().toString().split("").reverse().join(""),
            ).valueOf();

        return `${major}.${minor}.${patch}`;
    }

    function getBuild(): string {
        return new Number(version).toString(16);
    }

    function getLastLogin(): string {
        if (typeof localStorage === 'undefined') {
            return '';
        }

        const key = "lastlogin";
        const val = localStorage.getItem(key);

        localStorage.setItem(key, new Date().getTime().toString());
        if (!val) {
            return getLastLogin();
        }

        const date = new Date();
        date.setTime(new Number(val).valueOf());

        return date.toLocaleString();
    }
</script>

<article>
    <p>Sveltty {semver}, build {build}.</p>
    <p>
        Sveltty is free, open-source software; the exact distribution terms are
        described in the LICENSE file included with the source files of this
        Sveltty instance.
    </p>
    <p>
        Sveltty comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
        applicable law.
    </p>
    <p>
        Last login: {login}
    </p>
    <p>Type <code>help</code> to get started.</p>
</article>

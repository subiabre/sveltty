import { fs } from "$lib/fs"

export const load = async() => {
    const posts = await fs.posts();

    return { posts };
}

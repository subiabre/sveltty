export const fs = {
    posts: async (): Promise<{ data: any, slug: string }[]> => {
        const posts = Object.entries(
            import.meta.glob("/src/posts/*.md"),
        ).reverse();

        return await Promise.all(
            posts.map(async ([path, value]) => {
                return {
                    data: await value(),
                    slug: path.slice(11),
                };
            }),
        );
    }
}

export const fs = {
    posts: async (): Promise<{ meta: any, slug: string }[]> => {
        const posts = Object.entries(
            import.meta.glob("/src/posts/*.md"),
        ).reverse();

        return await Promise.all(
            posts.map(async ([path, value]) => {
                const post = await value() as { metadata: any };

                return {
                    meta: {
                        title: post.metadata.title,
                        date: new Date(post.metadata.date).toISOString().split("T")[0]
                    },
                    slug: path.slice(11),
                };
            }),
        );
    }
}

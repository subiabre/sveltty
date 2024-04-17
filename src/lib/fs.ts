export interface Post {
    content: any,
    meta: {
        title: string,
        date: string,
    },
    file: {
        slug: string,
        file: string,
        path: string
    }
}

function getPostMeta(content: any): { title: string, date: string } {
    return {
        title: content.metadata.title,
        date: new Date(content.metadata.date).toISOString().split("T")[0]
    }
}

export const fs = {
    post: async (file: string): Promise<Post> => {
        const path = `/src/posts/${file}`;
        const content = await import(path);

        return { content, meta: getPostMeta(content), file: { slug: path.slice(11, -3), file, path } };
    },
    posts: async (): Promise<Post[]> => {
        const posts = Object.entries(
            import.meta.glob("/src/posts/*.md"),
        ).reverse();

        return await Promise.all(
            posts.map(async ([path, value]) => {
                const content = await value() as { metadata: any };

                return {
                    content,
                    meta: getPostMeta(content),
                    file: {
                        slug: path.slice(11, -3),
                        file: path.slice(11),
                        path
                    }
                };
            }),
        );
    }
}

export type User = {
    image: {
        png: string,
        webp: string
    },
    username: string
}

export type Comment = {
    id: number,
    content: string,
    createdAt: string
    score: number,
    user: User,
    reply: (Omit<Comment, 'reply'> & { replyTo: string })[]
}

export type ApiResponse = {
    currentUser: User,
    comments: Comment[]
}
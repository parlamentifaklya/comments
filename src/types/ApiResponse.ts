export type User = {
    image: {
        png: string,
        webp: string
    },
    username: string
}

export interface Reply extends Omit<Comment, 'reply'> {
    replyTo: string;
}

export type Comment = {
    id: number,
    content: string,
    createdAt: string
    score: number,
    user: User,
    replies: Reply[]
}

export type ApiResponse = {
    currentUser: User,
    comments: Comment[]
}
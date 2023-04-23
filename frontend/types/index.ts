export interface User{
    username: string;
    email: string;
    password: string;
    id: number;
}

export interface Task{
    id: number;
    title: string;
    description: string;
    deadline: Date;
    userId: number;
}

export interface Milestone{
    id: number;
    title: string;
    description: string;
    deadline: Date;
    taskId: number;
}

export interface Profile{
    id: number;
    name: string;
    biography: string;
}
export class Task{
    readonly id?: number;
    readonly title: string;
    readonly description: string;
    readonly deadline: Date;

    constructor( task: { id?: number, title: string, description: string, deadline: Date } ) {
        this.id = task.id;
        this.title = task.title;
        this.description = task.description;
        this.deadline = task.deadline;
    }
}
export class Task{
    readonly id?: number;
    readonly title: string;
    readonly description: string;
    readonly deadline: Date;
    readonly userId: number;

    constructor( task: { id?: number, title: string, description: string, deadline: Date, userId: number } ) {
        this.id = task.id;
        this.title = task.title;
        this.description = task.description;
        this.deadline = task.deadline;
        this.userId = task.userId;
    }

    static create( {id, title, description, deadline, userId}): Task {
        return new Task({id, title, description, deadline, userId});
    }
}
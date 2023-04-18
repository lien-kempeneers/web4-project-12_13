export class Milestone {
    readonly id?: number;
    readonly title: string;
    readonly description: string;
    readonly deadline: Date;
    readonly taskId: number;

    constructor( milestone: { id?: number, title: string, description: string, deadline: Date, taskId: number } ) {
        this.id = milestone.id;
        this.title = milestone.title;
        this.description = milestone.description;
        this.deadline = milestone.deadline;
        this.taskId = milestone.taskId;
    }

    static create( {id, title, description, deadline, taskId}): Milestone {
        return new Milestone({id, title, description, deadline, taskId});
    }
}
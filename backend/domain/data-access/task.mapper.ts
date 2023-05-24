import { Task } from "../model/task";
import { Task as TaskPrisma} from "@prisma/client";

export const mapToTasks = (prismaTasks): Task[] => {
    let tasks = [];
    for(let prismaTask of prismaTasks){
        tasks.push(mapToTask(prismaTask))
    }
    return tasks;
}

export const mapToTask = ({
    id,
    title,
    description, 
    deadline,
    userId,
}: TaskPrisma)
: Task =>
new Task({
    id,
    title,
    description,
    deadline,
    userId
}
)

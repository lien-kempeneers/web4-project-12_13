import { Milestone } from "../model/milestone";
import { Milestone as milestonePrisma} from "@prisma/client";

export const mapToMilestones = (milestonePrisma): Milestone[] => {
    let milestones = [];
    for(let prismaMilestone of milestonePrisma){
        milestones.push(mapToMilestone(prismaMilestone))
    }
    return milestones;
}

export const mapToMilestone = ({
    id,
    title,
    description,
    deadline,
    taskId,
}: milestonePrisma)
: Milestone =>
new Milestone({
    id,
    title,
    description,
    deadline,
    taskId
}
)

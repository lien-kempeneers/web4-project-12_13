import { User } from "../model/user";
import { User as UserPrisma} from "@prisma/client";

export const mapToUsers = (prismaUsers): User[] => {
    let users = [];
    for(let prismaUser of prismaUsers){
        users.push(mapToUser(prismaUser))
    }
    return users;
}

export const mapToUser = ({
    username,
    email,
    password,
    id
}: UserPrisma)
: User =>
new User({
    username,
    email,
    password,
    id
}
)

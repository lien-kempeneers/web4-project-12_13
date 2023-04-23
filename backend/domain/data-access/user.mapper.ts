import { User } from "../model/user";
import { User as UserPrisma} from "@prisma/client";

export const mapToUsers = (prismaUsers): User[] => {
    let users = [];
    for(let prismaUser of prismaUsers){
        users.push(mapToUsers(prismaUser))
    }
    return users;
}

export const mapToUser = ({
    id,
    username,
    email,
    password,
}: UserPrisma)
: User =>
new User({
    id,
    username,
    email,
    password
}
)

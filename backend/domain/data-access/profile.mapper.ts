import { Profile } from "../model/profile";
import { Profile as ProfilePrisma} from "@prisma/client";

export const mapToProfiles = (prismaProfiles): Profile[] => {
    let profiles = [];
    for(let prismaProfile of prismaProfiles){
        profiles.push(mapToProfile(prismaProfile))
    }
    return profiles;
}

export const mapToProfile = ({
    id,
    name,
    biography,
}: ProfilePrisma)
: Profile =>
new Profile({
    id,
    name,
    biography
}
)

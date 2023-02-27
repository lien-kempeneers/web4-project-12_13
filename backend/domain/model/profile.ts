export class Profile {
    readonly id: number;
    readonly name: string;
    readonly biography: string;

    constructor( profile: { id: number, name: string, biography: string } ) {
        this.id = profile.id;
        this.name = profile.name;
        this.biography = profile.biography;
    }
}
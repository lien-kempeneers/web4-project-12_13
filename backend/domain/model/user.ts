export class User {    
    readonly id?: number;
    readonly email: string;
    readonly password: string;

    constructor( user: { id?: number, email: string, password: string } ) {
        this.id = user.id;
        this.email = user.email;
        this.password = user.password;
    }

    static create( {id, email, password}): User {
        return new User({id, email, password});
    }

}

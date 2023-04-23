export class User {    
    readonly id?: number;
    readonly username: string;
    readonly email: string;
    readonly password: string;

    constructor( user: { id?: number, username: string, email: string, password: string } ) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
    }

    static create( {id, username, email, password}): User {
        return new User({id, username, email, password});
    }

}

export class User {    
    readonly email: string;
    readonly password: string;

    constructor( user: { email: string, password: string } ) {
        this.email = user.email;
        this.password = user.password;
    }
}

import UserService from "./UserService";

const logIn = (email: string, password: string) => {
    //TODO: actually log in on backend, encrypt before send
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"email":email, "password":password})
    }).then((response)=>{
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
    }).then((data) =>{
        console.log(data)
        sessionStorage.setItem('token', data.data.token);
        sessionStorage.setItem("username",data.data.username)
    })
}


const LoginService= {
    logIn
}
export default LoginService;
import UserService from "./UserService";

const logIn = (email: string, password: string) => {
    //TODO: actually log in on backend, encrypt before send
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/user/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"email":email, "password":password})
    }).then(async(response)=>{
        if (!response.ok) {
            return Error(response.statusText);
        }
        const json = await response.json()
        sessionStorage.setItem('token', json.data.token);
        sessionStorage.setItem("username",json.data.username)
    })
}


const LoginService= {
    logIn
}
export default LoginService;
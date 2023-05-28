const logIn = (username: string, password: string) => {
    //TODO: actually log in on backend, encrypt before send
    sessionStorage.setItem('token', username+password);
    console.log(sessionStorage);
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/login', {
        method: 'GET'
    })
}


const LoginService= {
    logIn
}
export default LoginService;
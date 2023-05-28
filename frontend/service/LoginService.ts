const logIn = (username: string, password: string) => {
    //TODO: actually log in on backend, encrypt before send
    localStorage.setItem('token', username+password);
    console.log(localStorage);
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/login', {
        method: 'GET'
    })
}


const LoginService= {
    logIn
}
export default LoginService;
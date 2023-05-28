import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
    const { push } = useRouter();

    useEffect(() => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        push('/users');
    }, [push]);

    return <></>;
}

export default Logout;
const FetchReg = (email: string, password1: string) => {

    fetch('https://ruprogrammer.ru/api/users/register',
        {
            method: 'POST',
            body: JSON.stringify({
                Email: email,
                Password: password1
            });
        });
};
export default FetchReg
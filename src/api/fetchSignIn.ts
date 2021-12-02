export const fetchSignin = (email: string, password: string) => fetch('https://ruprogrammer.ru/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
        Email: email,
        Password: password
    })
});

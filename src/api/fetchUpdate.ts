export const fetchUpdate = (id: number) => fetch('https://ruprogrammer.ru/api/RestfullTest/',
    {
        method: 'PUT',
        body: JSON.stringify({
            Name: 'Первый элемент'
        })
    }
);
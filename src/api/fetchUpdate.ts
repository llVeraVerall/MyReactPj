export const fetchList = () => fetch('https://ruprogrammer.ru/api/RestfullTest/',
    {
        method: 'PUT',
        body: JSON.stringify({
            Id: 1,
            Name: 'Первый элемент'
        })
    }
);
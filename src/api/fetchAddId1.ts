export const fetchList = () => fetch('https://ruprogrammer.ru/api/RestfullTest/',
    {
        method: 'POST',
        body: JSON.stringify({
            Id: 1,
            Name: 'Первый элемент'
        })
    }
);
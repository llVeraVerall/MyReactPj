export const fetchUpdate = (id: number) => fetch('https://ruprogrammer.ru/api/RestfullTest/' +id,
    {
        method: 'PUT',
        body: JSON.stringify({
            Name: 'Первый элемент'
        })
    }
);
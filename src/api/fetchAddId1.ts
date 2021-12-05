export const fetchAddId1 = ( id: number ) => fetch('https://ruprogrammer.ru/api/RestfullTest/',
    {
        method: 'POST',
        body: JSON.stringify({
            Name: 'Первый элемент',
            ID: id
        })
    }
);
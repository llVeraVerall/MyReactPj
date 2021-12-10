export const fetchDeleteEl = (id: number) => fetch('https://ruprogrammer.ru/api/RestfullTest/' +id,
    {
        method: 'DELETE'
    }
);
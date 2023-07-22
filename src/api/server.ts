const token="699a5d85ed7e737b95c7aaee2c720bdc7579549dd865e3ed"

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://library-flask.onrender.com/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

    create: async (data:any={}) => { 
        const response = await fetch(`https://library-flask.onrender.com/api/books`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }
        return await response.json()
    },

    update: async (id:string, data: any = {}) => { 
        const response = await fetch(`https://library-flask.onrender.com/api/books/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to update data from the server')
        }
        return
    },

    delete: async (id:string) => { 
        const response = await fetch(`https://library-flask.onrender.com/api/books/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to delete data from the server')
        }
        return
    },

}

const productos = [
    {
        id: 1,
        name: 'Mesa',
        description: 'Sirve para apollar cosas',
        Stock: 3
    },
    {
        id: 2,
        name: 'Silla',
        description: 'Sirve para sentarse',
        Stock: 4
    },
    {
        id: 3,
        name: 'Vaso',
        description: 'Sirve para tomar líquidos',
        Stock: 12
    }
]

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
    }, 5000);
})

promise.then(res => {
    console.log(res);
})
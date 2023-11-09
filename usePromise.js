const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operação 1 resolvida!");
    }, 15000);
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operação 2 resolvida!");
    }, 10000);
});

async function doSomething() {
    const start = performance.now();
    
    await myPromise1.then((result) => {
        console.log(result);
    });
    
    await myPromise2.then((result) => {
        console.log(result);
    });
    
    const end = performance.now();
    const executionTime = end - start;
    console.log(`Tempo de execução sem otimização: ${executionTime}`);
}

async function doSomethingWithPromiseAll() {
    const start = performance.now();

    await Promise.all([myPromise1, myPromise2]).then((results) => {
        console.log(results);
    });

    const end = performance.now();
    const executionTime = end - start;
    console.log(`Tempo de execução com otimização: ${executionTime}`);
}

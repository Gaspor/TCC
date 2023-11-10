const myPromise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Operação 1 resolvida!");
        resolve("Operação 1 concluída");
    }, 5000);
});

const myPromise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Operação 2 resolvida!");
        resolve("Operação 2 concluída");
    }, 1000);
});

async function doSomething() {
    const start = performance.now();
    
    const result1 = await myPromise1();
    console.log(result1);
    
    const result2 = await myPromise2();
    console.log(result2);
    
    const end = performance.now();
    const executionTime = end - start;
    console.log(`Tempo de execução sem otimização: ${executionTime}`);
}

async function doSomethingWithPromiseAll() {
    const start = performance.now();

    const [result1, result2] = await Promise.all([myPromise1(), myPromise2()]);
    console.log(result1);
    console.log(result2);

    const end = performance.now();
    const executionTime = end - start;
    console.log(`Tempo de execução com otimização: ${executionTime}`);
}


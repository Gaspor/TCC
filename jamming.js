const TOTAL_ELEMENTS = 10000000;
let elements = [];

const start = performance.now();

for (i = 0; i < TOTAL_ELEMENTS; i++) {
    elements.push({name: `Elemento ${i}`});
}

/* Código que não interaje com elements */

for (i = 0; i < TOTAL_ELEMENTS; i++) {
    elements[i].value = i * 10;
}

const end = performance.now();
const executionTime = end - start;
console.log(`Tempo de execução: ${executionTime} milisegundos`);
console.log(elements);

let elementsOptimized = [];

const startOptimized = performance.now();

for (i = 0; i < TOTAL_ELEMENTS; i++) {
    elementsOptimized.push({
        name: `Elemento ${i}`,
        value: (i * 10)
    });
}

/* Código que não interaje com elements */

const endOptimized = performance.now();
const executionTimeOptimized = endOptimized - startOptimized;
console.log(`Tempo de execução otimizado: ${executionTimeOptimized} milisegundos`);
console.log(elementsOptimized);

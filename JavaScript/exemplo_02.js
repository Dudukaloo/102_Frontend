/* //Declarar e inicializar a estrutura
let numeros = [1, 2, 3]
//Mostrar e adicionar no fim
console.log (numeros);
numeros.push (6);
console.log (numeros);
//Mostrar e remover no Início
numeros.shift (1);
console.log (numeros);
//Mostrar e adicionar no Início
numeros.unshift (-3);
console.log (numeros);
//Imprimir um item específico
console.log ("Mostrando: "+ numeros[3]); */

//===============================================================================================
// Array de marca de carros

let garage = ["BYD", "Tesla", "Dodge", "Audi", "Lamborghini", "Jaguar", "Subaru", "Pagani", "Mazda"];

console.log (garage[6]);

garage.push ("Toyota");

/* console.log (garage)
console.log (garage[9]) */
console.log ("Tamanho do Array: "+garage.length);

for (let i = 0; i < garage.length; i++) {
    console.log ("Carro nº %d:", i+1);
    console.log ("Marca %a", garage[i])
}

for (carro in garage){
    console.log (carro);
}
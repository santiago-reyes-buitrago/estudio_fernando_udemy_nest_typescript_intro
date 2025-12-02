export let name: string = "Santiago";
export const age:number = 35;
export const isValid:boolean = false;

// name = true;
name = "Melissa"

export const templateString = `Esto es un string multilinea
que puede tener "" '' y inyectar valores ${name} + \$${1+1}
numeros ${age}
booleanos ${isValid}`;

console.log(templateString);
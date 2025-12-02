class NewPokemon {
    constructor(
        public readonly id:number,
        public name:string,
    ){}
    scream(){
        console.log(`NO!!`)
    }

    speak(){
        console.log(`CALLADO!`)
    }
}


const myDecorator = () => {
    return (target: Function) => {
        // console.log(target);
        return NewPokemon;
    }
}

@myDecorator()
export class Pokemon {
    constructor(
        public readonly id:number,
        public name:string,
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}!!`)
    }

    speak(){
        console.log(`${this.name} , ${this.name}!`)
    }
}


export const charmander = new Pokemon(4,'Charmander');

charmander.scream();
charmander.speak();
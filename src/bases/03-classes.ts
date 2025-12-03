import axios from 'axios';
import {Move, pokeSchema} from "../interfaces/PokeResponse.ts";
// Forma completa de la clase
// export class Pokemon {
//     public id: number;
//     public name: string;
//
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//         console.log('Contrustor Inicializado')
//     }
// }

//Forma abreviada
// export class Pokemon {
//     constructor(
//         public readonly id:number,
//         public name:string,
//     ) {}
// }



export class Pokemon {
    get imageUrl():string{
        return `https://pokemon.com/${this.id}.jpg`;
    }
    constructor(
        public readonly id:number,
        public name:string,
    ) {}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!!`);
    }

    speak(){
        console.log(`${this.name} ${this.name}`);
    }

    async getMoves(): Promise<Move[]>{
        const {data} = await axios.get<pokeSchema>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data);
        return data.moves;
    }
}

export const charmander = new Pokemon(4,'Charmander');
// charmander.id=1;
// charmander.name= 'Charmandersss';

// console.log(charmander.imageUrl);

// console.log(charmander.getMoves().then(r=>console.log(r)));
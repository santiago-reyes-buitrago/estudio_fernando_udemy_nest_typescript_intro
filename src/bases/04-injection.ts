import {Move, pokeSchema} from "../interfaces/PokeResponse.ts";
import {HttpAdapter, pokeapiAdapter, pokeApiFetchAdapter} from "../api/pokeapi.adapter.ts";

export class Pokemon {
    get imageUrl():string{
        return `https://pokemon.com/${this.id}.jpg`;
    }
    constructor(
        public readonly id:number,
        public name:string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter
    ) {}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!!`);
    }

    speak(){
        console.log(`${this.name} ${this.name}`);
    }

    async getMoves(): Promise<Move[]>{
        const data = await this.http.get<pokeSchema>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(data.moves[0].move.name);
        return data.moves;
    }
}
const pokeApiAxios = new pokeapiAdapter();
const pokeApiFetch = new pokeApiFetchAdapter();

export const charmander = new Pokemon(4,'Charmander',pokeApiAxios);

charmander.getMoves()
class Pokemon{

    #name = '';
    #type = '';
    #evo  = [];

    constructor(name, type, evo){
        this.#name= name;
        this.#type= type;
        this.#evo= evo;
    }

    set name(name){
        this.#name=name;
    }

    set type(type){
        this.#type=type;
    }

    set name(evo){
        this.#evo=evo;
    }

    get name(){
        return this.#name;
    }

    get type(){
        return this.#type;
    }   

    get evo(){
        return this.#evo;
    }

    attack(){
        return `${this.name}, esta atacando </br>`;
    }

    evolve(evolution = 0){
        const EVOLVE =this.#evo[evolution] || '';
        let message = 'No puede evolucionar</br>';
        if(EVOLVE){
            message = `${this.#name} esta evolucionando a ${EVOLVE}</br>`;
            this.#name=EVOLVE;
        }
        return message;
    }
    
}

const Charmander = new Pokemon('Charmander', 'Fire', ['Charmeleon', 'Charizard']);

const Squirtle = new Pokemon('Squirtle', 'Water',['Wartortle', 'Blastoise']);

document.write((`${Charmander.name} es de tipo ${Charmander.type}</br>`));
document.write(Charmander.attack());
document.write(Charmander.evolve(0));
document.write((`${Charmander.name} es de tipo ${Charmander.type}</br>`));

document.write((`${Squirtle.name} es de tipo ${Squirtle.type}</br>`));
document.write(Squirtle.attack());
document.write(Squirtle.evolve(0));
document.write((`${Squirtle.name} es de tipo ${Squirtle.type}</br>`));

class Typefire extends Pokemon{
    constructor(name, evo){
        super(name,'fire',evo);
    }
    message(){
        return `</br>Hola, soy ${this.name} y soy de tipo Fuego</br>`;
    }
}
const charmander = new Typefire('Charmander', ['Charmeleon', 'Charizard']);
document.write(charmander.message());
class Pokemon{

    name = '';
    type = '';
    evo  = [];

    constructor(name, type, evo){
        this.name= name;
        this.type= type;
        this.evo= evo;
    }

    attack(){
        return `${this.name}, esta atacando </br>`;
    }

    evolve(evolution = 0){
        const EVOLVE =this.evo[evolution] || '';
        let message = 'No puede evolucionar</br>';
        if(EVOLVE){
            message = `${this.name} esta evolucionando a ${EVOLVE}</br>`;
            this.name=EVOLVE;
        }
        return message;
    }
    
}

const Charmander = new Pokemon('Charmander', 'Fire', ['Charmeleon', 'Charizard']);

const Squirtle = new Pokemon('Squirtle', 'Water',['Wartortle', 'Blastoise']);

document.write((`${Charmander.name} es de tipo ${Charmander.type}</br>`));
document.write(Charmander.attack());
document.write(Charmander.evolve(0));

document.write((`${Squirtle.name} es de tipo ${Squirtle.type}</br>`));
document.write(Squirtle.attack());
document.write(Squirtle.evolve(0));
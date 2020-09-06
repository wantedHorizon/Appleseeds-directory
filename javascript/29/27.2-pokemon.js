function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const pk1 = new Pokemon("Pikachu", "electricity", ['attack 1', 'attack 2']);
const pk2 = new Pokemon("Charizard", "fire", ['attack 3', 'attack 4']);
const pk3 = new Pokemon("Bulbasaur", "water", ['attack 5', 'attack 6']);


Pokemon.prototype.callPokemon = function () {
    return `I choose you, ${this.name}`;
}

Pokemon.prototype.attack = function (attackNumber) {
    if (this.attackList[attackNumber]) {
        return `${this.name} used ${this.attackList[attackNumber]}`;
    }

    return `This Pokemon doesn't support attack ${attackNumber}`;
}

//callPokemon
console.log(pk1.callPokemon());
console.log(pk2.callPokemon());
console.log(pk3.callPokemon());
console.log('--------------------------------------------------');

//attacks
console.log(pk1.attack(0)); //Pikachu used attack 1
console.log(pk1.attack(1)); //Pikachu used attack 2
console.log(pk1.attack(2)); //This Pokemon doesn't support attack 2
console.log('--------------------------------------------------');

console.log(pk2.attack(0)); //Charizard used attack 1
console.log(pk2.attack(1)); //Charizard used attack 2
console.log(pk2.attack(2)); //This Pokemon doesn't support attack 2
console.log('--------------------------------------------------');

console.log(pk3.attack(0)); //Bulbasaur used attack 1
console.log(pk3.attack(1)); //Bulbasaur used attack 2
console.log(pk3.attack(2)); //This Pokemon doesn't support attack 2
function vieillir(personne) {
	return personne.age++;
}

let alice = { nom: "Alice", age: 30, ville: "Paris" };

vieillir(alice);

console.log(alice); // { nom: 'Alice', age: 31, ville: 'Paris' }

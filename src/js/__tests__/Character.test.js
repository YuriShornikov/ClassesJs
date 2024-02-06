import Character from "../class/Character";

describe('Character class', () => {
    test('correct of characters', () => {
        const def = new Character('Gladiator', 'Swordsman');
        expect(def).toEqual({
            name: 'Gladiator',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: undefined,
            defence: undefined,
        });
    });
    test('correct error of name', () => {
        expect(() => new Character('A', 'Bowman')).toThrow('Invaled name');
    });
    test('correct error of type', () => {
        expect(() => new Character('Legolas', 'Assasin')).toThrow('Invalid character type');
    })
});
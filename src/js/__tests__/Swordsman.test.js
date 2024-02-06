import Swordsman from "../class/Swordsman";

test('correct of characters', () => {
    const Aragorn = new Swordsman('Aragorn', 'Swordsman');
    expect(Aragorn).toEqual({
        name: 'Aragorn',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});
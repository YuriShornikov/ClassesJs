import Undead from "../class/Undead";

test('correct of characters', () => {
    const Skelet = new Undead('Skelet', 'Undead');
    expect(Skelet).toEqual({
        name: 'Skelet',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

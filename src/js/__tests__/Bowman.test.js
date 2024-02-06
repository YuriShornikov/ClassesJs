import Bowman from "../class/Bowman";

test('correct of characters', () => {
    const Legolas = new Bowman('Legolas', 'Bowman');
    expect(Legolas).toEqual({
        name: 'Legolas',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

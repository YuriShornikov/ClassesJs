import Magician from '../class/Magician';

test('correct of characters', () => {
    const Gandalf = new Magician('Gandalf', 'Magician');
    expect(Gandalf).toEqual({
        name: 'Gandalf',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});
import Zombie from '../class/Zombie';

test('correct of characters', () => {
    const Dead = new Zombie('Dead', 'Zombie');
    expect(Dead).toEqual({
        name: 'Dead',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});
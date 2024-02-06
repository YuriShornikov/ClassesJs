import Daemon from "../class/Daemon";

test('correct of characters', () => {
    const Lucifer = new Daemon('Lucifer', 'Daemon');
    expect(Lucifer).toEqual({
        name: 'Lucifer',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});
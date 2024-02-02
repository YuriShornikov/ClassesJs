export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Invaled name');
        }

        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Invalid character type');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        switch (type) {
            case 'Bowman':
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Swordsman':
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
            default:
                break;
        }
    }
}

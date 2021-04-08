class Paladin extends Character {
    constructor(hp = 16, mana = 160, dmg = 3, description = "powerful and defensive knight", name = "Ulder", specialL = "Healing Light", classes = "Paladin") {
        super(hp, mana, dmg, description, name, specialL);
        this.classes = classes;
        this.advanced = 4;
    };
    specialL () {
        oppressor.hp = oppressor.hp + 5;
        oppressor.mana = oppressor.mana - 40;
        console.log(`Healing light for my enemy ! `);
    }
};
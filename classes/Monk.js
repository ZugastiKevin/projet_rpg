class Monk extends Character {
    constructor(hp = 8, mana = 200, dmg = 2, description = "priest who can heal himself", name = "Moana", specialL = "Heal", classes = "Monk") {
        super(hp, mana, dmg, description, name, specialL);
        this.classes = classes;
        this.advanced = 0;
    };
    specialL () {
        if (oppressor.mana <= 24 ) {
            console.log(`I dont have enought mana !`);
            game.specialOrBasic();
        }
        else {
            oppressor.hp = oppressor.hp + 8;
            oppressor.mana = oppressor.mana - 25;
            console.log(`Heal !`);
        };
    };
};
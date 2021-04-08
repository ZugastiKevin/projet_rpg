class Assassin extends Character {
    constructor(hp = 6, mana = 20, dmg = 6, description = "cunning and deceitful", name = "Carl", specialL = "Shadow Hit", classes = "Assassin") {
        super(hp, mana, dmg, description, name, specialL);
        this.classes = classes;
        this.advanced = 7;
    };
    specialL () {
        if (oppressor.mana <= 19 ) {
            console.log(`I dont have enought mana !`);
            game.specialOrBasic();
        }
        else {
            oppressor.mana = oppressor.mana - 20;
            console.log(`Seven blow`);
        };
    };
};
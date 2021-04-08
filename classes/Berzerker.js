class Berzerker extends Character {
    constructor(hp = 8, mana = 0, dmg = 4, description = "nag with a high attack", name = "Draven", specialL = "Rage", classes = "Berzerker") {
        super(hp, mana, dmg, description, name, specialL);
        this.classes = classes;
        this.advanced = 0;
    };
    special () {
        oppressor.dmg = oppressor.dmg + 2;
        oppressor.hp = oppressor.hp - 1;
        console.log(`my strength is increasing but my health is decreasing`);
    };
};
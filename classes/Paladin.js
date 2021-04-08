class Paladin extends Character {
    constructor(hp = 16, mana = 160, dmg = 3, description = "powerful and defensive knight", name = "Ulder", classes = "Paladin") {
        super(hp, mana, dmg, description, name);
        this.classes = classes;
    };
};
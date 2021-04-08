class Berzerker extends Character {
    constructor(hp = 8, mana = 0, dmg = 4, description = "nag with a high attack", name = "Draven", classes = "Berzerker") {
        super(hp, mana, dmg, description, name);
        this.classes = classes;
    };
};
class Monk extends Character {
    constructor(hp = 8, mana = 200, dmg = 2, description = "priest who can heal himself", name = "Moana", classes = "Monk") {
        super(hp, mana, dmg, description, name);
        this.classes = classes;
    };
};
class Assassin extends Character {
    constructor(hp = 6, mana = 20, dmg = 6, description = "cunning and deceitful", name = "Carl", classes = "Assassin") {
        super(hp, mana, dmg, description, name);
        this.classes = classes;
    };
};
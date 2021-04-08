class Fighter extends Character {
    constructor(hp = 12, mana = 40, dmg = 4, description = "balanced fighter on all sides", name = "Grace", classes = "fighter") {
        super(hp, mana, dmg, description, name);
        this.classes = classes;
    };
};
class Fighter extends Character {
    constructor(hp = 12, mana = 40, dmg = 4, description = "balanced fighter on all sides", name = "Grace", specialL = "Dark vision", classes = "fighter") {
        super(hp, mana, dmg, description, name, specialL);
        this.classes = classes;
        this.advanced = 1;
    };
    specialL () {
        oppressor.mana = oppressor.mana - 20;
        console.log(`take my sword !`);
    };
};
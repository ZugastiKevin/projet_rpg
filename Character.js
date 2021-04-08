class Character {
  constructor(hp, mana, dmg, description, name, status = "playing") {
    this.hp = hp;
    this.mana = mana;
    this.dmg = dmg;
    this.description = description;
    this.name = name;
    this.status = status;
  };

  takeDamage (oppressor) {
    victim.hp = victim.hp - oppressor.dmg;
    if (victim.hp <= 0) {
      victim.status = "loser";
      victim.hp = 0;
      loser = loser + 1;
      console.log(`${victim.name} are dead !`);
      oppressor.mana = oppressor.mana + 20;
    };
  };

  dealDamage (victim) {
    return `${this.name} is attacking ${victim.name}. He deals him ${this.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left`;
  };

  stats () {
    if (this.status == "loser") {
      return `rip ${this.name}`;
    };
    return `I have: ${this.hp} life points. ${this.mana} mana points. ${this.dmg} damage points my name is ${this.name} my class is ${this.classes} and my status is ${this.status}.`;
  };
};
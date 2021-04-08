class Character {
  constructor(hp, mana, dmg, description, name, specialL, status = "playing") {
    this.hp = hp;
    this.mana = mana;
    this.dmg = dmg;
    this.description = description;
    this.name = name;
    this.special = specialL;
    this.status = status;
  };

  takeDamage (damage) {
    victim.hp = victim.hp - damage;
    if (victim.hp <= 0) {
      victim.status = "loser";
      victim.hp = 0;
      loser = loser + 1;
      console.log(`${victim.name} are dead !`);
      oppressor.mana = oppressor.mana + 20;
    };
  };

  dealDamage () {
    return `${this.name} is attacking ${victim.name}. He deals him ${this.dmg} damages. ${victim.name} got ${victim.hp} lifepoints left`;
  };

  dealSpecialDamage () {
    return `${this.name} is attacking ${victim.name}. He deals him ${oppressor.dmg + oppressor.advanced} damages with advanced attack. ${victim.name} got ${victim.hp} lifepoints left`;
  };

  stats () {
    if (this.status == "loser") {
      return `rip ${this.name}`;
    };
    return `My name is ${this.name}. I have: ${this.hp} life points. ${this.mana} mana points. ${this.dmg} damage points my special is ${this.special} my class is ${this.classes} and my status is ${this.status}.`;
  };
};
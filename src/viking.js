// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health; // is repeating this mandatory ? according to my jasmine yes but I am not sure
    this.strength = strength; // is repeating this mandatory ? according to my jasmine yes but I am not sure
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking({ name, health, strength }) {
    const oneViking = new Viking(name, health, strength);
    this.vikingArmy.push(oneViking);
  }

  addSaxon({ health, strength }) {
    const oneSaxon = new Saxon(health, strength);
    this.saxonArmy.push(oneSaxon);
  }
  vikingAttack() {
//     const oneRandomViking = new Viking(name, health, strength);
//     const aRandomSaxon = new Saxon(health, strength);
//     const recievedDamageBySaxon = aRandomSaxon.receiveDamage(
//       oneRandomViking.strength
//     );
//     if (aRandomSaxon.health === 0) {
//       this.saxonArmy.shift(aRandomSaxon);
//     }
//     return recievedDamageBySaxon;
}


saxonAttack() {}
showStatus() {}
}
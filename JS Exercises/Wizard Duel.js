class Wizard {
  #health;
  #mana;

  constructor(name, startingHealth, startingMana) {
    this.name = name;
    this.#health = startingHealth;
    this.#mana = startingMana;
    this.maxHealth = startingHealth;
    this.maxMana = startingMana;
  }

  isAlive() {
    return this.#health > 0;
  }

  getStatus() {
    return `${this.name} - Health: ${this.#health}/${this.maxHealth}, Mana: ${
      this.#mana
    }/${this.maxMana}`;
  }

  recieveDamage(amnount) {
    if (amnount <= 0) {
      this.#health += amnount;
    }
    if (this.#health < 0) {
      this.#health = 0;
    }
  }

  spendMana(cost) {
    if (cost <= this.#mana) {
      this.#mana -= cost;
      return true;
    }
    return false;
  }

  castSpell(oppent) {
    console.log("Generic wizard spell.");
  }
}

class FireWizard extends Wizard {
  constructor(name, startingHealth, startingMana) {
    super(name, startingHealth, startingMana);
  }

  castSpell(oppent) {
    const manaCost = 30;
    const damage = 40;
    if (!this.spendMana(manaCost)) {
      console.log("Not enough mana");
      return false;
    }
    oppent.recieveDamage(-damage);
    console.log(
      `${this.name} casts Fireball on ${oppent.name}, dealing ${damage} damage!`
    );
    return true;
  }
}

class IceWizard extends Wizard {
  constructor(name, startingHealth, startingMana) {
    super(name, startingHealth, startingMana);
  }
  castSpell(oppent) {
    const manaCost = 20;
    const damage = 25;
    if (!this.spendMana(manaCost)) {
      console.log("Not enough mana");
      return false;
    }
    oppent.recieveDamage(-damage);
    console.log(
      `${this.name} casts Ice Shard on ${oppent.name}, dealing ${damage} damage!`
    );
    return true;
  }
}

class Duel {
  constructor(wizardA, wizardB) {
    this.wizardA = wizardA;
    this.wizardB = wizardB;
    this.roundNumber = 1;
  }

  printRoundStatus() {
    console.log(this.wizardA.getStatus());
    console.log(this.wizardB.getStatus());
  }

  run() {
    console.log("Duel begins!");
    while (this.wizardA.isAlive() && this.wizardB.isAlive()) {
      console.log(`--- Round ${this.roundNumber} ---`);
      this.wizardA.castSpell(this.wizardB);
      if (!this.wizardB.isAlive()) {
        console.log(
          `${this.wizardB.name} has been defeated! ${this.wizardA.name} wins!`
        );
        break;
      }
      this.wizardB.castSpell(this.wizardA);
      if (!this.wizardA.isAlive()) {
        console.log(
          `${this.wizardA.name} has been defeated! ${this.wizardB.name} wins!`
        );
        break;
      }
      this.printRoundStatus();
      this.roundNumber++;
    }

    if (this.wizardA.isAlive()) {
      console.log(`Winner: ${this.wizardA.name}`);
    } else {
      console.log(`Winner: ${this.wizardB.name}`);
    }
  }
}

let wizard1 = new FireWizard("Gandalf", 100, 150);
let wizard2 = new IceWizard("Saruman", 120, 130);
let duel = new Duel(wizard1, wizard2);
duel.run();

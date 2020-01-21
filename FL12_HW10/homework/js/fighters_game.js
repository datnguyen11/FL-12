class Fighter {
  constructor({ name, damage, hp, strength, agility }) {
    let winsCounter = 0;
    let lossesCounter = 0;
    const maxHp = hp;
    return {
      getName: () => name,
      getDamage: () => damage,
      getStrength: () => strength,
      getAgility: () => agility,
      getHealth: () => hp,
      attack: defender => {
        const defResistance =
          (defender.getStrength() + defender.getAgility()) / 100;
        if (Math.random() > defResistance) {
          defender.dealDamage(damage);
          console.log(
            `${name} makes ${damage} damage to ${defender.getName()}`
          );
        } else {
          console.log(`${name} attack missed`);
        }
      },
      logCombatHistory: () => {
        console.log(
          `Name: ${name}, Wins: ${winsCounter}, Losses: ${lossesCounter}`
        );
      },
      heal: healTaken => {
        const currentHp = hp + healTaken;
        if (currentHp <= maxHp) {
          hp = currentHp;
        } else {
          hp = maxHp;
        }
      },
      dealDamage(damageTaken) {
        const currentHp = hp - damageTaken;
        if (currentHp <= 0) {
          hp = 0;
        } else {
          hp = currentHp;
        }
      },
      addWin: () => ++winsCounter,
      addLoss: () => ++lossesCounter
    };
  }
}

function battle(attacker, defender) {
  if (attacker.getHealth() === 0 || defender.getHealth() === 0) {
    const deadFighter = !attacker.getHealth()
      ? attacker.getName()
      : defender.getName();
    console.log(`${deadFighter} is dead and can't fight.`);
    return;
  }
  while (attacker.getHealth() > 0 && defender.getHealth() > 0) {
    attacker.attack(defender);
    defender.attack(attacker);
  }
  const winner =
    attacker.getHealth() > defender.getHealth() ? attacker : defender;
  const loser =
    attacker.getHealth() < defender.getHealth() ? attacker : defender;
  winner.addWin();
  loser.addLoss();
  console.log(`${winner.getName()} has won!`);
}

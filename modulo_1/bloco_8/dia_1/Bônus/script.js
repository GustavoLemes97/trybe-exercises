const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 15,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () =>
  Math.floor(Math.random() * (dragon.strength - 15) + 15);

const warriorDamage = () =>
  Math.floor(
    Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) +
      warrior.strength,
  );

const mageDamageMana = () => {
  const obj = {};
  if (mage.mana < 15 || typeof mage.mana === 'string') {
    obj.damage = 0;
    obj.mana = `Sem mana parça`;
  } else {
    (obj.damage = Math.floor(
      Math.random() * (mage.intelligence * 2 - mage.intelligence) +
        mage.intelligence,
    )),
      (obj.mana = mage.mana - 15);
  }
  return obj;
};

const turnResult = (dragDmg, warDmg, mageDmg) => {
  const drgDmg = dragDmg();
  const warrDmg = warDmg();
  const magDmg = mageDmg().damage;
  const magMana = mageDmg().mana;

  battleMembers.dragon.healthPoints -= warrDmg + magDmg;
  battleMembers.warrior.healthPoints -= drgDmg;
  battleMembers.mage.healthPoints -= drgDmg;
  battleMembers.dragon.damage = drgDmg;
  battleMembers.warrior.damage = warrDmg;
  battleMembers.mage.damage = magDmg;
  battleMembers.mage.mana = magMana;

  return battleMembers;
};

console.log(turnResult(dragonDamage, warriorDamage, mageDamageMana));


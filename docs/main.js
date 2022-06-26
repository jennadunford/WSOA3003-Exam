var brainAid = 0;
var attacker = 0;

//brainAid number identifiers
//Methylphenidate = 1
//Clobazam = 2
//SSRI = 3
//BetaBlock = 4
//Self-Care = 5

//Attacker number identifiers
//Anxiety = 1
//Depression = 2
//Trauma = 3
//Burnout = 4

var mEnergyFire = 20;
var mFireFocus = 25;
var mFireEuphor = 30;

var cRestSpirit = 30;
var cCastShadow = 20;
var cSpiritCour = 20;

var sBalanceAct = 20;
var sBanishSad = 30;
var sBanishFear = 30;

var bBlockStress = 15;
var bParryFear = 20;
var bCastAwayRestless = 20;

var scNatureGrace = 10;
var scDrinkPeace = 15;

var anxBaneOfHeart = 20;
var anxDestroyFocus = 20;
var anxOverwhTerror = 30;

var depEndlessSleep = 30;
var depBlackenSun = 25;
var depDrainEnergy = 30;

var trSoulDrain = 20;
var trTerrorStrike = 20;
var trAbandonHope = 30;

var brnCastWorthless = 20;
var brnStealSleep = 20;
var brnCauseConfusion = 30;

var multiplier = 3;

var applyMultiplier = false;

var divider = 2;

var applyDivider = false;

var medimonSelector = document.getElementById("brainAidSelector");
var medimonSelected =
  medimonSelector.options[medimonSelector.selectedIndex].value;

var brainMonsterSelector = document.getElementById("brainMonsterSelector");
var brainMonsterSelected =
  brainMonsterSelector.options[brainMonsterSelector.selectedIndex].value;

var medimonAttackSelector;
var selectedMedimonAttack;
var monsterAttackSelector;
var selectedBrainMonsterAttack;

var medimonAttackChance = 0;
var brainMonsterAttackChance = 0;

var medimonAttackString = ".";
var brainMonsterAttackString = ".";

function updateMedimonSelector() {
  medimonSelected =
    medimonSelector.options[medimonSelector.selectedIndex].value;
  console.log(medimonSelected);

  switch (parseInt(medimonSelected)) {
    case 0:
      break;
    case 1:
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.remove("hidden");
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.add("visible");

      document.getElementById("clobaZoreAttacks").classList.add("hidden");
      document.getElementById("clobaZoreAttacks").classList.remove("visible");

      document.getElementById("seratoniaGuardian").classList.add("hidden");
      document.getElementById("seratoniaGuardian").classList.remove("visible");

      document.getElementById("betaShieldMage").classList.add("hidden");
      document.getElementById("betaShieldMage").classList.remove("visible");

      document.getElementById("careFairy").classList.add("hidden");
      document.getElementById("careFairy").classList.remove("visible");

      break;
    case 2:
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.add("hidden");
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.remove("visible");

      document.getElementById("clobaZoreAttacks").classList.remove("hidden");
      document.getElementById("clobaZoreAttacks").classList.add("visible");

      document.getElementById("seratoniaGuardian").classList.add("hidden");
      document.getElementById("seratoniaGuardian").classList.remove("visible");

      document.getElementById("betaShieldMage").classList.add("hidden");
      document.getElementById("betaShieldMage").classList.remove("visible");

      document.getElementById("careFairy").classList.add("hidden");
      document.getElementById("careFairy").classList.remove("visible");
      break;
    case 3:
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.add("hidden");
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.remove("visible");

      document.getElementById("clobaZoreAttacks").classList.add("hidden");
      document.getElementById("clobaZoreAttacks").classList.remove("visible");

      document.getElementById("seratoniaGuardian").classList.remove("hidden");
      document.getElementById("seratoniaGuardian").classList.add("visible");

      document.getElementById("betaShieldMage").classList.add("hidden");
      document.getElementById("betaShieldMage").classList.remove("visible");

      document.getElementById("careFairy").classList.add("hidden");
      document.getElementById("careFairy").classList.remove("visible");
      break;
    case 4:
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.add("hidden");
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.remove("visible");

      document.getElementById("clobaZoreAttacks").classList.add("hidden");
      document.getElementById("clobaZoreAttacks").classList.remove("visible");

      document.getElementById("seratoniaGuardian").classList.add("hidden");
      document.getElementById("seratoniaGuardian").classList.remove("visible");

      document.getElementById("betaShieldMage").classList.remove("hidden");
      document.getElementById("betaShieldMage").classList.add("visible");

      document.getElementById("careFairy").classList.add("hidden");
      document.getElementById("careFairy").classList.remove("visible");
      break;
    case 5:
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.add("hidden");
      document
        .getElementById("methylpheniDragonAttacks")
        .classList.remove("visible");

      document.getElementById("clobaZoreAttacks").classList.add("hidden");
      document.getElementById("clobaZoreAttacks").classList.remove("visible");

      document.getElementById("seratoniaGuardian").classList.add("hidden");
      document.getElementById("seratoniaGuardian").classList.remove("visible");

      document.getElementById("betaShieldMage").classList.add("hidden");
      document.getElementById("betaShieldMage").classList.remove("visible");

      document.getElementById("careFairy").classList.remove("hidden");
      document.getElementById("careFairy").classList.add("visible");
      break;
  }
}

function updateMedimonAttack(attackID) {
  medimonAttackSelector = document.getElementById(attackID);
  getMedimonAttack(medimonAttackSelector);
}

function getMedimonAttack(attackList) {
  selectedMedimonAttack = attackList.options[attackList.selectedIndex].value;
  console.log(selectedMedimonAttack);
}

function updateMonsterAttack() {
  brainMonsterSelected =
    brainMonsterSelector.options[brainMonsterSelector.selectedIndex].value;
  console.log(brainMonsterSelected);

  switch (parseInt(brainMonsterSelected)) {
    case 0:
      break;
    case 1:
      document.getElementById("anxorWraith").classList.remove("hidden");
      document.getElementById("anxorWraith").classList.add("visible");

      document.getElementById("darkGhost").classList.add("hidden");
      document.getElementById("darkGhost").classList.remove("visible");

      document.getElementById("screamingBanshee").classList.add("hidden");
      document.getElementById("screamingBanshee").classList.remove("visible");

      document.getElementById("soulDrainer").classList.add("hidden");
      document.getElementById("soulDrainer").classList.remove("visible");

      break;
    case 2:
      document.getElementById("anxorWraith").classList.add("hidden");
      document.getElementById("anxorWraith").classList.remove("visible");

      document.getElementById("darkGhost").classList.remove("hidden");
      document.getElementById("darkGhost").classList.add("visible");

      document.getElementById("screamingBanshee").classList.add("hidden");
      document.getElementById("screamingBanshee").classList.remove("visible");

      document.getElementById("soulDrainer").classList.add("hidden");
      document.getElementById("soulDrainer").classList.remove("visible");

      break;
    case 3:
      document.getElementById("anxorWraith").classList.add("hidden");
      document.getElementById("anxorWraith").classList.remove("visible");

      document.getElementById("darkGhost").classList.add("hidden");
      document.getElementById("darkGhost").classList.remove("visible");

      document.getElementById("screamingBanshee").classList.remove("hidden");
      document.getElementById("screamingBanshee").classList.add("visible");

      document.getElementById("soulDrainer").classList.add("hidden");
      document.getElementById("soulDrainer").classList.remove("visible");

      break;
    case 4:
      document.getElementById("anxorWraith").classList.add("hidden");
      document.getElementById("anxorWraith").classList.remove("visible");

      document.getElementById("darkGhost").classList.add("hidden");
      document.getElementById("darkGhost").classList.remove("visible");

      document.getElementById("screamingBanshee").classList.add("hidden");
      document.getElementById("screamingBanshee").classList.remove("visible");

      document.getElementById("soulDrainer").classList.remove("hidden");
      document.getElementById("soulDrainer").classList.add("visible");

      break;
  }
}

function updateBrainMonsterAttack(attackID) {
  monsterAttackSelector = document.getElementById(attackID);
  getBrainMonsterAttack(monsterAttackSelector);
}

function getBrainMonsterAttack(attackList) {
  selectedBrainMonsterAttack =
    attackList.options[attackList.selectedIndex].value;
  console.log(selectedBrainMonsterAttack);
}

function attack() {
  //Check that no values are zero

  if (
    (selectedBrainMonsterAttack == "0") |
    (selectedMedimonAttack == "0") |
    (medimonSelected == "0") |
    (selectedMedimonAttack == "0") |
    (selectedBrainMonsterAttack == null) |
    (selectedMedimonAttack == null) |
    (medimonSelected == null) |
    (selectedMedimonAttack == null)
  ) {
    alert(
      "Please make sure you've selected a medimon, a brain monster and attacks for both!"
    );
  } else {
    alert("Can generate an attack!");
    console.log(
      "Current attack strength for the medimonster is: " +
        attackCalculatorMedimon(selectedMedimonAttack, brainMonsterSelected)
    );
    console.log("The chance for attack is: " + medimonAttackChance + "%");
  }

  //If any values are zero show error

  //For the medimon
  //Get what the base attack will be
  //For the brain monster
  //Get what the base attack will be
  //Check if multiplier is possible based on opponent
  //Check if divider is possible based on opponent
  //Check what hit chance is based on opponent
  //Generate an attack
}

function attackCalculatorMedimon(medimonAttackX, brainMonsterSelectedX) {
  var attackStrength = 0;
  console.log("Selected brain monster number: " + brainMonsterSelectedX);
  switch (medimonAttackX) {
    case "m1":
      attackStrength = mEnergyFire;
      medimonAttackChance = 80;
      if ((brainMonsterSelectedX == "2") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 4;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "1") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "m2":
      attackStrength = mFireFocus;
      medimonAttackChance = 90;
      if ((brainMonsterSelectedX == "2") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 3;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "1") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "m3":
      attackStrength = mFireEuphor;
      medimonAttackChance = 70;
      if ((brainMonsterSelectedX == "2") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 2;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "1") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "c1":
      attackStrength = cRestSpirit;
      medimonAttackChance = 60;
      if ((brainMonsterSelectedX == "1") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 4;
        medimonAttackChance = 80;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 55;
      }
      break;
    case "c2":
      attackStrength = cCastShadow;
      medimonAttackChance = 70;
      if (
        (brainMonsterSelectedX == "1") |
        (brainMonsterSelectedX == "3") |
        (brainMonsterSelectedX == "4")
      ) {
        attackStrength = attackStrength * 3;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "c3":
      attackStrength = cSpiritCour;
      medimonAttackChance = 80;
      if ((brainMonsterSelectedX == "1") | (brainMonsterSelectedX == "3")) {
        attackStrength = attackStrength * 3;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 60;
      }
      break;
    case "s1":
      attackStrength = sBalanceAct;
      medimonAttackChance = 90;
      if ((brainMonsterSelectedX == "1") | (brainMonsterSelectedX == "2")) {
        attackStrength = attackStrength * 3;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "3") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 70;
      }
      break;
    case "s2":
      attackStrength = sBanishSad;
      medimonAttackChance = 80;
      if ((brainMonsterSelectedX == "2") | (brainMonsterSelectedX == "3")) {
        attackStrength = attackStrength * 5;
        medimonAttackChance = 95;
      }
      break;
    case "s3":
      attackStrength = sBanishFear;
      medimonAttackChance = 80;
      if (
        (brainMonsterSelectedX == "2") |
        (brainMonsterSelectedX == "3") |
        (brainMonsterSelectedX == "4")
      ) {
        attackStrength = attackStrength * 3;
        medimonAttackChance = 95;
      }
      break;
    case "b1":
      attackStrength = bBlockStress;
      medimonAttackChance = 80;
      if ((brainMonsterSelectedX == "3") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 3;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "b2":
      attackStrength = bParryFear;
      medimonAttackChance = 80;
      if ((brainMonsterSelectedX == "1") | (brainMonsterSelectedX == "3")) {
        attackStrength = attackStrength * 3;
        medimonAttackChance = 90;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 70;
      }
      break;
    case "b3":
      attackStrength = bCastAwayRestless;
      medimonAttackChance = 70;
      if ((brainMonsterSelectedX == "1") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 3;
        medimonAttackChance = 80;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 60;
      }
      break;
    case "cf1":
      attackStrength = scNatureGrace;
      medimonAttackChance = 80;
      if (brainMonsterSelectedX == "4") {
        attackStrength = attackStrength * 2;
        medimonAttackChance = 90;
      }
      if (
        (brainMonsterSelectedX == "1") |
        (brainMonsterSelectedX == "2") |
        (brainMonsterSelectedX == "3")
      ) {
        attackStrength = attackStrength / 3;
        medimonAttackChance = 50;
      }
      break;

    case "cf2":
      attackStrength = scDrinkPeace;
      medimonAttackChance = 70;
      if (brainMonsterSelectedX == "4") {
        medimonAttackChance = 80;
      }
      if (
        brainMonsterSelectedX == "1" ||
        brainMonsterSelectedX == "2" ||
        brainMonsterSelectedX == "3"
      ) {
        attackStrength = attackStrength / 3;
        medimonAttackChance = 50;
      }
      break;
  }
  return attackStrength.toFixed(2);
}

function attackCalculatorBrainMonster(
  medimonAttackSelectedX,
  medimonSelectedX,
  brainMonsterAttackX,
  medimonAttackStrength
) {
  monsterAttackStrength = 0;
  switch (brainMonsterAttackX) {
    case "anx1":
      monsterAttackStrength = anxBaneOfHeart;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 90;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 85;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 90;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackSelector / 2;
          brainMonsterAttackChance = 60;

          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 55;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 70;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 50;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 60;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 55;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 70;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 80;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 85;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength * 5;
          brainMonsterAttackChance = 90;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
      }
      break;
    case "anx2":
      monsterAttackStrength = anxDestroyFocus;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "anx3":
      monsterAttackStrength = anxOverwhTerror;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "dk1":
      monsterAttackStrength = depEndlessSleep;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "dk2":
      monsterAttackStrength = depBlackenSun;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "dk3":
      monsterAttackStrength = depDrainEnergy;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "sb1":
      monsterAttackStrength = trSoulDrain;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "sb2":
      monsterAttackStrength = trTerrorStrike;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "sb3":
      monsterAttackStrength = trAbandonHope;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "sd1":
      monsterAttackStrength = brnCastWorthless;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "sd2":
      monsterAttackStrength = brnStealSleep;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
    case "sd3":
      brainMonsterAttackChance = 80;
      monsterAttackStrength = brnCauseConfusion;
      switch (medimonAttackSelectedX) {
        case "m1":
          break;
        case "m2":
          break;
        case "m3":
          break;
        case "c1":
          break;
        case "c2":
          break;
        case "c3":
          break;
        case "s1":
          break;
        case "s2":
          break;
        case "s3":
          break;
        case "b1":
          break;
        case "b2":
          break;
        case "b3":
          break;
        case "cf1":
          break;
        case "cf2":
          break;
      }
      break;
  }
}

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

var scNatureGrace = 21;
var scDrinkPeace = 18;

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

var medimonName;
var brainMonsterName;

var attackNameMedimon;
var attackNameBrainMonster;

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
  attackNameMedimon = attackList.options[attackList.selectedIndex].innerHTML;
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
  attackNameBrainMonster =
    attackList.options[attackList.selectedIndex].innerHTML;
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
    console.log(
      "Current attack strength for the medimon is: " +
        attackCalculatorMedimon(selectedMedimonAttack, brainMonsterSelected)
    );
    console.log(
      "The chance for attack for your medimon is: " + medimonAttackChance + "%"
    );
    console.log(
      "The attack strength for the brain monster is: " +
        attackCalculatorBrainMonster(
          selectedMedimonAttack,
          selectedBrainMonsterAttack
        )
    );
    console.log(
      "The chance for attack for the brain monster is: " +
        brainMonsterAttackChance +
        "%"
    );

    if (
      attackCalculatorMedimon(selectedMedimonAttack, brainMonsterSelected) >
      attackCalculatorBrainMonster(
        selectedMedimonAttack,
        selectedBrainMonsterAttack
      )
    ) {
      console.log("Your medimon's attack was effective!");
    } else {
      console.log("The attack was not very effective...");
    }

    var medimonNameContainer = document.getElementById("medimonName");
    medimonNameContainer.innerHTML = medimonName;
    var brainMonsterNameContainer = document.getElementById("brainMonsterName");
    brainMonsterNameContainer.innerHTML = brainMonsterName;

    var versusTextContainer = document.getElementById("versusText");
    versusTextContainer.innerHTML = medimonName + " VS " + brainMonsterName;

    var medimonAttackName = document.getElementById("medimonSelectedAttack");
    medimonAttackName.innerHTML = "Attacking with: " + attackNameMedimon;

    var brainMonsterAttackName = document.getElementById(
      "brainMonsterSelectedAttack"
    );
    brainMonsterAttackName.innerHTML =
      "Attacking with: " + attackNameBrainMonster;
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
      medimonName = "Methylphenidragon";
      attackStrength = mEnergyFire;
      medimonAttackChance = 80;
      if ((brainMonsterSelectedX == "2") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 5;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "1") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "m2":
      medimonName = "Methylphenidragon";
      attackStrength = mFireFocus;
      medimonAttackChance = 90;
      if ((brainMonsterSelectedX == "2") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 7;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "1") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "m3":
      medimonName = "Methylphenidragon";
      attackStrength = mFireEuphor;
      medimonAttackChance = 70;
      if ((brainMonsterSelectedX == "2") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 5;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "1") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "c1":
      medimonName = "Clobazore";
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
      medimonName = "Clobazore";
      attackStrength = cCastShadow;
      medimonAttackChance = 70;
      if (
        (brainMonsterSelectedX == "1") |
        (brainMonsterSelectedX == "3") |
        (brainMonsterSelectedX == "4")
      ) {
        attackStrength = attackStrength * 5;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "c3":
      medimonName = "Clobazore";
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
      medimonName = "Seratonia Guardian";
      attackStrength = sBalanceAct;
      medimonAttackChance = 90;
      if ((brainMonsterSelectedX == "1") | (brainMonsterSelectedX == "2")) {
        attackStrength = attackStrength * 5;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "3") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 70;
      }
      break;
    case "s2":
      medimonName = "Seratonia Guardian";
      attackStrength = sBanishSad;
      medimonAttackChance = 80;
      if ((brainMonsterSelectedX == "2") | (brainMonsterSelectedX == "3")) {
        attackStrength = attackStrength * 4;
        medimonAttackChance = 95;
      }
      break;
    case "s3":
      medimonName = "Seratonia Guardian";
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
      medimonName = "Beta Shield Mage";
      attackStrength = bBlockStress;
      medimonAttackChance = 80;
      if ((brainMonsterSelectedX == "3") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 5;
        medimonAttackChance = 95;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 50;
      }
      break;
    case "b2":
      medimonName = "Beta Shield Mage";
      attackStrength = bParryFear;
      medimonAttackChance = 80;
      if ((brainMonsterSelectedX == "1") | (brainMonsterSelectedX == "3")) {
        attackStrength = attackStrength * 5;
        medimonAttackChance = 90;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 70;
      }
      break;
    case "b3":
      medimonName = "Beta Shield Mage";
      attackStrength = bCastAwayRestless;
      medimonAttackChance = 70;
      if ((brainMonsterSelectedX == "1") | (brainMonsterSelectedX == "4")) {
        attackStrength = attackStrength * 5;
        medimonAttackChance = 80;
      }
      if (brainMonsterSelectedX == "2") {
        attackStrength = attackStrength / 2;
        medimonAttackChance = 60;
      }
      break;
    case "cf1":
      medimonName = "Care Fairy";
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
      medimonName = "Care Fairy";
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
  brainMonsterAttackX
) {
  monsterAttackStrength = 0;
  switch (brainMonsterAttackX) {
    case "anx1":
      brainMonsterName = "Anxor Wraith";
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
      brainMonsterName = "Anxor Wraith";
      monsterAttackStrength = anxDestroyFocus;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 70;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 80;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 90;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 70;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 60;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 80;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 90;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 60;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 60;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 70;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 60;
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
    case "anx3":
      brainMonsterName = "Anxor Wraith";
      monsterAttackStrength = anxOverwhTerror;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength * 5;
          brainMonsterAttackChance = 95;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
      }
      break;
    case "dk1":
      brainMonsterName = "Dark Ghost";
      monsterAttackStrength = depEndlessSleep;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength * 5;
          brainMonsterAttackChance = 95;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength * 6;
          brainMonsterAttackChance = 98;
          break;
      }
      break;
    case "dk2":
      brainMonsterName = "Dark Ghost";
      monsterAttackStrength = depBlackenSun;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength * 6;
          brainMonsterAttackChance = 95;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength * 5;
          brainMonsterAttackChance = 95;
          break;
      }
      break;
    case "dk3":
      brainMonsterName = "Dark Ghost";
      monsterAttackStrength = depDrainEnergy;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 70;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 80;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 60;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 90;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 80;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 95;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 5;
          brainMonsterAttackChance = 70;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 60;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 70;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 80;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 70;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 75;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength * 6;
          brainMonsterAttackChance = 95;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength * 5;
          brainMonsterAttackChance = 95;
          break;
      }
      break;
    case "sb1":
      brainMonsterName = "Screaming Banshee";
      monsterAttackStrength = trSoulDrain;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 95;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 5;
          brainMonsterAttackChance = 85;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 95;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 75;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 85;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 75;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 85;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 90;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 80;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 70;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 80;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 75;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 95;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 80;
          break;
      }
      break;
    case "sb2":
      brainMonsterName = "Screaming Banshee";
      monsterAttackStrength = trTerrorStrike;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 5;
          brainMonsterAttackChance = 95;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 95;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 80;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 75;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 70;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 65;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 70;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 80;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 70;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 5;
          brainMonsterAttackChance = 60;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 50;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 90;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 80;
          break;
      }
      break;
    case "sb3":
      brainMonsterName = "Screaming Banshee";
      monsterAttackStrength = trAbandonHope;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 80;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 90;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 70;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 50;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 45;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 70;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 60;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 60;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 80;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 75;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 80;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 85;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 80;
          break;
      }
      break;
    case "sd1":
      brainMonsterName = "Soul Drainer";
      monsterAttackStrength = brnCastWorthless;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 5;
          brainMonsterAttackChance = 98;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 90;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 65;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 75;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 85;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 75;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 85;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 70;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 90;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 80;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 80;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 70;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 80;
          break;
      }
      break;
    case "sd2":
      brainMonsterName = "Soul Drainer";
      monsterAttackStrength = brnStealSleep;
      brainMonsterAttackChance = 80;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 5;
          brainMonsterAttackChance = 90;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 85;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 80;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 70;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 85;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 75;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 85;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 75;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 70;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 80;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 75;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 76;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 80;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 70;
          break;
      }
      break;
    case "sd3":
      brainMonsterName = "Soul Drainer";
      brainMonsterAttackChance = 80;
      monsterAttackStrength = brnCauseConfusion;
      switch (medimonAttackSelectedX) {
        case "m1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 83;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 90;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 95;
          break;
        case "c2":
          brainMonsterAttackChance = 80;
          break;
        case "c3":
          brainMonsterAttackChance = 80;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 75;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 85;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 95;
          break;
        case "b1":
          brainMonsterAttackChance = 85;
          break;
        case "b2":
          brainMonsterAttackChance = 80;
          break;
        case "b3":
          brainMonsterAttackChance = 90;
          break;
        case "cf1":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 85;
          break;
        case "cf2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 90;
          break;
      }
      break;
  }
  return monsterAttackStrength.toFixed(2);
}

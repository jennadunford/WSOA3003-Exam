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

var mEnergyFire = 35;
var mFireFocus = 40;
var mFireEuphor = 45;

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

var mResultOutcome;

var medimonAttackStrength;

var medimonImage = document.getElementById("medimonImage");
var medimonImage2 = document.getElementById("medimonImage2");

function updateMedimonSelector() {
  medimonSelected =
    medimonSelector.options[medimonSelector.selectedIndex].value;
  console.log(medimonSelected);

  switch (parseInt(medimonSelected)) {
    case 0:
      medimonImage.src = "";
      medimonImage.classList.add("hidden");
      break;
    case 1:
      medimonImage.src = "medimonImages/MDragon.png";
      medimonImage2.src = "medimonImages/MDragon.png";
      medimonImage.classList.remove("hidden");
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
      medimonImage.src = "medimonImages/Clob-.png";
      medimonImage2.src = "medimonImages/Clob-.png";
      medimonImage.classList.remove("hidden");
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
      medimonImage.src = "medimonImages/Sera.png";
      medimonImage2.src = "medimonImages/Sera.png";
      medimonImage.classList.remove("hidden");
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
      medimonImage.src = "medimonImages/Shield.png";
      medimonImage2.src = "medimonImages/Shield.png";
      medimonImage.classList.remove("hidden");
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
      medimonImage.src = "medimonImages/Fairy.png";
      medimonImage2.src = "medimonImages/Fairy.png";
      medimonImage.classList.remove("hidden");
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
  medimonImage2.classList.remove("hidden");
  if (
    (selectedBrainMonsterAttack == "0") |
    (selectedMedimonAttack == "0") |
    (medimonSelected == "0") |
    (selectedMedimonAttack == "0") |
    (selectedBrainMonsterAttack == null) |
    (selectedMedimonAttack == null) |
    (medimonSelected == null) |
    (brainMonsterSelected == null)
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

    medimonAttackStrength = attackCalculatorMedimon(
      selectedMedimonAttack,
      brainMonsterSelected
    );

    if (medimonAttackStrength >= monsterAttackStrength) {
      console.log("Your medimon's attack was effective!");
      mResultOutcome =
        "The strength of the " +
        medimonName +
        "'s attack was " +
        attackCalculatorMedimon(selectedMedimonAttack, brainMonsterSelected) +
        ". The attack was effective!";
    } else {
      mResultOutcome =
        "The strength of the " +
        medimonName +
        "'s attack was " +
        attackCalculatorMedimon(selectedMedimonAttack, brainMonsterSelected) +
        ". The attack was not very effective...";
      console.log("The attack was not very effective...");
    }

    attackCalculatorMedimon(selectedMedimonAttack, brainMonsterSelected);

    var descriptionContainerM = document.getElementById(
      "medimonSelectedAttackDescription"
    );
    descriptionContainerM.innerHTML = getMedimonAttackDescription(
      selectedMedimonAttack
    );

    var descriptionContainerB = document.getElementById(
      "brainMonsterSelectedAttackDescription"
    );
    descriptionContainerB.innerHTML = getBrainMonsterAttackDescription(
      selectedBrainMonsterAttack
    );

    var hitContainerB = document.getElementById("hitChanceContainerB");
    hitContainerB.innerHTML =
      "Chance of Successful Attack: " + brainMonsterAttackChance + "%";

    var hitChanceContainerM = document.getElementById("hitChanceContainerM");
    hitChanceContainerM.innerHTML =
      "Chance of Successful Attack: " + medimonAttackChance + "%";

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

  var MResultContainer = document.getElementById("medimonResults");
  MResultContainer.innerHTML = mResultOutcome;

  var MChanceResultContainer = document.getElementById("medimonHitResult");
  if (checkSucess(medimonAttackChance)) {
    MChanceResultContainer.innerHTML = "The medimon's attack was sucessful!";
  } else {
    MChanceResultContainer.innerHTML = "The medimon's attack missed...";
  }
  var BResultContainer = document.getElementById("brainMonResults");
  BResultContainer.innerHTML =
    "Your opponent attacked with a strength of: " +
    monsterAttackStrength.toFixed(2) +
    ".";
  var BChanceResultContainer = document.getElementById("brainMonHitResult");
  if (checkSucess(brainMonsterAttackChance)) {
    BChanceResultContainer.innerHTML = "Your opponents attack was sucessful...";
  } else {
    BChanceResultContainer.innerHTML = "Your opponents attack missed!";
  }

  selectedBrainMonsterAttack = null;
  selectedMedimonAttack = null;
  medimonSelected = null;
  brainMonsterSelected = null;

  brainMonsterSelector.selectedIndex = 0;
  medimonSelector.selectedIndex = 0;

  hideSelectors();
}

function checkSucess(chance) {
  num = Math.floor(Math.random() * 101);
  if (num <= chance) {
    return true;
  } else {
    return false;
  }
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
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 85;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 90;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 70;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 72;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 50;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 65;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 75;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 55;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 86;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 75;
          break;
        case "b3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 65;
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
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 55;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 60;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength / 5;
          brainMonsterAttackChance = 64;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 70;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 85;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 65;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 65;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 55;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 3;
          brainMonsterAttackChance = 60;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 60;
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
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 70;
          break;
        case "m2":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 65;
          break;
        case "m3":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 60;
          break;
        case "c1":
          monsterAttackStrength = monsterAttackStrength * 4;
          brainMonsterAttackChance = 95;
          break;
        case "c2":
          monsterAttackStrength = monsterAttackStrength * 3;
          brainMonsterAttackChance = 75;
          break;
        case "c3":
          monsterAttackStrength = monsterAttackStrength * 2;
          brainMonsterAttackChance = 65;
          break;
        case "s1":
          monsterAttackStrength = monsterAttackStrength / 4;
          brainMonsterAttackChance = 55;
          break;
        case "s2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 65;
          break;
        case "s3":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 65;
          break;
        case "b1":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 55;
          break;
        case "b2":
          monsterAttackStrength = monsterAttackStrength / 2;
          brainMonsterAttackChance = 75;
          break;
        case "b3":
          brainMonsterAttackChance = 80;
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
          monsterAttackStrength = monsterAttackStrength / 3;
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

function getMedimonAttackDescription(medimonAttack) {
  var output;
  switch (medimonAttack) {
    case "m1":
      output =
        "The methylphenidragon takes in a deep breath and blows a bright and all encompassing fire, the flames fill you with the energy to damage your opponent.";
      break;
    case "m2":
      output =
        "You stare deep into the eyes of your dragon companion, you feel its flames give you the concentration you need to face your opponent.";
      break;
    case "m3":
      output =
        "Just as you feel you are losing hope and becoming empty, the dragon casts its flames of euphoria, filling you with determination and strength to battle your opponent.";
      break;
    case "c1":
      output =
        "The magic of the clobazore rests your spirit, filling you with calm, you do not fear facing your opponent.";
      break;
    case "c2":
      output =
        "The clobazore leaps in front of you, vanquishing shadows of doubt, and bringing you calm and determination to face your opponent.";
      break;
    case "c3":
      output =
        "In your darkest hours, the clobazore helps you to clear your mind of fear and give you the spirit of courage to engage your enemies.";
      break;
    case "s1":
      output =
        "The Seratonia Guardian is summoned, she uses her powers to balance the pesky chemicals within your mind, allowing you to face your fears and your enemies.";
      break;
    case "s2":
      output =
        "The Seratonia Guardian banishes away your sadness and despair, allowing you to face your opponent with a clear mind and heart";
      break;
    case "s3":
      output =
        "You call upon the Seratonia Guardian for help - your fear has been banished, you are no longer afraid to face the monster before you";
      break;
    case "b1":
      output =
        "The Beta Shield Mage uses their strong armour to shield you from the stresses that your enemy places upon you, allowing for you to attack.";
      break;
    case "b2":
      output =
        "The dark sword of fear swings towards you, but it is blocked and parried with the help of the shield mage, you are able to attempt to strike your opponent.";
      break;
    case "b3":
      output =
        "The Beta Shield Mage fills you with determination, you shake off your restlessness, you can face your opponent.";
      break;
    case "cf1":
      output =
        "The Care Fairy's aid is limited, but she bathes you in the beauty of nature and fresh air, you are given some strength to face your opponent.";
      break;
    case "cf2":
      output =
        "The Care Fairy's aid is limited, but she gifts you with warm drinks that fill you with peace, you have some strength to face your opponent.";
      break;
  }
  return output;
}

function getBrainMonsterAttackDescription(brainMonsterAttack) {
  var output = "";
  switch (brainMonsterAttack) {
    case "anx1":
      output =
        "Your heart is racing. The Anxor Wraith has a grip upon your physical form... your heart races, your palms sweat, tears fall without any clear reason. The wraith's hold on you is strong.";
      break;
    case "anx2":
      output =
        "The Anxor Wraith surrounds you... clouds your thoughts... you cannot focus on anything! The world is turning too fast, time is moving too rapidly... you are filled with confusion.";
      break;
    case "anx3":
      output =
        "The Anxor Wraith overwhelms you with fear and terror... no place is safe, your mind becomes a prison.";
      break;
    case "dk1":
      output =
        "The dark ghost is before you. You suddenly feel a tiredness that you have never experienced before... the very act of standing and keeping your eyes open drains you... even though there is no reason to be tired.";
      break;
    case "dk2":
      output =
        "The dark ghost uses its demonic power to blacken out your sun - your world is filled with darkness... hopelessness...";
      break;
    case "dk3":
      output =
        "The dark ghost sucks the life and energy from within you - it is terrifying and deeply disturbing for your mind.";
      break;
    case "sb1":
      output =
        "The appearance of the screaming banshee fills you fear and dread - your soul becomes drained, your body becomes heavy...";
      break;
    case "sb2":
      output =
        "Terror! You are struck by the screaming banshee, their screams drown your world...";
      break;
    case "sb3":
      output =
        "The screaming banshee fills your world with confusiona and fear and dread - you can see nothing ahead - you abandon all hope.";
      break;
    case "sd1":
      output =
        "The soul drainer fills you with clouds of worthlessness and doubt... you feel as if you can never do anything right, even though you always try so hard.";
      break;
    case "sd2":
      output =
        "The terrifying soul drainer steals away your rest and sleep - you are tired and and lose strength...";
      break;
    case "sd3":
      output =
        "The soul drainer fills your mind with confusion and worry - you cannot think straight... nothing seems to make sense";
      break;
  }
  return output;
}

function hideSelectors() {
  document.getElementById("methylpheniDragonAttacks").classList.add("hidden");
  document
    .getElementById("methylpheniDragonAttacks")
    .classList.remove("visible");

  document.getElementById("clobaZoreAttacks").classList.add("hidden");
  document.getElementById("clobaZoreAttacks").classList.remove("visible");

  document.getElementById("seratoniaGuardian").classList.add("hidden");
  document.getElementById("seratoniaGuardian").classList.remove("visible");

  document.getElementById("betaShieldMage").classList.add("hidden");
  document.getElementById("betaShieldMage").classList.remove("visible");

  document.getElementById("careFairy").classList.add("hidden");
  document.getElementById("careFairy").classList.remove("visible");

  document.getElementById("anxorWraith").classList.add("hidden");
  document.getElementById("anxorWraith").classList.remove("visible");

  document.getElementById("darkGhost").classList.add("hidden");
  document.getElementById("darkGhost").classList.remove("visible");

  document.getElementById("screamingBanshee").classList.add("hidden");
  document.getElementById("screamingBanshee").classList.remove("visible");

  document.getElementById("soulDrainer").classList.add("hidden");
  document.getElementById("soulDrainer").classList.remove("visible");
}

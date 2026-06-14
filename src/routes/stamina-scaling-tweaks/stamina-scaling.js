// Draw Steel - Stamina (HP) Calculator
// This calculates stamina scaling for a character build in Draw Steel
// Values are listed in the order they are applied

// Base Values (used as defaults)
const BASE_STARTING_STAMINA = 30;
const BASE_PER_LEVEL_STAMINA = 3;
const BASE_KIT_BONUS = 6;
const BASE_ADDED_STAMINA_PER_ECHELON = 0;

// Multipliers and Dividers (always applied)
const STARTING_MULTIPLIER = 1;
const LEVEL_SCALING_DIVIDER = 1;
const KIT_BONUS_DIVIDER = 1;
const ARMOR_BONUS_DIVIDER = 1;

const ARMOR_BONUSES = {
  3: 6,
  6: 6,
  9: 9,
};

const KIT_ECHELON_LEVELS = [1, 4, 7, 10];
const MAX_LEVEL = 10;

function calculateStaminaByLevel(
  starting_stamina = BASE_STARTING_STAMINA,
  per_level_stamina = BASE_PER_LEVEL_STAMINA,
  kit_stamina = BASE_KIT_BONUS,
  bonus_echelon_stamina = BASE_ADDED_STAMINA_PER_ECHELON
) {
  const output = [];
  const startingStamina = starting_stamina * STARTING_MULTIPLIER;
  const kitBonusPerEchelon = kit_stamina / KIT_BONUS_DIVIDER;

  for (let level = 1; level <= MAX_LEVEL; level++) {
    let stamina = startingStamina;

    // Calculate per-level stamina
    const levelGain = level - 1;
    const perLevelStamina = per_level_stamina / LEVEL_SCALING_DIVIDER;

    // Add stamina per level
    stamina += perLevelStamina * levelGain;

    const echelonsReached = KIT_ECHELON_LEVELS.filter(
      (echelon) => level >= echelon
    ).length;

    // Add stamina per echelon
    stamina += kitBonusPerEchelon * echelonsReached;
    stamina += bonus_echelon_stamina * echelonsReached;

    // Add stamina from armor
    const armorBonus = Object.entries(ARMOR_BONUSES)
      .filter(([lvl]) => level >= parseInt(lvl))
      .reduce((sum, [_, bonus]) => sum + bonus / ARMOR_BONUS_DIVIDER, 0);

    stamina += armorBonus;

    output.push({
      level,
      stamina: Math.round(stamina),
    });
  }

  return output;
}

function createComparisonTable(configurations) {
  // Calculate stamina for each configuration
  const results = configurations.map((config) => ({
    name: config.name,
    stamina: calculateStaminaByLevel(
      config.starting_stamina ?? BASE_STARTING_STAMINA,
      config.per_level_stamina ?? BASE_PER_LEVEL_STAMINA,
      config.kit ?? BASE_KIT_BONUS,
      config.echelon ?? BASE_ADDED_STAMINA_PER_ECHELON
    ),
  }));

  // Create markdown-friendly table
  console.log("## Draw Steel - Tweaked Stamina Scaling\n");

  // Table header
  let header = "| Level |";
  let separator = "|-------|";
  configurations.forEach((config) => {
    header += ` ${config.name} |`;
    separator += ":------------------:|";
  });
  console.log(header);
  console.log(separator);

  // Table rows
  for (let level = 1; level <= MAX_LEVEL; level++) {
    let row = `| ${level} |`;
    results.forEach((result) => {
      const stamina = result.stamina.find((s) => s.level === level).stamina;
      const displayValue = stamina % 3 !== 0 ? `${stamina}*` : stamina;
      row += ` ${displayValue} |`;
    });
    console.log(row);
  }

  console.log("\n## Summary Comparison\n");
  results.forEach((result) => {
    const level1 = result.stamina[0].stamina;
    const level10 = result.stamina[9].stamina;
    const growth = level10 - level1;
    const growthPercent = Math.round((growth / level1) * 100);
    console.log(
      `- **${result.name}:** ${level1} → ${level10} (+${growth}, +${growthPercent}%)`
    );
  });
}

// Define the different configurations to compare
const tweakedConfig = [
  { name: "Kit +0, Echelon +0", kit: 0, echelon: 0 },
  { name: "Kit +0, Echelon +6", kit: 0, echelon: 6 },
  { name: "Kit +3, Echelon +0", kit: 3, echelon: 0 },
  { name: "Kit +3, Echelon +6", kit: 3, echelon: 6 },
  { name: "Kit +6, Echelon +0", kit: 6, echelon: 0 },
  { name: "Kit +6, Echelon +6", kit: 6, echelon: 6 },
  { name: "Kit +9, Echelon +0", kit: 9, echelon: 0 },
  { name: "Kit +9, Echelon +6", kit: 9, echelon: 6 },
  { name: "Kit +12, Echelon +0", kit: 12, echelon: 0 },
  { name: "Kit +12, Echelon +6", kit: 12, echelon: 6 },
];

const vanillaConfig = [
  {
    name: "Kit +0",
    starting_stamina: 18,
    per_level_stamina: 9,
    kit: 0,
    echelon: 0,
  },
  {
    name: "Kit +0, Tank Class",
    starting_stamina: 21,
    per_level_stamina: 12,
    kit: 0,
    echelon: 0,
  },
  {
    name: "Kit +3",
    starting_stamina: 18,
    per_level_stamina: 9,
    kit: 3,
    echelon: 0,
  },
  {
    name: "Kit +3, Tank Class",
    starting_stamina: 21,
    per_level_stamina: 12,
    kit: 3,
    echelon: 0,
  },
  {
    name: "Kit +6",
    starting_stamina: 18,
    per_level_stamina: 9,
    kit: 6,
    echelon: 0,
  },
  {
    name: "Kit +6, Tank Class",
    starting_stamina: 21,
    per_level_stamina: 12,
    kit: 6,
    echelon: 0,
  },
  {
    name: "Kit +9",
    starting_stamina: 18,
    per_level_stamina: 9,
    kit: 9,
    echelon: 0,
  },
  {
    name: "Kit +9, Tank Class",
    starting_stamina: 21,
    per_level_stamina: 12,
    kit: 9,
    echelon: 0,
  },
  {
    name: "Kit +12",
    starting_stamina: 18,
    per_level_stamina: 9,
    kit: 12,
    echelon: 0,
  },
  {
    name: "Kit +12, Tank Class",
    starting_stamina: 21,
    per_level_stamina: 12,
    kit: 12,
    echelon: 0,
  },
];

createComparisonTable(tweakedConfig);
console.log("\n---\n");
createComparisonTable(vanillaConfig);
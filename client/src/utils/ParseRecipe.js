// Parses ingredient array from recipe object and returns an array
// of more concise recipe objects. Don't use this function directly.
// Use the more specific wrapper function below this one.
const parseIngredients = (arr) =>
    arr.map((item) => ({
        name: item.name,
        amount: item.amount.toFixed(1),
        unit: item.unitShort,
    }));

// Returns array of all ingredients from recipe
export const getAllIngredients = (recipe) => [
    ...getUsedIngredients(recipe),
    ...getMissedIngredients(recipe),
];

// Returns array of ingredients in pantry and in recipe
export const getMissedIngredients = (recipe) =>
    parseIngredients(recipe.missedIngredients);

// Returns array of ingredients in pantry but not in recipe
export const getUsedIngredients = (recipe) =>
    parseIngredients(recipe.usedIngredients);

// Returns array of ingredients in pantry but not in recipe
export const getUnusedIngredients = (recipe) =>
    parseIngredients(recipe.unusedIngredients);

// Returns array of nutrients from recipe
export const getNutrients = (recipe) =>
    recipe.nutrition.nutrients.map((item) => ({
        name: item.title,
        amount: item.amount.toFixed(0),
        unit: item.unit,
        dv: item.percentOfDailyNeeds.toFixed(0),
    }));

// Returns step by step instructions from recipe as an array of strings
export const getInstructions = (recipe) =>
    recipe.analyzedInstructions
        ? recipe.analyzedInstructions[0].steps.map((step) => step.step)
        : [];

// Returns basic info for recipe
export const getInformation = (recipe) => ({
    id: recipe.id,
    name: recipe.title,
    prepTime: recipe.preparationMinutes,
    cookTime: recipe.cookingMinutes,
    url: recipe.sourceUrl,
    image: recipe.image,
});

export const pruneRecipe = (recipe) => ({
    information: getInformation(recipe),
    instructions: getInstructions(recipe),
    nutrients: getNutrients(recipe),
    missedIngredients: getMissedIngredients(recipe),
    usedIngredients: getUsedIngredients(recipe),
    unusedIngredients: getUnusedIngredients(recipe),
    allIngredients: getAllIngredients(recipe),
});

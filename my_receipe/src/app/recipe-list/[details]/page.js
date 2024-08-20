import RecipeDetailsItem from "@/components/recipe-details";

async function fetchrecipesDetails(currentRecipesId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipesId}`
    );
    const result = await apiResponse.json();
    return result;
  } catch (e) {
    throw new Error(e);
  }
}

export default async function details({ params }) {
  const data = await fetchrecipesDetails(params?.details);
  return <RecipeDetailsItem getrecipedetails={data} />;
}

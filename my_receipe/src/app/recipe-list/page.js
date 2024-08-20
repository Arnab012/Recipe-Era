import RecipeList from "@/components/recipe-list";

async function fetchListofRecipe() {
  try {
    const apiresponse = await fetch("https://dummyjson.com/recipes", {
      cache: "no-store",
    });
    const result = await apiresponse.json();
    return result?.recipes;
  } catch (e) {
    throw new Error(e);
  }
}
export default async function Recipes() {
  const data = await fetchListofRecipe();
  return <RecipeList data={data} />;
}

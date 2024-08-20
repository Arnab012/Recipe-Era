import Link from "next/link";

export default function RecipeDetailsItem({ getrecipedetails }) {
  return (
    <div>
      <Link
        className="text-2xl  text-gray-600 font-extrabold m-5"
        href={"/recipe-list"}
      >
        Go to RecipeList---
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getrecipedetails?.image}
              alt={getrecipedetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl  font-extrabold text-gray-900">
              {getrecipedetails?.name}
            </h2>
            <div className=" gap-4 mt-5">
              <p className="text-2xl   text-gray-700">
                {getrecipedetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-2xl text-gray-700">
                {getrecipedetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4  text-sm  text-gray-700">
                {getrecipedetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <h1 className="mt-5 ">Instructions:-</h1>
            <div className="mt-5">
              <p>{getrecipedetails?.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

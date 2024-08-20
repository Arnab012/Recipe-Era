import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ data }) {
  console.log(data);
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Recipes </h2>
        <Link className="text-2xl font-extrabold text-gray-600 mb-8" href={"/"}>
          Go Home--
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data && data.length > 0
            ? data.map((item) => (
                <Link href={`/recipe-list/${item.id}`} key={item.id}>
                  <Card className="cursor-pointer hover:scale-[1.05] transition-transform duration-300">
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-top rounded-md overflow-hidden shadow-md"
                      />
                    </div>
                    <CardContent className="bg-white p-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg  text-gray-600 font-semibold">
                          Rating:{item.rating}
                        </p>
                        <div className="ml-auto">
                          <p className="text-lg text-gray-600 font-bold">
                            {item.cuisine}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

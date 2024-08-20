import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/walpaper.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <div className="text-center bg-white bg-opacity-50 p-10 rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">
          Welcome to Recipes Home By Vedotroyee
        </h1>
        <Link
          href="/recipe-list"
          className="text-xl text-white bg-blue-600 py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore New Recipe List
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="bg-green-50 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold text-green-800 mb-4">
              Welcome to HomeoCare
            </h1>
            <p className="text-xl text-green-600">
              Natural Healing for a Healthier You
            </p>
            
            
            <Link href="/homeoCare">
              <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
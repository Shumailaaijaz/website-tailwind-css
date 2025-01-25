import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
     
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-6">About Homeopathy</h1>
          <p className="text-lg text-green-700">
            Homeopathy is a natural form of medicine that uses highly diluted
            substances to stimulate the body&apos;s self-healing mechanisms. It is
            safe, gentle, and effective for people of all ages.
          </p>
        </div>
      </main>


    </div>
  );
}
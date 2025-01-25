import Link from "next/link";
import Image from "next/image";

export default function HomeoCarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
            What is Homeopathy?
          </h1>

          {/* Image */}
          <div className="mb-8">
            <Image
              src="/homeopathy.png"
              alt="Homeopathy"
              width={800} // Set the width
              height={400} // Set the height
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Details About Homeopathy */}
          <div className="space-y-4 text-green-700">
            <p>
              Homeopathy is a natural form of medicine that uses highly diluted
              substances to stimulate the body&apos;s self-healing mechanisms. It is
              based on the principle of &quot;like cures like,&quot; meaning a substance
              that causes symptoms in a healthy person can be used to treat
              similar symptoms in a sick person.
            </p>
            <p>
              Homeopathic remedies are made from natural sources such as plants,
              minerals, and animals. They are safe, gentle, and free from side
              effects, making them suitable for people of all ages, including
              infants, pregnant women, and the elderly.
            </p>
            <p>
              Homeopathy treats the individual as a whole, addressing the root
              cause of the illness rather than just the symptoms. It is widely
              used for chronic conditions, acute illnesses, and emotional
              disorders.
            </p>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      </main>


    </div>
  );
}
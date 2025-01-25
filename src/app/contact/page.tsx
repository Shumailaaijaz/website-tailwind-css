export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-green-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-green-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-green-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700">Message</label>
            <textarea
              className="w-full p-2 border border-green-300 rounded-lg"
              rows= {5}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
}
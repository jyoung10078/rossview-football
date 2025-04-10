import Image from "next/image";
import MainImage from '@/images/rossview-team.png'
import RightActionImage from '@/images/rossview-football.png'
import LeftActionImage from '@/images/rossview-qb-throw.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={MainImage}
          alt="Rossview Hawks Football Team"
          fill
          className="object-cover object-top brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Rossview Hawks Football</h1>
            <p className="text-xl md:text-2xl">Home of the Fighting Hawks</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Upcoming Games */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">vs. Clarksville High</h3>
              <p className="text-gray-600">Friday, September 15, 2023</p>
              <p className="text-gray-600">7:00 PM @ Rossview Stadium</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">vs. Northwest High</h3>
              <p className="text-gray-600">Friday, September 22, 2023</p>
              <p className="text-gray-600">7:00 PM @ Rossview Stadium</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">vs. West Creek High</h3>
              <p className="text-gray-600">Friday, September 29, 2023</p>
              <p className="text-gray-600">7:00 PM @ Rossview Stadium</p>
            </div>
          </div>
        </section>

        {/* Team News */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Team News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={RightActionImage}
                  alt="Team Practice"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Season Opener Victory</h3>
                <p className="text-gray-600 mb-4">The Hawks started their season with an impressive win against...</p>
                <a href="/news/season-opener" className="text-blue-600 hover:text-blue-800">
                  Read More →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={LeftActionImage}
                  alt="Team Meeting"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">New Coaching Staff Announced</h3>
                <p className="text-gray-600 mb-4">Rossview High School welcomes new additions to the coaching staff...</p>
                <a href="/news/coaching-staff" className="text-blue-600 hover:text-blue-800">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/schedule" className="bg-blue-600 text-white rounded-lg p-6 text-center hover:bg-blue-700 transition-colors">
              <h3 className="text-xl font-semibold">Full Schedule</h3>
            </a>
            <a href="/roster" className="bg-blue-600 text-white rounded-lg p-6 text-center hover:bg-blue-700 transition-colors">
              <h3 className="text-xl font-semibold">Team Roster</h3>
            </a>
            <a href="/tickets" className="bg-blue-600 text-white rounded-lg p-6 text-center hover:bg-blue-700 transition-colors">
              <h3 className="text-xl font-semibold">Buy Tickets</h3>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>Rossview High School</p>
              <p>1234 Rossview Road</p>
              <p>Clarksville, TN 37043</p>
              <p>Phone: (931) 358-5678</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Instagram</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-blue-400">About the Team</a></li>
                <li><a href="/coaches" className="hover:text-blue-400">Coaching Staff</a></li>
                <li><a href="/boosters" className="hover:text-blue-400">Booster Club</a></li>
                <li><a href="/alumni" className="hover:text-blue-400">Alumni</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rossview High School Football. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

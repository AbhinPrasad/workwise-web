import Image from "next/image"
import Link from "next/link"

const MainNavbar = () => {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
        <nav
          aria-label="Global"
          className="flex items-center justify-between px-6 lg:px-20 py-4"
        >
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5 flex items-center">
              <Image
                alt="WorkWise Logo"
                src="/workwise-logo.png"
                height={80}
                width={80}
                className="h-20 w-20"
              />
              <span className="ml-2 text-black text-3xl font-bold font-codec">
                workwise
              </span>
            </Link>
          </div>
          <div className="mr-6 hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="flex items-center gap-4">
              <Link
                href="/signup"
                className="px-6 py-2.5 text-xl bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 transition"
              >
                Get It Free
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <Link href="/login" className="text-xl font-medium text-gray-900">
                Sign in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default MainNavbar

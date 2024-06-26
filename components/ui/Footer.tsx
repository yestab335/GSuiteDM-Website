import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className='dark:bg-black-600'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">Terms</Link> · <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">Privacy Policy</Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-white">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/gsuite" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">GSuiteDM</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-white">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">Documentation</Link>
              </li>
              <li className="mb-2">
                <Link href="/tutorials" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">Tutorials & Guides</Link>
              </li>
              <li className="mb-2">
                <Link href="/support" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">Support Center</Link>
              </li>
              <li className="mb-2">
                <Link href="/updatelog" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">Updates</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-white">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/about-us" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">About us</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">Terms</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out dark:text-white hover:text-white hover:underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-white">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4 dark:text-white">Get the latest news and articles to your inbox every update.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Social media icons */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            {/* GitHub */}
            <li className="ml-4">
              <Link href="https://github.com/yestab335/GSuiteDM" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github" target='_blank'>
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-sm text-gray-600 mr-4 dark:text-white">&copy; GSuiteDM. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image"
import Drive from "@/public/drive.png"
import Docs from "@/public/docs.png"
import Slides from "@/public/slides.png"
import Sheets from "@/public/sheets.png"
import Gmail from "@/public/gmail.png"
import Forms from "@/public/forms.png"

export default function FeaturesBlocks() {
  return (
    <section className="relative dark:bg-black-600">
      {/* Section background (Needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none dark:bg-black-600" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2 darkMode"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 dark:bg-black-600">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 dark:text-white">Explore the solutions</h2>
            <p className="text-xl text-gray-600 dark:text-white">Explore the services we plan on fully supporting in the future.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st Item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl dark:bg-gray-900">
              <Image
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={Drive}
                height={64}
                width={64}
                alt="Google Drive Logo"
                draggable={false}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-white">Google Drive</h4>
              <p className="text-gray-600 text-center dark:text-white">We are working support for Google Drive.</p>
            </div>

            {/* 2nd Item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl dark:bg-gray-900">
              <Image
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={Docs}
                height={64}
                width={64}
                alt="Google Docs Logo"
                draggable={false}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-white">Google Docs</h4>
              <p className="text-gray-600 text-center dark:text-white">We have added total support for Google Docs.</p>
            </div>

            {/* 3rd Item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl dark:bg-gray-900">
              <Image
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={Slides}
                height={64}
                width={64}
                alt="Google Slides Logo"
                draggable={false}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-white">Google Slides</h4>
              <p className="text-gray-600 text-center dark:text-white">We are working support for Google Slides.</p>
            </div>

            {/* 4th Item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl dark:bg-gray-900">
              <Image
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={Sheets}
                height={64}
                width={64}
                alt="Google Sheets Logo"
                draggable={false}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-white">Google Sheets</h4>
              <p className="text-gray-600 text-center dark:text-white">We are working support for Google Sheets.</p>
            </div>

            {/* 5th Item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl dark:bg-gray-900">
              <Image
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={Gmail}
                height={64}
                width={64}
                alt="Gmail Logo"
                draggable={false}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-white">Gmail</h4>
              <p className="text-gray-600 text-center dark:text-white">We have added partial support for Gmail. (Bug fixes still need to be dealt with)</p>
            </div>

            {/* 6th Item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl dark:bg-gray-900">
              <Image
                className="w-16 h-16 p-1 -mt-1 mb-2"
                src={Forms}
                height={64}
                width={64}
                alt="Google Forms Logo"
                draggable={false}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 dark:text-white">Google Forms</h4>
              <p className="text-gray-600 text-center dark:text-white">We have added partial support for Google Forms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

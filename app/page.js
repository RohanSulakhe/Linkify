import Image from "next/image";
import GradientText from "@/components/GradientText";
import Link from 'next/link'
export default function Home() {
  return (
    <main>

      <section className="grid h-[65vh]">
        <div className="flex justify-center flex-col p-10">
          <p className="text-7xl font-bold text-white">

          </p>


          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-7xl font-bold text-white items-end"
          >
            The best URL shortener in the Market
          </GradientText>
          <div className="flex justify-center items-start mt-5">
          <Link href={'/shorten'}>
          <button  className="relative inline-flex items-center justify-start p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Try Now
            </span>
          </button>
          </Link>
          <Link target="_blank" href={'https://github.com/RohanSulakhe/Linkify.git'}>
          <button  className="relative inline-flex items-center justify-start p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Github
            </span>
          </button>
          </Link>
          </div>
        </div>
        

      </section>
    </main>
  );
}

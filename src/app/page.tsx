import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>

      <div
        className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-2xl"
        >
          Aclipt.com
        </h1>
      </div>


      <div>
        <div className="pt-10">
          <a href="https://www.youtube.com/watch?v=DFFPVsZp4jQ" className="text-blue-300">Presentation</a><br/>
          <a href="https://www.youtube.com/watch?v=-Xxnd54l838" className="text-blue-300">Professionals</a><br/>
          <br />
          <p><strong>Aclipt Closure Notice</strong></p>
          <br />
          <p>As of 30/10/2023, Aclipt has officially shut down. We appreciate the support from our customers and partners over the years. For any inquiries, please contact <a
            className="text-blue-300" href="mailto:contact@aclipt.com">contact us</a>. Thank you for being part of our journey.
          </p>
        </div>

      </div>
    </main>
  )
}

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
          <a href="https://www.youtube.com/watch?v=DFFPVsZp4jQ">Presentation</a>
          <a href="https://www.youtube.com/watch?v=-Xxnd54l838">Professionals</a>
          <br />
          <p><strong>Important Announcement</strong></p>
          <br />
          <p>After much consideration, we have made the difficult decision to close down our online platform. We want to
            express our sincere gratitude to all our users and supporters for being a part of our journey. Thank you for
            your trust and support.</p>
          <br />
          <p>Effective 30/10/2023, our services will no longer be available. We apologize for any inconvenience this may
            cause.</p>
          <p>If you have any questions or need further assistance, please don&apos;t hesitate to <a
            className="text-blue-300" href="mailto:contact@aclipt.com">contact us</a>. We will do our best to assist you
            during this transition period.</p>
          <br />
          <p>Thank you once again for your support and understanding.</p>
          <p>- The Aclipt Team</p>
        </div>

        <div className="pt-10">
          <p><strong>Annonce importante</strong></p>
          <br />
          <p>Après mûre réflexion, nous avons pris la difficile décision de fermer notre plateforme en ligne. Nous tenons
            à exprimer notre sincère gratitude à tous nos utilisateurs et supporters pour avoir fait partie de notre
            parcours. Merci pour votre confiance et votre soutien.</p>
          <br />
          <p>À compter du 30/10/2023, nos services ne seront plus disponibles. Nous nous excusons pour tout inconvénient
            que cela pourrait causer.</p>
          <p>Si vous avez des questions ou avez besoin d&apos;aide, n&apos;hésitez pas à <a className="text-blue-300"
                                                                                            href="mailto:votre@email.com">nous
            contacter</a>. Nous ferons de notre mieux pour vous aider pendant cette période de transition.</p>
          <br />
          <p>Nous vous remercions une fois de plus pour votre soutien et votre compréhension.</p>
          <p>- L&apos;équipe Aclipt</p>

          <div className="flex justify-center pt-10">
            <img className="" src="/aclipt.png" alt="Aclipt Logo" width="150" height="150" />
          </div>
        </div>


      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>


      <div className="justify-end italic">
        <p>Affiliate links:</p>
        <Link className="text-blue-300" href="https://vendunt.com/">Vendunt</Link>
      </div>
    </main>
  )
}

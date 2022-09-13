/* This example requires Tailwind CSS v2.0+ */
export default function Cta() {
    return (
      <div className="bg-secondary-900">
        <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Boost your productivity.</span>
            <span className="block">Start using our desks today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-secondary-200">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-secondary-600 hover:bg-secondary-50 sm:w-auto"
          >
            Contact us
          </a>
        </div>
      </div>
    )
  }
  
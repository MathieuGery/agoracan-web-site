import {
    UserGroupIcon,
    BriefcaseIcon,
    BuildingOfficeIcon,
  } from '@heroicons/react/24/outline'

const supportLinks = [
    {
        name: 'Domiciliation',
        href: '/domiciliation',
        description:
            'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
        icon: BuildingOfficeIcon,
    },
    {
        name: 'Office Rent',
        href: '#',
        description:
            'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
        icon: UserGroupIcon,
    },
    {
        name: 'Legal Advice',
        href: '#',
        description:
            'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
        icon: BriefcaseIcon,
    },
]

export function Baiting() {
    return (
        <div className="bg-white p-10">
            <main>
                <div className="bg-white">
                    {/* Cards */}
                    <section
                        className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
                        aria-labelledby="contact-heading"
                    >
                        <h2 className="sr-only" id="contact-heading">
                            Contact us
                        </h2>
                        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                            {supportLinks.map((link) => (
                                <div key={link.name} className="flex flex-col rounded-2xl bg-secondary-900 shadow-xl">
                                    <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                                        <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-primary-600 p-5 shadow-lg">
                                            <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-medium text-primary-600">{link.name}</h3>
                                        <p className="mt-4 text-base text-white">{link.description}</p>
                                    </div>
                                    <div className="rounded-bl-2xl rounded-br-2xl bg-secondary-900 p-6 md:px-8">
                                        <button className="text-base font-medium text-primary-600 hover:text-primary-600 ursor-pointer transition duration-200 transform hover:scale-125">
                                           <a href={link.href}> Discover </a>
                                            <span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

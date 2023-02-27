import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";



import { HandThumbDownIcon, CheckIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Document 1',
    href: '#',
    date: 'Sep 20',
    datetime: '2020-09-20',
    icon: HandThumbDownIcon,
    iconBackground: 'bg-red-500',
  },
  {
    id: 2,
    content: 'Document 2',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: HandThumbDownIcon,
    iconBackground: 'bg-red-500',
  },
  {
    id: 3,
    content: 'Document 3',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Documents() {
  const [isLoading, setLoading] = useState(false)
  const [documents, setDocuments] = useState([])
  const supabase = useSupabaseClient()

  async function getBucket() {
    setLoading(true)
    const { data, error } = await supabase.storage.from('documents').list('private')
    setDocuments(data)
    console.log(data, error)
    setLoading(false)
  }

  async function downloadDocument(doc) {
    const { data, error } = await supabase
      .storage
      .from('documents')
      .createSignedUrl('private/' + doc.name, 60)
    console.log(data.signedUrl)
    if (typeof window !== "undefined"){
      window.location.href = data.signedUrl
    }
  }
  useEffect(() => {
    getBucket()
  }, [])

  return (
    <>
      <DashboardLayout current="Documents">
      {!isLoading &&
      <>
        <div className="px-4 sm:px-6 lg:px-8 mt-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Mandatory documents</h1>
              <p className="mt-2 text-sm text-gray-700">
                The list of all the documents needed to complete your subscription.
              </p>
            </div>
          </div>
          <div className="mt-2 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Type
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                          <span className="sr-only">Download</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {documents.map((document) => (
                        <tr key={document.email}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {document.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{document.metadata.mimetype.split("/").pop()}</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <button className="text-primary-600 hover:text-primary-900"
                              onClick={e => (e.preventDefault(), downloadDocument(document))}>
                              Download<span className="sr-only"></span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flow-root mt-10 px-4 sm:px-6 lg:px-8 ">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Subscription Steps</h1>
              <p className="mt-2 text-sm text-gray-700">
                The list of all the documents needed to complete your subscription.
              </p>
            </div>
          </div>
          <ul role="list" className="mt-4 -mb-8 px-10">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-8">
                  {eventIdx !== timeline.length - 1 ? (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={classNames(
                          event.iconBackground,
                          'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                        )}
                      >
                        <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          {event.content}
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <button
                          type="button"
                          className="inline-flex items-center rounded border border-transparent bg-primary-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                          onClick={() => console.log("halo")}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div></>}
      </DashboardLayout>
    </>
  )
}


import { NavLink } from "react-router-dom";
const complaints = [
  {
    idCode: "1001",
    platform: "Instagram",
    url: "https://www.instagram.com/p/DCCMn4nof3x/",
    date: "14-10-1996",
  },
  {
    idCode: "1002",
    platform: "Facebook",
    url: "https://www.instagram.com/p/DCCMn4nof3x/",
    date: "14-10-1996",
  },
  {
    idCode: "1003",
    platform: "Twitter",
    url: "https://www.instagram.com/p/DCCMn4nof3x/",
    date: "14-10-1996",
  },
  {
    idCode: "1004",
    platform: "YouTube",
    url: "https://www.instagram.com/p/DCCMn4nof3x/",
    date: "14-10-1996",
  },
  // More complaint...
];
export default function Generatenotice() {
  return (
    <>
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-medium text-gray-500">
                  Generate Notice
                </h2>
              </div>
              <div className="border-b border-gray-900/10 p-6">
                <div className="sm:flex sm:items-center">
                  <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                      Generate Notice
                    </h1>
                    <p className="mt-2 text-sm text-gray-700">
                      A list of all complaints to be generated in notice format
                      that including their id code, platform, url and date.
                    </p>
                  </div>
                  <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <NavLink
                      to="/add-complaint"
                      className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Add Complaint
                    </NavLink>
                  </div>
                </div>
                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                ID Code
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Platform
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                URL
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Date
                              </th>
                              <th
                                scope="col"
                                className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                              >
                                <span className="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {complaints.map((complaint) => (
                              <tr key={complaint.email}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {complaint.idCode}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {complaint.platform}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <a href={complaint.url} target="_blank">
                                    {" "}
                                    URL
                                  </a>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {complaint.date}
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  <a
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-900"
                                  >
                                    View
                                    <span className="sr-only">
                                      , {complaint.name}
                                    </span>
                                  </a>
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

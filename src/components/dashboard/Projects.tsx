import axios from "axios";
import { useState, useEffect } from "react";
import AlertComponent from "./Alert";
export default function ProjectsComponent() {
  const [project, setProject] = useState([]);

  useEffect(() => {
 
    getProject()
  }, []);




  async function getProject(){
   setInterval(()=>{
    axios
    .get("https://api.iran.liara.ir/v1/projects", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      return setProject(res.data.projects);
    });
   },12000)
  }


  const allProjects = project.map((value, index) => {
    return value;
  });

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                  <AlertComponent/>

      <div className="flex flex-col mt-5">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-xl font-bold font-semibold text-gray-700 dark:text-gray-200">
                    Applications
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pt-3">
                    Add Application, edit and more.
                  </p>
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <a
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      href="#"
                    >
                      View all
                    </a>
                    <a
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      href="#"
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      New App
                    </a>
                  </div>
                </div>
              </div>
              {/* End Header */}
              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Appname
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      <div className="flex items-center gap-x-2 justify-items-center">
                        <span className="text-xs justify-center items-center  font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          VERSIOn
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left px-auto">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Status
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 justify-items-center">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Plan
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left w-48 ">
                      <div className="flex items-center gap-x-2 justify-self-center">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          RESOURCES
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left w-48">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Created At
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left w-48">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Auto Scale
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-right" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {allProjects.map((value:any, index) => {
                    return (
                      <tr key={index}>
                        <td className="h-px w-px whitespace-nowrap pl-5">
                          <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <img
                                className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                                src="https://www.pikpng.com/pngl/m/430-4307964_docker-and-kubernetes-logos-point-of-sales-icon.png"
                                alt="Image Description"
                              />
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                  {value.project_id}
                                </span>
                                <span className="block text-sm text-gray-500 pt-1">
                                  Type: {value.type}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                              {}
                            </span>
                            <span className="block text-sm text-gray-500">
                              {value._id}
                            </span>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              <svg
                                className="w-2.5 h-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              {value.status}
                            </span>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-blue-500 dark:bg-green-900 dark:text-green-200">
                              {value.planID.toUpperCase()}
                            </span>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <span className="text-xs text-gray-500">1/5</span>
                              <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                <div
                                  className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                                  role="progressbar"
                                  style={{ width: "25%" }}
                                  aria-valuenow={25}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-500">
                              {value.created_at.split("T")}
                            </span>
                          </div>
                        </td>

                        <td className="h-px w-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <>
                              <input
                                type="checkbox"
                                id="hs-basic-usage"
                                className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                              />
                              <label
                                htmlFor="hs-basic-usage"
                                className="sr-only"
                              >
                                switch
                              </label>
                            </>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* End Table */}
              {/* Footer */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {allProjects.length}
                    </span>{" "}
                    results
                  </p>
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                      Prev
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      Next
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* End Footer */}
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div>
  );
}

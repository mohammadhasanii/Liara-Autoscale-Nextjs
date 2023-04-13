import { useRouter } from "next/router";
import  {BiLogOutCircle} from 'react-icons/bi'
import {useState,useEffect} from 'react'

export default function NavbarComponent() {
  const [image,setImage]:any=useState("")
  const [fullName,setFullName]:any=useState("")
  const router = useRouter();

  function logOut(){
    localStorage.clear()
    router.push('/auth/login')

  }

  useEffect(()=>{
    const data=localStorage.getItem('image')
    const fullName=localStorage.getItem('fullname')
    setImage(data)
    setFullName(fullName)
    console.log(image)
  },[])
      return <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 border-b border-gray-700 text-sm py-2.5 sm:py-4">
      <nav
        className="max-w-[85rem] flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="mr-5 md:mr-8">
          <a
          title="Lira Autoscaling"
            className="flex-none text-xl font-semibold text-white"
            href="#"
            aria-label="Brand"
          >
             Liara
            
          </a>
        </div>
        <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs"
            >
              <svg
                className="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
          <div className="hidden mx-auto sm:block">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
          </div>
          <div className="flex flex-row items-center justify-end gap-2">
          



          <button
          onClick={()=>logOut()}
  type="button"
  className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
  href=""
>
<BiLogOutCircle width={10} color='#ff0000' />
</button>

          


            <div
              className="hs-dropdown relative inline-flex"
              data-hs-dropdown-placement="bottom-right"
            >
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium hover:bg-white/[.2] text-white align-middle focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-xs"
              >
                <img
                  className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                  src={image}
                  alt="Image Description"
                />
              </button>

            </div>
          </div>
        </div>
      </nav>
    </header>
    
}
import { useState,useEffect } from "react";
import axios from 'axios'
import {RiRadioButtonLine} from 'react-icons/ri'
export default function ResourceComponent () {

      
      const [project,setProject]=useState([])


      useEffect(()=>{
          fuck()
          
      },[])

      function fuck(){
            setInterval(()=>{
                  axios.get('http://localhost:4000/performance')
                  .then(function(res){
                        setProject(res.data.a)
                  })
            },9000)
      }
      console.log(project)

      const allProjects = project.map((value:any, index) => {
            let colorName="blue"
            if(value.loadTime <50){
                  colorName="blue"
            }else if (value.loadTime <70 && value.loadTime>50) {
                  colorName="orange"
            }else if (value.loadTime >75) {
                  colorName="red"
            }

            return <>
            
                 <div key={index} className="flex  flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
           
            <div className="inline-flex justify-center items-center">
                  
              <RiRadioButtonLine className="animate-bounce " color="#22c55e" width={5}/> 
              <span className="text-xs font-semibold uppercase pl-2 text-gray-600 dark:text-gray-400">
              {value.appName}
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-3xl  sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
                {value.loadTime}%
              </h3>
            </div>
            <dl className="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
              <dt className="px-4">
                <span className="text-red-600">
                  <svg
                    className="inline-block w-4 h-4 self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                    />
                  </svg>
                  <span className="inline-block text-lg"> {value.cpu} %</span>
                </span>
                <span className="block  text-lg text-gray-500">CPU</span>
              </dt>


              <dd className="px-4">
                   <span className="text-red-600">
                  <svg
                    className="inline-block w-4 h-4 self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                    />
                  </svg>
                  <span className="inline-block  text-lg">{value.memory}%</span>
                </span>
                <span className="block text-lg text-gray-500">RAM</span>
              </dd>
              
            </dl>
            <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
  <div
    className={`flex flex-col justify-center overflow-hidden bg-${colorName.toString()}-500`}
    role="progressbar"
    style={{ width: `${value.loadTime}%` }}
    aria-valuenow={25}
    aria-valuemin={0}
    aria-valuemax={100}
  />
</div>

          </div>
            </>
          });


    return  <>
 
      <div className="max-w-[85rem] px-4  sm:px-6 lg:px-8 lg:pb-14  mx-auto">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  

      
    {allProjects}




        </div>
   
      </div>
     
    </>
    
}
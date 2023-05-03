import React from 'react'
import Image from 'next/image'

const dropdown = () => {
  return (
    <div>


            <li class="flex relative group">
              <a href="#" class="mr-1">Services</a> 
              <i class="fa-solid fa-chevron-down fa-2xs pt-3"></i>
              
              <ul class="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">Webdesign</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">Digital marketing</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">SEO</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">Ad campaigns</a></li>
                <li class="text-sm hover:bg-slate-100 leading-8"><a href="#">UX Design</a></li>
              </ul>
              
            </li>



                <a href="https://flowbite.com/" className="flex items-center">
                <Image src="/logodark.png" alt="logo" width={60} height={50} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-4">
                D NEEDS
                </span>
                </a> 





                <div class="group inline-block relative">
                    <button class=" text-gray-700 font-semibold  px-4 rounded inline-flex items-center">
                      <span class="mr-1">Dropdown</span>
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                      </svg>
                    </button>
                    <ul class="group-hover:block bg-white absolute hidden text-gray-700 pt-1 ">
                      <li class="">
                        <a
                          class="rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          One
                        </a>
                      </li>
                      <li class="">
                        <a
                          class=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Two
                        </a>
                      </li>
                      <li class="">
                        <a
                          class="rounded-b  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Three is the magic number
                        </a>
                      </li>
                    </ul>
                  </div>


    </div>
  )
}

export default dropdown
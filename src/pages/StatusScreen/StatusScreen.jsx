import React from "react";

const StatusScreen = () => {
  return (
    <div class="p-4 max-w-md mx-auto pt-20 flow-root">
      <ul role="list" class="-mb-8">
        <li>
          <div class="relative pb-8">
            <span
              class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-800"
              aria-hidden="true"
            ></span>
            <div class="flex items-center justify-center space-x-3">
              <div className=" z-10">
                <span class="h-16 w-16 rounded-full bg-green-400 flex items-center justify-center ring-8 ring-white">
                  <svg
                    class="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                </span>
              </div>
              <div class="flex min-w-0 flex-1 justify-between items-center space-x-4 pt-1.5">
                <div>
                  <p class="text-2xl text-gray-500">
                      En proceso de {" "}
                    <a href="#" class="font-medium text-2xl text-gray-900">
                      Empaque
                    </a>
                  </p>
                </div>
                <div class="whitespace-nowrap text-right text-sm text-gray-500">
                  <time datetime="2020-09-20">Sep 20</time>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="relative pb-8">
            <span
              class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-800"
              aria-hidden="true"
            ></span>
            <div class="flex items-center justify-center space-x-3">
              <div className=" z-10">
                <span class="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center ring-8 ring-white">
                  <svg
                    class="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                  </svg>
                </span>
              </div>
              <div class="flex min-w-0 flex-1 justify-between items-center space-x-4 pt-1.5">
                <div>
                  <p class="text-2xl text-gray-500">
                    Enviando a tu  {" "}
                    <a href="#" class="font-medium text-2xl text-gray-900">
                      Domicilio
                    </a>
                  </p>
                </div>
                <div class="whitespace-nowrap text-right text-sm text-gray-500">
                  <time datetime="2020-09-20">Sep 20</time>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="relative pb-8">
      
            <div class="flex items-center justify-center space-x-3">
              <div className=" z-10">
                <span class="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center ring-8 ring-white">
                  <svg
                    class="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div class="flex min-w-0 flex-1 justify-between items-center space-x-4 pt-1.5">
                <div>
                  <p class="text-2xl text-gray-500">
                   Entregado con {" "}
                    <a href="#" class="font-medium text-2xl text-gray-900">
                      Éxito
                    </a>
                  </p>
                </div>
                <div class="whitespace-nowrap text-right text-sm text-gray-500">
                  <time datetime="2020-09-20">Sep 20</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StatusScreen;

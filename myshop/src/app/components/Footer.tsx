import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-500">
      <div className="container mx-auto p-6 ">
        <div className="mb-2 grid place-content-center p-6">
          <Link href="#">
            <img
              src="/Group.svg"
              className="h-20 w-24 "
              alt="Doueihy Logo"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 className="mb-2 text-lg font-bold uppercase text-white">
              CATEGORIES
            </h2>
            <ul className="text-sm font-normal leading-5 text-white ">
              <li>
                <a href="#" className="hover:underline ">
                  Baklava
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline ">
                  Kashta
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Maamoul
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline ">
                  No sugar
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vegan
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold uppercase text-white ">
              company
            </h2>
            <ul className="text-sm font-normal leading-5 text-white">
              <li>
                <a href="#" className="hover:underline ">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline ">
                  Branches
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold uppercase text-white dark:text-white">
              reach on us
            </h2>
            <ul className="text-sm font-normal leading-5 text-white">
              <li>
                <a href="#" className="hover:underline ">
                  {' '}
                  hello@jerdoueihy.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  +961 3 543 765
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold uppercase text-white dark:text-white">
              information
            </h2>
            <ul className="text-sm font-normal leading-5 text-white">
              <li>
                <a href="#" className="hover:underline ">
                  Term &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline ">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refunds &amp; Return Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold uppercase text-white dark:text-white">
              follow us on
            </h2>
            <ul className="flex text-sm font-normal leading-5 text-white dark:text-gray-400">
              <li className="mr-2">
                <a href="#" className="text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 32 28"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
              </li>
              <li className="mr-2">
                <a href="#" className="text-white ">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram page</span>
                </a>
              </li>
              <li className="mr-2">
                <a href="#" className="text-white ">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
              </li>
              <li className="mr-2">
                <a href="#" className="font-extralight text-white">
                  <svg
                    className="h-6 w-6 font-extralight"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    {' '}
                    <path
                      d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                      fill="white"
                    ></path>{' '}
                  </svg>
                  <span className="sr-only">Whatsup page</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="grid justify-end self-end">
            <img src="/visa.svg" className="h-6 w-20 " alt="Via Logo" />
          </div>
        </div>
      </div>
      <div className="grid place-content-center bg-white ">
        <p className="text-sm font-light">
          © Fouad Jer Douaihy 1919. All Rights Reserved. Website by Apperture.
        </p>
      </div>
    </footer>
  );
}

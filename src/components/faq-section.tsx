/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/zxQaZGF30kw
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
export function FaqSection() {
  return (
    <div key="1" className="bg-white max-w-7xl mx-auto p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-4xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
          <div className="space-y-4">
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Purus aptent blandit magna eu?
                <ChevronUpIcon className="float-right" />
              </summary>
              <p className="mt-2 text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarks grove right at the coast
              </p>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Potenti laoreet ipsum ridiculus curae?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Viverra efficitur porttitor dictum cursus?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Eget aenean est torquent ullamcorper?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Vivamus fermentum sociosqu elit curabitur?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Etiam aliquet integer consequat rutrum?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
          </div>
        </div>
        <div>
          <h3 className="text-xl text-gray-800 font-semibold mb-3">COMMON QUESTIONS</h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
          <div className="space-y-4">
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Purus aptent blandit magna eu?
                <ChevronUpIcon className="float-right" />
              </summary>
              <p className="mt-2 text-gray-600">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarks grove right at the coast
              </p>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Potenti laoreet ipsum ridiculus curae?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Viverra efficitur porttitor dictum cursus?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Eget aenean est torquent ullamcorper?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Vivamus fermentum sociosqu elit curabitur?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
            <details className="p-4 bg-gray-100 rounded-md">
              <summary className="font-semibold cursor-pointer">
                Etiam aliquet integer consequat rutrum?
                <ChevronDownIcon className="float-right" />
              </summary>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}

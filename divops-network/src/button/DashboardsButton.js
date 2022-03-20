import CustomLink from "../components/CustomLink";

function DashboardsButton() {
  return (
    <>
        <button
            className="btn justify-right border-double border-2 border-shadowed border-teal-300 hover:border-teal-100 text-teal-200 hover:text-teal-100 hover:border-shadowed bg-purple-800"
            to="/dashboards" >
                Dashboards 
            <svg
                className="flex justify-center w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-3"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                />
            </svg>
        </button>
      </>
  )
}

export { DashboardsButton };

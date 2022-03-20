import CustomLink from "../components/CustomLink"

function OrbIcon() {
  return (
    <div>
      <CustomLink href="/" className="flex flex-row left border-solid hover:border-teal-500 dark:hover:border-ndblue-100 cursor-pointer">
        <svg
          className="w-8 h-8"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="21.152%"
              cy="86.063%"
              fx="21.152%"
              fy="86.063%"
              r="79.941%"
              id="header-logo"
            >
              <stop stopColor="#E6F0FD" offset="0%" />
              <stop stopColor="#1FD6AA" offset="25.871%" />
              <stop stopColor="#7C4DFF" offset="100%" />
            </radialGradient>
          </defs>
          <rect
            width="32"
            height="32"
            rx="16"
            fill="url(#header-logo)"
            fillRule="nonzero"
          />
        </svg>
      </CustomLink>
    </div>
  )
}

export default OrbIcon

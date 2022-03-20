import CustomLink from "./CustomLink"
// import WindowWidth from "./WindowWidth"

const Nav = () => {
  return (
    <nav>
      {/* <div className="pl-2">
        <WindowWidth />
      </div> */}
      <CustomLink className="pl-2" href="/dashboards/admin">
        <a>Admin</a>
      </CustomLink>
      <CustomLink href="/dashboards/blogger">
        <a>Blog</a>
      </CustomLink>
      <CustomLink href="/dashboards/crypto">
        <a>Crypto</a>
      </CustomLink>
      <CustomLink href="/dashboards/developer">
        <a>Developer</a>
      </CustomLink>

      <CustomLink href="https://github.com/mikecalendo/divops/issues">
        <a>Issues</a>
      </CustomLink>
      <CustomLink href="/ssg">
        <a>SSG</a>
      </CustomLink>
      <CustomLink href="/ssr">
        <a>SSR</a>
      </CustomLink>
      <style jsx>
        {`
          a {
            margin-right: 20px;
          }
        `}
      </style>
    </nav >
  )
}

export default Nav

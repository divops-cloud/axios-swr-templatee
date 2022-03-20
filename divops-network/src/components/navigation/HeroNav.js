import CustomLink from "../CustomLink"
import WindowWidth from "../WindowWidth"

const HeroNav = () => {
  return (
    <nav>
      
      <CustomLink className="pl-2" href="/dashboards/admin">
        <a>Admin</a>
      </CustomLink>
      <CustomLink href="/dashboards/blogger">
        <a>Blog</a>
      </CustomLink>
      <CustomLink href="/dashboards/crypto">
        <a>Crypto</a>
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

export default HeroNav

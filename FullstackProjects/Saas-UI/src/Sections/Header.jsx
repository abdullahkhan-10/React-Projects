import { Link as LinkScroll } from "react-scroll"

// we will destractured the title and will recieve here as props.
const NavLink = ({ title}) =>(
    <LinkScroll>
    {/* Will render the title here */}
      {title}
    </LinkScroll>
)
const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border border-red-400 py-10">
        <div className="border border-blue-400 container flex items-center h-14 max-lg:px-5">
            <a className="lg:hidden flex-1 cursor-pointer z-2"> 
                <img src="/images/xora.svg" width={115} height={55} alt="log" />
            </a>

            <div className="w-full border-2 border-amber-400">
                <nav>
                    <ul className="flex max-lg:block max-lg:px-12">
                        {/* left side  */}
                        <li className="nav-li">
                            <NavLink title="features"/>
                            <div className="dot"/>
                            <NavLink title="pricing"/>
                        </li>

                        {/* Midlle */}
                        <li className="nav-logo">
                            <LinkScroll>
                                <img src="/images/xora.svg" width={160} height={55} alt="logo" />
                            </LinkScroll>
                        </li>

                        {/* right side */}
                        <li className="nav-li">
                            <NavLink title="faq"/>
                            <div className="dot"/>
                            <NavLink title="download"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
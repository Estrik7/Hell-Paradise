import Nav_li_element from "./Nav_li_element"
function Nav() {
    return <>
        <nav>
            <ul className="nav_list_container">
                <Nav_li_element 
                    text={"hombre"}
                    href={"/hombre"}
                />
                <Nav_li_element 
                    text={"mujer"}
                    href={"/mujer"}
                />
                <Nav_li_element 
                    text={"cosas"}
                    href={"/cosas"}
                />
                <Nav_li_element 
                    text={"tiendas"}
                    href={"/tiendas"}
                />
                <Nav_li_element 
                    text={"activismo"}
                    href={"/activismo"}
                />
                <li className="sale">
                    <a href="/sale">sale</a>
                    <ul>
                        <Nav_li_element 
                            text={"hombre"}
                            href={"/sale/hombre"}
                        />
                        <Nav_li_element 
                            text={"mujer"}
                            href={"/sale/activismo"}
                        />
                    </ul>
                </li>
            </ul>
        </nav>
    </>
}

export default Nav;
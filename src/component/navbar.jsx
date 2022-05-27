import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
  
    render() {
        return (
            <div className="navbar navbar-expand-lg bg-[#0f172a] px-4 px-lg-5 py-3 py-lg-0">
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-warning m-0"><i className="fa fa-utensils me-3"></i>Threefiva</h1>
                </a>
                {/* show and hide menu */}

                {/* menu */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">

                                <Link
                                    className="mx-2 px-3 py-3 nav-item nav-link active"
                                    to="/home">
                                    HOME
                                </Link>

                                <Link
                                    className="mx-2 px-3 py-3 nav-item nav-link"
                                    to="/user">
                                    USER
                                </Link>

                                <Link
                                    className="mx-2 px-3 py-3 nav-item nav-link"
                                    to="/produk">
                                    PRODUK
                                </Link>

                                <Link
                                    className="mx-2 px-3 py-3 nav-item nav-link"
                                    to="/histori">
                                    HISTORI
                                </Link>

                                <Link
                                    className="mx-2 px-3 py-3 nav-item nav-link"
                                    to="/testimoni">
                                    TESTIMONI
                                </Link>

                                <Link
                                    className="mx-2 px-3 py-3 nav-item nav-link"
                                    to="/kontak">
                                    KONTAK PERSONAL
                                </Link>
                        
                    </div>
                </div >
            </div>
        )
    }
}
export default Navbar;
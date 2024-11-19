export const Navbar = () => {


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Sports news</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Basketball</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">Tennis</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Soccer</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>

    )

}
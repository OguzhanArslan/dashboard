import Button from "@mui/material/Button";

function App() {
    return (
        <div>
            <header className="header">
                <a href="#" class="header__logo">
                    <i className="icon-logo"></i>
                </a>
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <a
                            href="#"
                            className="header__menu-link header__menu-link--active"
                        >
                            <i className="icon-home"></i>
                        </a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="header__menu-link">
                            <i className="icon-discount"></i>
                        </a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="header__menu-link">
                            <i className="icon-dashboard"></i>
                        </a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="header__menu-link">
                            <i className="icon-message"></i>
                        </a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="header__menu-link">
                            <i className="icon-notification"></i>
                        </a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#" className="header__menu-link">
                            <i className="icon-settings"></i>
                        </a>
                    </li>
                </ul>
                <a href="#" className="header__logout">
                    <i className="icon-logout"></i>
                </a>
            </header>
        </div>
    );
}

export default App;

import "../CSS/tailwind/aside.css";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Aside = () => {
  return (
    <div>
      <NavBar />
      <div className="aside is-placed-left is-expanded">
        <div className="aside-tools">
          <div>
            Admin <b className="font-black">One</b>
          </div>
        </div>

        <div className="menu is-menu-main">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li className="active">
              <Link to="/dashboard">
                <span className="icon">
                  <i className="mdi mdi-desktop-mac"></i>
                </span>
                <span className="menu-item-label">Dashboard</span>
              </Link>
            </li>
          </ul>
          <p className="menu-label">Examples</p>
          <ul className="menu-list">
            <li className="--set-active-tables-html">
              <Link to="/table">
                <span className="icon">
                  <i className="mdi mdi-table"></i>
                </span>
                <span className="menu-item-label">Users</span>
              </Link>
            </li>

            {/* <li className="--set-active-profile-html">
              <Link to="/profile">
                <span className="icon">
                  <i className="mdi mdi-account-circle"></i>
                </span>
                <span className="menu-item-label">Profile</span>
              </Link>
            </li>

            <li>
              <a className="dropdown">
                <span className="icon">
                  <i className="mdi mdi-view-list"></i>
                </span>
                <span className="menu-item-label">Submenus</span>
                <span className="icon">
                  <i className="mdi mdi-plus"></i>
                </span>
              </a>
              <ul>
                <li>
                  <a href="#void">
                    <span>Sub-item One</span>
                  </a>
                </li>
                <li>
                  <a href="#void">
                    <span>Sub-item Two</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="menu-label">About</p>
          <ul className="menu-list">
            <li>
              <a
                href="https://justboil.me"
                target="_blank"
                className="has-icon"
              >
                <span className="icon">
                  <i className="mdi mdi-credit-card-outline"></i>
                </span>
                <span className="menu-item-label">Premium Demo</span>
              </a>
            </li>
            <li>
              <a
                href="https://justboil.me/tailwind-admin-templates"
                className="has-icon"
              >
                <span className="icon">
                  <i className="mdi mdi-help-circle"></i>
                </span>
                <span className="menu-item-label">About</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/justboil/admin-one-tailwind"
                className="has-icon"
              >
                <span className="icon">
                  <i className="mdi mdi-github-circle"></i>
                </span>
                <span className="menu-item-label">GitHub</span>
              </a>
  </li>*/}
          </ul>
        </div>
      </div>
    </div>
  );
};

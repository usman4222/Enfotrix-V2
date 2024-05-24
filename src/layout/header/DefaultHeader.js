import Link from "next/link";
import { DaskTopMenusMenus } from "./Menus";

const DefaultHeader = () => {
  return (
    <div id="sticky-header" className="consen_nav_manu header____">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a className="logo_img" title="enfotrix">
                  <img src="assets/images/Logo8.png" alt="logo" />
                </a>
              </Link>
              <Link legacyBehavior href="/">
                <a className="main_sticky" title="enfotrix">
                  <img src="assets/images/Logo8.png" alt="logo" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-9 pl-0 pr-0">
            <nav className="consen_menu">
              <DaskTopMenusMenus />
              <div className="header-button">
                <Link legacyBehavior href="https://tour-and-travel-website-1.vercel.app/">
                  <a target="_blank" rel="noopener noreferrer">Visa Consultancy</a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DefaultHeader;

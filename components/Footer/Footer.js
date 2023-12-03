import { createNewElement } from "../../utils/CreateNewElement.js";

export function Footer() {
  const root = document.querySelector("#root");
  const footer = createNewElement("footer", root, "footer");
  const footerNav = createNewElement("ul", footer, "footer-nav");
  const homeNav = createNewElement("li", footerNav, "footer-links");
  const homeNavLink = createNewElement("a", homeNav);
  setAttributes(homeNavLink, "home");
  // homeNavLink.setAttribute("href", "#title");
  // homeNavLink.setAttribute("aria-label", "navigation link home");
  // homeNavLink.setAttribute("data-js", "home-page");
  homeNavLink.innerHTML = `<svg
                    class="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    viewBox="0 0 256 256"
                    xml:space="preserve"
                    >
                    <g
                    style="
                        stroke: none;
                        stroke-width: 0;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill-rule: nonzero;
                        opacity: 1;
                    "
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                    <path
                        d="M 75.847 85.108 H 14.153 c -1.657 0 -3 -1.343 -3 -3 V 41.183 c 0 -1.657 1.343 -3 3 -3 s 3 1.343 3 3 v 37.925 h 55.693 V 41.183 c 0 -1.657 1.343 -3 3 -3 s 3 1.343 3 3 v 40.925 C 78.847 83.766 77.504 85.108 75.847 85.108 z"
                        style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill-rule: nonzero;
                        opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                    />
                    <path
                        d="M 86.497 39.099 c -0.58 0 -1.167 -0.168 -1.684 -0.52 L 45 11.52 L 5.187 38.58 c -1.372 0.934 -3.237 0.575 -4.167 -0.794 c -0.932 -1.371 -0.576 -3.236 0.794 -4.167 l 41.5 -28.207 c 1.019 -0.692 2.355 -0.692 3.373 0 l 41.5 28.207 c 1.37 0.931 1.726 2.797 0.795 4.167 C 88.4 38.639 87.457 39.099 86.497 39.099 z"
                        style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill-rule: nonzero;
                        opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                    />
                    <path
                        d="M 75.847 19.197 c -1.657 0 -3 -1.343 -3 -3 v -4.812 h -7.626 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 10.626 c 1.657 0 3 1.343 3 3 v 7.812 C 78.847 17.854 77.504 19.197 75.847 19.197 z"
                        style="
                        stroke: none;
                        stroke-width: 1;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill-rule: nonzero;
                        opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                    />
                    </g>
                    </svg>
                    `;
  const bookmarkNav = createNewElement("li", footerNav, "footer-links");
  const bookmarkNavLink = createNewElement("a", bookmarkNav);
  setAttributes(bookmarkNavLink, "bookmark");
  // bookmarkNavLink.setAttribute("href", "#title");
  // bookmarkNavLink.setAttribute("aria-label", "navigation link bookmarks");
  // bookmarkNavLink.setAttribute("data-js", "bookmark-page");
  bookmarkNavLink.innerHTML = `<svg
                        class="nav-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        >
                        <title>bookmark</title>
                        <path
                        d="M19.875 23.25h-1.652l-6.222-5.382-6.213 5.382h-1.663v-22.5h15.75zM5.625 2.25v19.156l6.375-5.522 6.375 5.514v-19.149z"
                        ></path>
                        </svg>
                        `;
  const profileNav = createNewElement("li", footerNav, "footer-links");
  const profileNavLink = createNewElement("a", profileNav);
  setAttributes(profileNavLink, "profile");
  // profileNavLink.setAttribute("href", "#title");
  // profileNavLink.setAttribute("aria-label", "navigation link user profile");
  // profileNavLink.setAttribute("data-js", "profile-page");
  profileNavLink.innerHTML = `<svg
                        class="nav-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        >
                        <title>user</title>
                        <path
                        d="M19.294 16.109l-3.414-2.219 1.287-2.359c0.288-0.519 0.457-1.137 0.458-1.796v-3.735c0-2.9-2.351-5.25-5.25-5.25s-5.25 2.351-5.25 5.25v0 3.735c0.001 0.658 0.17 1.277 0.468 1.815l-0.010-0.019 1.287 2.359-3.414 2.219c-1.033 0.676-1.706 1.828-1.706 3.137 0 0.002 0 0.005 0 0.007v-0 3.997h17.25v-3.997c0-0.002 0-0.005 0-0.007 0-1.309-0.673-2.461-1.692-3.128l-0.014-0.009zM19.5 21.75h-14.25v-2.497c0-0.001 0-0.003 0-0.004 0-0.785 0.404-1.477 1.015-1.877l0.009-0.005 4.578-2.976-1.952-3.578c-0.173-0.311-0.274-0.682-0.275-1.077v-3.735c0-2.071 1.679-3.75 3.75-3.75s3.75 1.679 3.75 3.75v0 3.735c-0 0.395-0.102 0.766-0.281 1.089l0.006-0.012-1.952 3.579 4.578 2.976c0.62 0.406 1.024 1.097 1.024 1.882 0 0.001 0 0.003 0 0.004v-0z"
                        ></path>
                        </svg>
                        `;
  function setAttributes(element, location) {
    element.setAttribute("href", "#title");
    element.setAttribute("aria-label", "navigation link" + location);
    element.setAttribute("data-js", location + "-page");
  }
  return footer;
}

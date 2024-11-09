import {
  BurgerIcon,
  CartIcon,
  FavoriteIcon,
  UserIcon,
} from "../../helpers/icons";

import logo from "../../assets/logo.svg";
import { useState } from "react";

const dropdownMenus = [
  {
    id: 1,
    name: "Men",
    dropdownClass: "dropdown-content",
    additionalClass: "w-[200vw] max-w-[50.25rem]",
    title: "Menu 1",
    items: [
      { name: "New in", link: "#" },
      { name: "Special Price", link: "#" },
    ],
  },
  {
    id: 2,
    name: "Women",
    dropdownClass: "dropdown-bottom",
    additionalClass: "w-[200vw] max-w-[46rem]",
    title: "Menu 2",
    items: [
      { name: "New in", link: "#" },
      { name: "Special Price", link: "#" },
    ],
  },
  {
    id: 3,
    name: "Exclusive",
    dropdownClass: "dropdown-bottom",
    additionalClass: "w-[200vw] max-w-[40.25rem]",
    title: "Menu 3",
    items: [
      { name: "Services", link: "#" },
      { name: "FAQ", link: "#" },
    ],
  },
  //   {
  //     id: 4,
  //     name: "Accessories",
  //     title: "Menu 4",
  //     items: [
  //       { name: "Blog", link: "#" },
  //       { name: "Careers", link: "#" },
  //       { name: "Testimonials", link: "#" },
  //     ],
  //   },
  {
    id: 4,
    name: "#Coming soon",
    dropdownClass: "dropdown-bottom",
    additionalClass: "w-[200vw] max-w-[34rem]",
    title: "Menu 4",
    items: [
      { name: "Privacy Policy", link: "#" },
      { name: "Terms of Service", link: "#" },
    ],
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="navbar bg-new-black sticky top-0 z-50 p-0">
      <div className="navbar-start">
        {/* <img src={logo} alt="Logo" width="320px" /> */}
        <a href="" className="text-[40px] aureli px-4 decoration-wavy">
          auréli
        </a>
      </div>
      <div className="navbar-center flex gap-2 bg-zinc-900">
        {dropdownMenus.map((menu, index) => (
          <div
            className={`dropdown ${menu.dropdownClass} dropdown-hover`}
            key={menu.id}
            onMouseEnter={() => setOpenMenu(index)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-none group"
            >
              <span
                className={`relative inline-block text-white 
                           before:absolute before:-bottom-1 before:left-0 
                           before:w-0 before:h-[2px] before:bg-white 
                           before:transition-all before:duration-300 
                           ${
                             openMenu === index
                               ? "before:w-full"
                               : "group-hover:before:w-full"
                           }`}
              >
                {menu.name}
              </span>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-md dropdown-content bg-zinc-900 rounded-box z-[1] h-screen max-h-96 p-2 shadow rounded-t-none border-t-4 border-base-100 ${menu.additionalClass}`}
            >
              {menu.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="navbar-end bg-zinc-900">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <UserIcon />
          </div>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FavoriteIcon />
            <span className="badge badge-xs badge-primary indicator-item">
              3
            </span>
          </div>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <CartIcon />
            <span className="badge badge-xs badge-primary indicator-item">
              8
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

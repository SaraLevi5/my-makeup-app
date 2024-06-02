import ROUTES from "../../../routes/ROUTES";

const alwaysLinks = [
  { to: ROUTES.HOME, children: "Home" },
  { to: ROUTES.ABOUT, children: "About" },
  { to: ROUTES.GALLERY, children: "Gallery" },
  { to: ROUTES.SERVICES, children: "Services" },
  { to: ROUTES.CONTACT, children: "Contact" },
];

const loggedInLinks = [
  { to: ROUTES.MAKEUPTIPS, children: "Makeup Tips" },
  { to: ROUTES.FAVORITE, children: "Favorites" },
];

const loggedOutLinks = [
  { to: ROUTES.LOGIN, children: "Login" },
  { to: ROUTES.REGISTER, children: "Register" },
];

const adminLinks = [{ to: ROUTES.EDITGALLERY, children: "Edit Gallery" }];

export { alwaysLinks, loggedInLinks, loggedOutLinks, adminLinks };

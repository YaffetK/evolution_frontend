export interface NavOption {
  id: number;
  name: string;
  path: string;
}

const NavItems: NavOption[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "profile",
    path: "profile",
  },
  {
    id: 3,
    name: "about",
    path: "about",
  },
];

export default NavItems;

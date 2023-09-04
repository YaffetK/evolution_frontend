export interface NavOption {
  id: number;
  path: string;
}

const NavItems: NavOption[] = [
  {
    id: 1,
    path: "/",
  },
  {
    id: 2,
    path: "profile",
  },
  {
    id: 3,

    path: "about",
  },
];

export default NavItems;

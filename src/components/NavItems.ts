export interface NavOption {
  id: number;
  url: string;
}

const NavItems: NavOption[] = [
  {
    id: 1,
    url: "home",
  },
  {
    id: 2,
    url: "profile",
  },
  {
    id: 3,
    url: "about",
  },
];

export default NavItems;

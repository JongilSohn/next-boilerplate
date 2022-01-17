import { atom } from "recoil";

export interface CategoryDepsType {
  [key: string]: any;
  test?: string;
}

const categoryDepsState = atom<CategoryDepsType>({
  key: `depsState`,
  default: {
    test: "test",
  },
});

export default categoryDepsState;

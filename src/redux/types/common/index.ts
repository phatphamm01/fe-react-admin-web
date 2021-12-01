export interface ICategory {
  _id: string;
  name: string;
  parent: string;
  level: 1 | 2 | 3;
  path: string;
  slug: string;
  children?: Array<ICategory>;
}
export type ICategoies = Array<ICategory>;

export interface ITag {
  _id: string;
  type: string;
  name: string;
  children: Array<{ _id: string; type: string; name: string }>;
}
export type ITags = Array<ITag>;

export interface ISize {
  _id: string;
  type: string;
  name: string;
  children: Array<{ _id: string; type: string; name: string }>;
}
export type ISizes = Array<ISize>;

export interface IOption {
  _id: string;
  type: string;
  name: string;
}
export type IOptions = Array<IOption>;

import { DataMenu, DataShape } from "./data"

export type Observer = ({ render: () => void } & HTMLElement);

export interface AppFood {
  menu: DataMenu[];
  shape: DataShape[];
}

export enum StarFood {
  GET = "GET",
}

export interface GetStarFood {
  type: StarFood.GET;
  payload: {
    menu: DataMenu[];
    shape: DataShape[];
  };
}

export type Action = GetStarFood;

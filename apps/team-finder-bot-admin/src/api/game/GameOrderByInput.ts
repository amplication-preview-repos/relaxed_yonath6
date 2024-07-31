import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  createdAt?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  platform?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

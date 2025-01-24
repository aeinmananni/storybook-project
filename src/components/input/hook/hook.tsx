import { StatusType } from "../model";

export const useChangeColorInput = (status: StatusType) => {
  switch (status) {
    case "success":
      return "#26b319";
    case "error":
      return "#f20a29";
    case "warning":
      return "#d4d415";
    case "default":
      return "#c5d9cf";
    default:
      return "#c5d9cf";
  }
};

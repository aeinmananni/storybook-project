import { VarientType } from "./model";

export const useChangeBackgroundColor = (varient?: VarientType) => {
  let backgroundColor = "";
  switch (varient) {
    case "success":
      backgroundColor = "bg-green-500";
      break;
    case "error":
      backgroundColor = "bg-red-500";
      break;
    case "disabled":
      backgroundColor = "bg-gray-300";
      break;
    case "primary":
      backgroundColor = "bg-blue-500";
      break;
    default:
      backgroundColor = "";
      break;
  }

  return { backgroundColor };
};

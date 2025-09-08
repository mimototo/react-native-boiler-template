import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const capitalize = (str: string) => {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
};

export const wp = (percentage: number) => {
  return (percentage * deviceWidth) / 100;
};
export const hp = (percentage: number) => {
  return (percentage * deviceHeight) / 100;
};

export const stripHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>?/gm, "");
};

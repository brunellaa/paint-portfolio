import { neutral } from "./";

export const space = [
  "0.25rem",
  "0.5rem",
  "0.75rem",
  "1rem",
  "1.5rem",
  "2rem",
  "3rem",
  "4rem",
  "6rem",
  "8rem",
  "12rem",
  "16rem",
  "24rem",
];

export const shadow = {
  default: "inset 1px 1px 0 0 #fff, 5px 5px 0 rgba(0, 0, 0, 0.2);",
};

export const breakpoints = {
  phone: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};

export const hexOpacity = {
  1: "1a",
  2: "33",
  3: "4d",
  4: "66",
  5: "80",
  6: "99",
  7: "b3",
  8: "cc",
  9: "e6",
};

export const borderRadius = {
  default: "0.25rem",
  medium: "0.5rem",
  large: "1rem",
};

export const border = {
  default: "2px solid " + neutral[100],
};

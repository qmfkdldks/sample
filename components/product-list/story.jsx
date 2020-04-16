import React from "react";
import ProductList from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default { title: "ProductList", decorators: [withKnobs] };

export const withResponsive = () => {
  return <ProductList />;
};

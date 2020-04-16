import React from "react";
import ProductList from "./index";
import { withKnobs, select } from "@storybook/addon-knobs";
import { defaults } from "styled-components-breakpoint";
import styled from "styled-components";

export default { title: "ProductList", decorators: [withKnobs] };

const Box = styled.div`
  width: ${(props) => props.width}px;
`;

export const withResponsive = () => {
  const options = defaults;
  const value = select("breakpoints", options, 0);

  return (
    <Box width={value}>
      <ProductList />
    </Box>
  );
};

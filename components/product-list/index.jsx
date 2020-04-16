import React from "react";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import breakpoint from "styled-components-breakpoint";

const items = [
  "https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif",
  "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-02.jpg",
  "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-l-01.jpg",
  "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-l-02.jpg",
  "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-minimal-1.jpg",
];

const Image = styled.img`
  ${breakpoint("mobile")`
    width: 100%;
  `}
`;

const childElements = items.map((element) => {
  return <Image src={element} />;
});

const PrdocutList = () => (
  <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
    <Masonry>{childElements}</Masonry>
  </ResponsiveMasonry>
);

export default PrdocutList;

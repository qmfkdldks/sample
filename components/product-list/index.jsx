import React from "react";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { down, up } from "styled-breakpoints";

const masonryOptions = {
  transitionDuration: 10,
};

const items = [
  "https://jjintlmarket.com/wp-content/uploads/2018/08/traditional-kimchi.jpg",
  "https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif",
  "https://cdn.dribbble.com/users/1352933/screenshots/4241439/6.jpg",
  "https://cdn.dribbble.com/users/59947/screenshots/6322956/ramen_dribbbz.jpg",
  "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-02.jpg",
  "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-l-01.jpg",
  "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-l-02.jpg",
  "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-minimal-1.jpg",
];

const Image = styled.img`
  width: 100%;
  border-radius: 5px;

  ${up("tablet")} {
    :parent {
      width: 50%;
    }
  }

  &:hover,
  &:focus {
    transform: scale3d(1.009, 1.009, 1);
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  background-color: #fff;
  border-radius: 5px;
  font-family: Karla, sans-serif;

  .title {
    font-weight: bold;
  }

  .price {
    color: #f2b636;
  }
`;

const Container = styled.div`
  position: relative;
  padding-right: 5px;
  padding-bottom: 2px;
`;

const childElements = items.map((element, index) => {
  return (
    <>
      <Container>
        <Image key={index} src={element} />
      </Container>
      <Info>
        <p className="title">Kimchi</p>
        <p className="price">$ 245</p>
      </Info>
    </>
  );
});

const PrdocutList = () => (
  <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
    <Masonry options={masonryOptions}>{childElements}</Masonry>
  </ResponsiveMasonry>
);

export default PrdocutList;

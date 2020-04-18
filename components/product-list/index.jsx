import React from "react";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { up } from "styled-breakpoints";
import Link from "next/link";

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
  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;

const Card = styled.div`
  font-family: Karla, sans-serif;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 53px 40px 60px;
`;

const Title = styled.h4`
  font-size: 1.375rem;
  font-weight: 400;
  color: #182141;
  line-height: 1.2;
`;

const Description = styled.p`
  font-weight: 400;
  line-height: 1.6;
  color: #878c9b;
`;

const ProductCard = ({ image, title, price }) => (
  <>
    <Container>
      <Image src={image} />
    </Container>
    <Info>
      <p className="title">{title}</p>
      <p className="price">$ {price}</p>
    </Info>
  </>
);

const TextCard = ({ title, description, price }) => (
  <Container>
    <Card>
      <Title className="title">{title}</Title>
      <Description>{description}</Description>
      <Info>
        <p className="price">$ {price}</p>
      </Info>
    </Card>
  </Container>
);

const childElements = items.map((element, index) => {
  return <ProductCard image={element} title="kimchi" price="102.4" />;
});

const renderProducts = (products) => {
  return products.map(
    ({
      node: {
        id,
        slug,
        name,
        description,
        pricing: {
          priceRange: {
            start: {
              gross: { amount, currency },
            },
          },
        },
        thumbnail,
        images,
      },
    }) => (
      <Link href="/product/[id]" as={`/product/${id}`}>
        <a style={{ textDecoration: "none" }}>
          {thumbnail ? (
            <ProductCard image={thumbnail.url} title={name} price={amount} />
          ) : (
            <TextCard description={description} title={name} price={amount} />
          )}
        </a>
      </Link>
    )
  );
};

const PrdocutList = ({ products }) => (
  <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
    <Masonry options={masonryOptions}>
      {renderProducts(products)}
      {childElements}
    </Masonry>
  </ResponsiveMasonry>
);

export default PrdocutList;

import React from "react";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { up } from "styled-breakpoints";
import Link from "next/link";

const masonryOptions = {
  transitionDuration: 10,
};

const ProductCard = ({ image, title, price }) => (
  <>
    <Image src={image} />
    <Info>
      <p className="title">{title}</p>
      <p className="price">$ {price}</p>
    </Info>
  </>
);

const TextCard = ({ title, description, price }) => (
  <Card>
    <Title className="title">{title}</Title>
    <Description>{description}</Description>
    <Info>
      <p className="price">$ {price}</p>
    </Info>
  </Card>
);

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
      <Container>
        <Link href="/product/[id]" as={`/product/${id}`}>
          <a style={{ textDecoration: "none" }}>
            {thumbnail ? (
              <ProductCard image={thumbnail.url} title={name} price={amount} />
            ) : (
              <TextCard description={description} title={name} price={amount} />
            )}
          </a>
        </Link>
      </Container>
    )
  );
};

const PrdocutList = ({ products }) => (
  <div style={{ width: "100%" }}>
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry options={masonryOptions}>{renderProducts(products)}</Masonry>
    </ResponsiveMasonry>
  </div>
);

export default PrdocutList;

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
    font-weight: 400;
    color: #182141;
  }

  .price {
    font-size: 20px;
    font-weight: 400;
    color: #e55353;
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
  color: #aaa;
  line-height: 1.2;
`;

const Description = styled.p`
  font-weight: 400;
  line-height: 1.6;
  color: #878c9b;
`;

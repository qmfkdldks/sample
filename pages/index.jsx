import { useRouter } from "next/router";
import styled from "styled-components";
import Typed from "react-typed";
import { up, down } from "styled-breakpoints";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { getDataFromTree } from '@apollo/react-ssr';
import withApollo from "../lib/graphql/withApollo";
import Header from "../components/header";
import ProductList from "../components/product-list";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Categories from "../components/categories";
// GraphQL Queries
import ShopQuery from "../lib/graphql/queries/shop";
import CategoriesQuery from "../lib/graphql/queries/categories";
import ProductsQuery from "../lib/graphql/queries/products";

const Home = () => {
  const { query: { page, category } } = useRouter()

  const { loading, data } = useQuery(
    gql`
      query($categories: [ID] = []) {
        ${CategoriesQuery}
        ${ProductsQuery}
      }
    `,
    {
      variables: { categories: [category] },
    }
  );

  const shopData = useQuery(
    gql`
    query {
      ${ShopQuery}
    }
    `
  );

  return (
    <div>
      <Header />
      <Background src="https://cdn.dribbble.com/users/146798/screenshots/5887398/sushi_4x.jpg?compress=1&resize=800x600" />
      <Title>
        Recetas diferentes, repletas de sabores coreanos <br />
        <span style={{ color: "#182141" }}>
          <Typed
            strings={["Sanos", "Ricos"]}
            typeSpeed={60}
            backSpeed={50}
            loop
          />
        </span>
      </Title>
      <Tiles>
        <Categories
          loading={loading}
          data={data}
        />
        <ProductList loading={loading} data={data} />
      </Tiles>
      <Contact loading={shopData.loading} data={shopData.data} />
      <Footer />
    </div>
  );
};

export default withApollo(Home, { getDataFromTree });

const Title = styled.h2`
  font-size: calc(1.5625rem + 3.75vw);
  color: #f2b636;
  font-weight: 700;
  font-family: Karla, sans-serif;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  padding-right: 15px;
  padding-left: 15px;
`;

const Tiles = styled.div`
  max-width: 1024px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${up("desktop")} {
    margin-top: 130px;
  }
`;

const Background = styled.img`
  z-index: -1;

  ${up("tablet")} {
    position: absolute;
    top: 0px;
    right: 0px;
  }

  ${down("tablet")} {
    position: relative;
    width: 100%;
  }
`;

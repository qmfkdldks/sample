import styled from "styled-components";
import Header from "../components/header";
import ProductList from "../components/product-list";
import Footer from "../components/footer";
import { up, down } from "styled-breakpoints";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../lib/graphql/withApollo";
import gql from "graphql-tag";
import Spinner from "../components/spinner";
import Contact from "../components/contact";

const Home = () => {
  const { loading, data } = useQuery(gql`
    {
      products(first: 2) {
        edges {
          node {
            id
            name
            pricing {
              priceRange {
                start {
                  gross {
                    amount
                    currency
                  }
                }
              }
              discount {
                gross {
                  amount
                  currency
                }
              }
              priceRangeUndiscounted {
                start {
                  gross {
                    amount
                    currency
                  }
                }
              }
            }
            thumbnail {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <Header />
      <Background src="https://cdn.dribbble.com/users/146798/screenshots/5887398/sushi_4x.jpg?compress=1&resize=800x600" />
      <Title>a simple yet beautiful portfolio homepage</Title>
      <Tiles>
        {loading || !data ? (
          <Spinner />
        ) : (
          <ProductList products={data.products.edges} />
        )}
      </Tiles>
      <Contact />
      <Footer />
    </div>
  );
};

export default withApollo(Home);

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
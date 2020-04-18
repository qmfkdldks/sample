import styled from "styled-components";
import Typed from "react-typed";
import { up, down } from "styled-breakpoints";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import withApollo from "../lib/graphql/withApollo";
import Header from "../components/header";
import ProductList from "../components/product-list";
import Footer from "../components/footer";
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
            slug
            description
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
            images {
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
      <Title>
        a simple yet portfolio homepage
        <br />
        <span style={{ color: "#182141" }}>
          <Typed
            strings={["beautiful", "disruptive"]}
            typeSpeed={60}
            backSpeed={50}
            loop
          />
        </span>
      </Title>
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

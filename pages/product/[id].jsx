import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { useRouter } from "next/router";
import { getDataFromTree } from "@apollo/react-ssr";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import draftToHtml from "draftjs-to-html";
import {
  FacebookSquare,
  Instagram,
  Pinterest,
} from "@styled-icons/boxicons-logos";
import { Heart } from "@styled-icons/feather/Heart";
import withApollo from "../../lib/graphql/withApollo";
import Header from "../../components/header";
import Spinner from "../../components/spinner";
import Footer from "../../components/footer";
import Contact from "../../components/contact";
import ShopQuery from "../../lib/graphql/queries/shop";

const GET_PRODUCT = gql`
  query($id: ID!) {
    product(id: $id) {
      id
      name
      slug
      descriptionJson
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
      }

      images {
        url
      }
    }
  }
`;

const renderDetail = (loading, data) => {
  if (loading || !data) return <Spinner />;

  const {
    product: {
      name,
      pricing: {
        priceRange: {
          start: {
            gross: { amount, currency },
          },
        },
      },
      descriptionJson,
      images,
    },
  } = data;

  const renderImages = images.map(({ url }) => <Image src={url} />);

  return (
    <>
      <Gallery>{renderImages}</Gallery>
      <Detail>
        <Sticky>
          <Title>{name}</Title>

          <Text
            dangerouslySetInnerHTML={{
              __html: draftToHtml(JSON.parse(descriptionJson)),
            }}
          />

          <Price style={{ alignSelf: "flex-end" }}>
            {currency} $ {amount}
          </Price>

          <IconText>
            <Icon>
              <img
                src="https://toppng.com/uploads/thumbnail//talk-icon-social-media-icon-png-and-vector-kakao-talk-11563402659kvm0uz6tpt.png"
                alt="kakaotalk maum"
              />
            </Icon>
            <Text> @maum</Text>
          </IconText>
          <IconText>
            <Icon>
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/whatsapp-512.png"
                alt="kakaotalk maum"
              />
            </Icon>
            <Text> +54 11 2696 1009</Text>
          </IconText>

          <Row>
            <Attribute>
              <Subtitle>Date</Subtitle>
              <Text>28 Aug 2018</Text>
            </Attribute>
            <Attribute>
              <Subtitle>Awards</Subtitle>
              <Text>2017 Awwwards</Text>
            </Attribute>
          </Row>

          <Row>
            <Attribute>
              <Subtitle>Categories</Subtitle>
              <Text>Job</Text>
            </Attribute>
            <Attribute>
              <Subtitle>Likes</Subtitle>
              <Text>Lorem</Text>
            </Attribute>
          </Row>

          <Icons>
            <Icon>
              <Instagram />
            </Icon>
            <Icon>
              <FacebookSquare />
            </Icon>
            <Icon>
              <Pinterest />
            </Icon>
            <Icon style={{ alignSelf: "flex-end" }}>
              <Heart style={{ color: "red" }} />
            </Icon>
          </Icons>
        </Sticky>
      </Detail>
    </>
  );
};

const ProductPage = () => {
  const router = useRouter();
  const { loading, data } = useQuery(GET_PRODUCT, {
    variables: { id: router.query.id },
  });

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
      <HeaderTitle>a simple yet beautiful portfolio Product Page</HeaderTitle>
      <Container>{renderDetail(loading, data)}</Container>
      <Contact loading={shopData.loading} data={shopData.data} />
      <Footer />
    </div>
  );
};

export default withApollo(ProductPage, { getDataFromTree });

const Icons = styled.div`
  margin: 0 15px;
`;

const Icon = styled.a`
  svg,
  img {
    width: 30px;
    color: #878c9b;
    &:hover {
      color: #f2b636;
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  max-width: 500px;
  padding: 50px 0;
  height: 100vm;
  display: flex;
  flex-direction: column;
`;

const Sticky = styled.div`
  position: sticky;
  top: 4rem;
`;

const Image = styled.img`
  max-width: 600px;

  ${down("tablet")} {
    width: 100%;
  }
`;

const HeaderTitle = styled.h2`
  font-size: calc(1.5625rem + 3.75vw);
  color: #f2b636;
  font-weight: 700;
  font-family: Karla, sans-serif;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
  padding-right: 15px;
  padding-left: 15px;

  ${down("tablet")} {
    flex: initial;
    max-width: initial;
    margin: auto;
  }
`;

const Button = styled.a`
  border: 3px solid #182141;
  background-color: #182141;
  border-radius: 50px;
  color: #f2b636;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  padding: 20px 40px;
  letter-spacing: 1.75px;
  font-family: Karla, sans-serif;
  transition-duration: 0.3s;

  &:hover,
  :focus {
    background-color: #f2b636;
    border: 3px solid #f2b636;
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 150px auto;

  ${down("tablet")} {
    margin-top: 50px;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Attribute = styled.div`
  margin: 0 20px;
`;

const Title = styled.h4`
  font-family: Karla, sans-serif;
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 400;
  color: #182141;
  line-height: 1.2;
`;

const Price = styled.h1`
  font-family: Karla, sans-serif;
  margin-bottom: 24px;
  font-weight: 700;
`;

const Subtitle = styled.h4`
  font-family: Karla, sans-serif;
  color: #182141;
  display: block;
  font-size: 20px;
  line-height: 1;
`;

const Text = styled.p`
  color: #878c9b;
  font-size: 1.125rem;
  font-family: Karla, sans-serif;
  font-weight: 400;
  line-height: 1.6;
`;

const IconText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${Text} {
    margin: 0 15px;
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
    display: none;
  }
`;

import Link from "next/link";
import styled from "styled-components";
import ImageMasonry from "react-image-masonry";

const Header = styled.header`
  padding-right: 15px;
  padding-left: 15px;
`;

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

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Tiles = styled.div`
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
`;

export default () => (
  <>
    <Header>
      <img
        src="https://demo.hasthemes.com/arden-preview/arden/assets/img/logo.png"
        alt="Logo"
      />
    </Header>

    <Title>a simple yet beautiful portfolio homepage</Title>

    <Tiles>
      <ImageMasonry
        imageUrls={[
          "https://media.giphy.com/media/8Ry7iAVwKBQpG/giphy.gif",
          "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-02.jpg",
          "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-l-01.jpg",
          "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-l-02.jpg",
          "https://demo.hasthemes.com/arden-preview/arden/assets/img/portfolio/portfolio-minimal-1.jpg"
        ]}
        numCols={3}
        containerWidth={"100%"}
      />
    </Tiles>
  </>
);

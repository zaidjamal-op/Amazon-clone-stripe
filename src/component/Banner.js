import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
function Banner() {
  return (
    <Container>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <BannerImage>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </BannerImage>

        <BannerImage>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </BannerImage>

        <BannerImage>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </BannerImage>
      </Carousel>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  position: relative;
`;
const BannerImage = styled.div``;

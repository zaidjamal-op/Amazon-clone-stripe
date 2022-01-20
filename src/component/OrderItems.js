import styled from "styled-components";
import moment from "moment";
import Currency from "react-currency-formatter";

function OrderItems({ id, amount, amount_Shipping, images, timestamp, items }) {
  return (
    <Container>
      <Product>
        <FirstDiv>
          <P1>ORDER PLACED</P1>
          <p>{moment.unix(timestamp).format("DD/MM/YY")}</p>
        </FirstDiv>
        <SecondDiv>
          <P2>TOTAL</P2>
          <p>
            <span className="font-bold">
              <Currency quantity={amount} currency="EUR" />
            </span>{" "}
            (Including <Currency quantity={amount_Shipping} currency="EUR" />{" "}
            for "<span className="italic">Next Day Delivery</span>")
          </p>
        </SecondDiv>
        <p>{items.length} items</p>
        <ItemID>
          <p>OrderId # {id}</p>
        </ItemID>
      </Product>
      <ImageContainer>
        <ProductImage>
          {images.map((image) => (
            <img src={JSON.parse(image)} height={120} />
          ))}
        </ProductImage>
      </ImageContainer>
    </Container>
  );
}

export default OrderItems;

const Container = styled.div`
  position: relative;
  border-radius: 0.375rem;
  border-width: 1px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  background-color: rgb(243 244 246);
  color: rgb(75 85 99);
  padding: 10px;
  justify-content: space-evenly;

  > p {
    font-size: small;
    white-space: nowrap;
    color: blue;
    flex: 1;
    justify-self: end;
    text-align: right;
  }
`;

const FirstDiv = styled.div`
  padding: 5px;
  > p {
    font-size: medium;
  }
`;
const P1 = styled.p`
  font-weight: 700;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
`;

const P2 = styled.p`
  font-weight: 700;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
`;

const SecondDiv = styled.div`
  padding: 5px;
  > p {
    font-size: medium;
  }
`;

const ItemID = styled.div`
  > p {
    position: absolute;
    top: 0.3rem;
    right: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 24rem;
    margin-right: 15px;
    font-size: small;
  }

  @media (max-width: 768px) {
    > p {
      width: 10rem;
      font-size: x-small;
    }
  }
`;

const ImageContainer = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ProductImage = styled.div`
  display: flex;
  margin-left: 1.5rem;
  overflow-x: auto;

  > img {
    object-fit: contain;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    > img {
      height: 70px;
    }
  }
`;

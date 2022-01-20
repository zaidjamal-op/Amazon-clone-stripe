import Image from "next/image";
import styled from "styled-components";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, description, image, price, category }) {
  const dispatch = useDispatch();
  const addItemsToBasket = () => {
    const product = {
      id,
      title,
      description,
      image,
      price,
      category,
      hasPrime,
      rating,
    };

    dispatch(addToBasket(product));
  };

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING + MIN_RATING)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <Container>
      <Cat>
        <p>{category}</p>
      </Cat>
      <Image src={image} alt="" width={200} height={200} objectFit="contain" />
      <Name>{title}</Name>
      <Rating>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon height={16} />
          ))}
      </Rating>
      <About>{description}</About>
      <Pricing>
        <Currency quantity={price} currency="GBP" />
      </Pricing>
      {hasPrime && (
        <PrimeMember>
          <img width={34} src="https://links.papareact.com/fdw" alt="" />
          <p>Free Next-day Delivery</p>
        </PrimeMember>
      )}
      <Button onClick={addItemsToBasket}>Add to Basket</Button>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  background-color: white;
  z-index: 30;
`;
const Rating = styled.div`
  display: flex;
  > svg {
    color: gold;
  }
`;

const Pricing = styled.div`
  margin-bottom: 5px;
`;

const Button = styled.button`
  margin-top: auto;
  font-size: small;
  background-image: linear-gradient(to bottom, #fef08a, #facc15);
  border: 1px solid #fde047;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    color: #eab308;
  }
  @media (max-width: 768px) {
    font-size: x-small;
  }
`;

const Cat = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: x-small;
  font-style: italic;
  color: grey;
`;

const Name = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const About = styled.p`
  display: -webkit-box;
  font-size: x-small;
  margin-top: 5px;
  margin-bottom: 5px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
`;

const PrimeMember = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: -5px;

  > p {
    margin-left: 5px;
    font-size: x-small;
    color: gray;
  }
`;

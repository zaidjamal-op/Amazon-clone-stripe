import styled from "styled-components";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  description,
  image,
  price,
  category,
  rating,
  hasPrime,
}) {
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

  const removeItemsFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <Container>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <Middle>
        <p>{title}</p>
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
      </Middle>
      <Last>
        <Button onClick={addItemsToBasket}>Add to Basket</Button>
        <Button onClick={removeItemsFromBasket}>Remove from Basket</Button>
      </Last>
    </Container>
  );
}

export default CheckoutProduct;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 10px;
`;

const Middle = styled.div`
  grid-column: span 3 / span 3;
  margin-left: 10px;
  margin-right: 10px;
`;

const Rating = styled.div`
  display: flex;
  > svg {
    color: gold;
  }
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

const Pricing = styled.div`
  margin-bottom: 5px;
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

const Button = styled.button`
  margin-bottom: 5px;
  font-size: medium;
  background-image: linear-gradient(to bottom, #fef08a, #facc15);
  border: 1px solid #fde047;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    color: #eab308;
  }
  @media (max-width: 768px) {
    font-size: small;
  }
`;

const Last = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-top: auto;
  margin-bottom: auto;
  justify-self: end;
`;

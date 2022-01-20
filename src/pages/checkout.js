import styled from "styled-components";
import Header from "../component/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../component/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //create backend for check out session

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };
  return (
    <Container>
      <Header />
      <Main>
        <LeftContainer>
          <Image
            src="https://links.papareact.com/ikj"
            width={1240}
            height={300}
            objectFit="contain"
          />

          <ShoppingBasket>
            <h1>
              {items.length === 0
                ? "Your Amazon Basket is Empty"
                : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                category={item.category}
                rating={item.rating}
                hasPrime={item.hasPrime}
              />
            ))}
          </ShoppingBasket>
        </LeftContainer>

        <RightContainer>
          {items.length > 0 && (
            <>
              <h2>
                Subtotal ({items.length} items) :{" "}
                <span>{<Currency quantity={total} currency="GBP" />}</span>
              </h2>

              <Button
                disabled={!session}
                role="link"
                onClick={createCheckoutSession}
              >
                {!session ? "Sign In to checkout" : "Proceed to checkout"}
              </Button>
            </>
          )}
        </RightContainer>
      </Main>
    </Container>
  );
}

export default Checkout;

const Container = styled.div`
  background-color: rgb(243 244 246);
`;

const Main = styled.main`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  flex-grow: 1;
  margin: 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const RightContainer = styled.div`
  > h2 {
    white-space: nowrap;
  }
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  > button {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const ShoppingBasket = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;

  > h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;

    border-bottom: 1px;
    padding-bottom: 4px;
    font-family: Arial, Helvetica, sans-serif;
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

import styled from "styled-components";
import Header from "../component/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function Success() {
  const router = useRouter();
  return (
    <Container>
      <Header />

      <Main>
        <Confirmation>
          <Heading>
            <CheckCircleIcon height={40} />
            <h1>Thank you, Your order has been confirmed!</h1>
          </Heading>
          <p>
            Thank you for shopping with us. We'll send a confirmation once item
            has shipped, if you would like to check the status of your order(s)
            please press the link below.
          </p>

          <Button onClick={() => router.push("/orders")}>
            Go to my orders
          </Button>
        </Confirmation>
      </Main>
    </Container>
  );
}

export default Success;

const Container = styled.div`
  background-color: rgb(243 244 246);
  height: 100vh;
`;

const Main = styled.main``;

const Confirmation = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  align-items: center;

  > p {
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
  }
  @media (max-width: 768px) {
    > p {
      margin-left: 35px;
      margin-right: 35px;
    }
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  > svg {
    color: rgb(22 163 74);
  }

  > h1 {
    font-family: Arial, Helvetica, sans-serif;
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: medium;
    }
  }
`;

const Button = styled.button`
  margin-bottom: 5px;
  font-size: medium;
  background-image: linear-gradient(to bottom, #fef08a, #facc15);
  border: 1px solid #fde047;
  border-radius: 3px;
  margin-top: 10px;
  width: 50%;
  height: 50px;
  cursor: pointer;
  :hover {
    color: #eab308;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;

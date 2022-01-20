import Image from "next/image";
import styled from "styled-components";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <Container>
      <Topheader>
        <Logo onClick={() => router.push("/")}>
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </Logo>

        <Search>
          <Input type="text" />
          <SearchIconDiv>
            <SearchIcon height={14} />
          </SearchIconDiv>
        </Search>

        <Right>
          <Welcome onClick={!session ? signIn : signOut}>
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p>
              <b>Account & Lists</b>
            </p>
          </Welcome>
          <OrderInfo onClick={() => router.push("/orders")}>
            <p>Returns</p>
            <p>
              <b>& Orders</b>
            </p>
          </OrderInfo>
          <Basket onClick={() => router.push("/checkout")}>
            <span>{items.length}</span>
            <ShoppingCartIcon height={30} />
            <p>
              <b>Basket</b>
            </p>
          </Basket>
        </Right>
      </Topheader>

      <Bottomheader>
        <p>
          <MenuIcon height={16} width={16} /> All
        </p>
        <p>Prime Video</p>
        <p>Amazon Business</p>
        <p>Today's Deals</p>
        <MobileView>
          <p>Electronics</p>
          <p>Food & Grocery</p>
          <p>Prime</p>
          <p>Buy Again</p>
          <p>Shopper Toolkit</p>
          <p>Health & Personal Care</p>
        </MobileView>
      </Bottomheader>
    </Container>
  );
}

export default Header;
const Container = styled.header``;

const Topheader = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 5px;

  background-color: #131921;
`;

const Logo = styled.div`
  flex-grow: 0;
  margin-top: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    flex-grow: 1;
  }
`;

const Search = styled.div`
  display: flex;
  background-color: rgb(255, 153, 0);
  height: 40px;
  align-items: center;
  border-radius: 5px;
  flex-grow: 1;
  cursor: pointer;

  :hover {
    background-color: gold;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Input = styled.input`
  border: none;
  display: flex;
  flex-grow: 1;
  height: 38px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-shrink: 1;
  outline: none;
`;

const SearchIconDiv = styled.div`
  margin-top: 4px;
  padding: 10px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: x-small;
  }
`;

const Welcome = styled.div`
  > p {
    color: white;
  }

  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  &&& > :hover {
    text-decoration: underline;
  }
`;

const OrderInfo = styled.div`
  > p {
    color: white;
  }
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;

  > :hover {
    text-decoration: underline;
  }
`;

const Basket = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gold;
    position: absolute;
    color: black;
    top: 0;
    margin-left: 20px;
    width: 14px;
    height: 14px;
    margin-bottom: 15px;
    font-size: 14px;
    border-radius: 50%;
    font-weight: 600;
    :hover {
      text-decoration: none;
    }

    @media (max-width: 768px) {
      top: 0;
      right: 0;
      margin-left: 20px;
      width: 12px;
      height: 12px;
      font-size: 12px;
    }
  }
  > svg {
    color: white;
  }
  > p {
    @media (max-width: 768px) {
      display: none;
    }

    color: white;
    margin-top: 8px;
    margin-left: 5px;
  }

  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  > :hover {
    text-decoration: underline;
  }
`;

const Bottomheader = styled.div`
  display: flex;
  align-items: center;
  background-color: #232f3e;
  padding: 3px;

  > p {
    color: white;
    margin-right: 10px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }

    > svg {
      margin-right: 7px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
`;

const MobileView = styled.div`
  display: flex;
  align-items: center;

  > p {
    color: white;
    margin-right: 10px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

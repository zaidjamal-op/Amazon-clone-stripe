import { getSession } from "next-auth/react";
import Head from "next/head";
import styled from "styled-components";
import Banner from "../component/Banner";
import Header from "../component/Header";
import ProductFeed from "../component/ProductFeed";

export default function Home({ products }) {
  return (
    <Container>
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />

      <Main>
        <Banner />
        <ProductFeed products={products} />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(243 244 246);
`;

const Main = styled.main`
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
`;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products: products,
    },
  };
}

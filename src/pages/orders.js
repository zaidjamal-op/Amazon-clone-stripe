import { getSession, useSession } from "next-auth/react";
import styled from "styled-components";
import Header from "../component/Header";
import db from "../../firebase";
import moment from "moment";
import OrderItems from "../component/OrderItems";

function Orders({ orders }) {
  const { data: session } = useSession();
  console.log(orders);
  return (
    <Container>
      <Header />
      <Main>
        <h1>Your Orders</h1>
        {session ? (
          <h3>{orders.length} Orders</h3>
        ) : (
          <h3>Please sign in to see your orders</h3>
        )}

        <YourOrders>
          {orders?.map((order) => (
            <OrderItems
              key={order.id}
              id={order.id}
              amount={order.amount}
              amount_Shipping={order.amount_Shipping}
              images={order.images}
              timestamp={order.timestamp}
              items={order.items}
            />
          ))}
        </YourOrders>
      </Main>
    </Container>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }
  // Firebase DB

  const stripeOrders = await db
    .collection("AMAZON_users")
    .doc((await session).user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  // stripe orders

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amount_Shipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders: orders,
    },
  };
}

const Container = styled.div``;

const Main = styled.main`
  padding: 10px;

  > h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: xx-large;
    margin-bottom: 10px;
    padding-bottom: 2px;
    border-bottom: 1px solid yellow;
  }

  > h3 {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const YourOrders = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;

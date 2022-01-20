import styled from "styled-components";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <Container>
      {products.map(({ id, title, description, image, price, category }) => (
        <Product
          key={id}
          id={id}
          title={title}
          description={description}
          image={image}
          price={price}
          category={category}
        />
      ))}

      <img src="https://links.papareact.com/dyz" alt="" />
    </Container>
  );
}

export default ProductFeed;

const Container = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: -72px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-top: 0;
  }

  > img {
    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }

    @media (max-width: 640px) {
      grid-column: 1 / -1;
    }
  }
`;

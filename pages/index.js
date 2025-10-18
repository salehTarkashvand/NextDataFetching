function HomePage(props) {
  const {products} = props
  return (
    <ul>
      {products.map(product=> <li key={product.id}>{product.title}</li>)}
    </ul>
  );
}
export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "p1", title: "product 1" }],
    },
  };
}

export default HomePage;

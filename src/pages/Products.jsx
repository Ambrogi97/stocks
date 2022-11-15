import { useEffect } from "react";
import Form from "../components/Form/Form";
import Table from "../components/Table/Table";
import styles from "./styles/Products.module.css";
import { fetchProducts } from "../store/slices/products";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Products = () => {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <h1>Crear Producto</h1>
        <Form />
      </div>
      <Table data={products} />
    </div>
  );
};
export default Products;

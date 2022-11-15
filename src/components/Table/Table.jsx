import styles from "./Table.module.css";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/slices/products";
import { useNavigate } from "react-router-dom";

const Table = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = product => {
    const ok = confirm(`Seguro que desea borrar el producto: ${product.name}`);

    if (ok) {
      dispatch(removeProduct(product));
    }
  };

  return (
    <div className={styles.container}>
      <h1>Tabla de productos</h1>
      <table className={styles.table}>
        <thead>
          <tr key={0}>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(product => (
            <tr key={product._id} id={product._id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock} unidades</td>
              <td>{product.description}</td>
              <td>
                <button onClick={() => navigate(`/edit/${product._id}`)}>Editar</button>
                <button onClick={() => handleDelete(product)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;

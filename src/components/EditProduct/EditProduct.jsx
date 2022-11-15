import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { editProduct } from "../../store/slices/products";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector(state => state.products);
  const { id } = useParams();
  const product = products.find(product => product._id === id);

  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    reset(product);
  }, [products, id, reset]);

  const onSubmit = data => {
    const newData = { ...data, _id: id };
    dispatch(editProduct(newData));
    reset();
    navigate("/products");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name", { required: true })} placeholder="Nombre:" />
        {errors?.name && <p>El nombre es requerido</p>}
        <input type="text" {...register("price", { required: true })} placeholder="Precio:" />
        {errors?.price && <span>El precio es requerido</span>}
        <input type="text" {...register("stock", { required: true })} placeholder="Stock:" />
        {errors?.stock && <span>El stock es requerido</span>}
        <input
          type="text"
          {...register("description", { required: true })}
          placeholder="Descripción:"
        />
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
export default EditProduct;

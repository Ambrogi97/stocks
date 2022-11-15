import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createProduct } from "../../store/slices/products";

const Form = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      stock: ""
    }
  });

  const onSubmit = data => {
    dispatch(createProduct(data));
    reset();
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
export default Form;

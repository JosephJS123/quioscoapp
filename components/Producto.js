import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  const { nombre, precio, imagen, categoriaId, id } = producto;

  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen platillo ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>

        <button
          type="button"
          className="border-b-4 border-indigo-600 font-bold w-full mt-5 p-3 uppercase rounded hover:bg-indigo-600 hover:text-white"
          onClick={() => {
            handleChangeModal();
            handleSetProducto(producto);
          }}
        >
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export default Producto;

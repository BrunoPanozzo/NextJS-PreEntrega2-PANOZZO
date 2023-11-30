import Image from "next/image"
import Link from "next/link"
import Eliminar from "@/public/icons/borrar.png"
import Editar from "@/public/icons/editar.png"

const Producto = ({ item, mostrarBotones }) => {

    const ref = !mostrarBotones ? `/tienda/detail/` + item.slug : ''

    return (
        <article className="basis-72 shadow-lg rounded">
            <Link href={ref}
                className="flex flex-col"
            >
                <Image
                    alt={item.nombre}
                    src={`/imgs/productos/${item.imagen}`}
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                />

                <div className="px-4 border-t border-gray-200">
                    <h4 className="text-sm my-4">{item.nombre}</h4>
                    <p className="text-2xl font-semibold mb-6">$ {item.precio}</p>
                    {
                        mostrarBotones ? <div className="flex justify-center items-center gap-2">
                            <Image
                                src={Editar}
                                alt="Icono editar"
                                width={30}
                                height={30}
                            />
                            <Image
                                src={Eliminar}
                                alt="Icono eliminar"
                                width={30}
                                height={30}
                            />
                        </div>
                            : <></>
                    }
                </div>
            </Link>
        </article >
    )
}

export default Producto
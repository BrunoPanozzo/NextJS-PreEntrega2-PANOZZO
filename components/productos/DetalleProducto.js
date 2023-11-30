import Image from "next/image"
import { mockData } from "@/data/productos"
import Retornar from "../ui/Retornar"
import Contador from "../ui/Contador"
import NotFound from "@/app/not-found"


const DetalleProducto = ({slug}) => {

    const producto = mockData.find(item => item.slug === slug)

    if (!producto)
        return(
            <NotFound/>
    )
    
    return (
        <div className="max-w-4xl m-auto">
            <Retornar className="text-sm text-blue-500 mb-6">
                Volver
            </Retornar>

            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image
                        src={`/imgs/productos/${producto.imagen}`}
                        alt={producto.nombre}
                        width={860}
                        height={860}
                    />
                </div>
                <div className="basis-1/2">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 pb-4 mb-4">{producto.nombre}</h2>
                    <p className="text-4xl">$ {producto.precio}</p>

                    <Contador item={producto}/>
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Descripción</h3>
                <p className="text-gray-600">{producto.descripción}</p>
            </section>
        </div>
    )
}

export default DetalleProducto
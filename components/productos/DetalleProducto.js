import Image from "next/image"
import Retornar from "../ui/Retornar"
import Contador from "../ui/Contador"
import NotFound from "@/app/not-found"


const DetalleProducto = async ({ slug }) => {

    const producto = await fetch(`http://localhost:3000/api/producto/${slug}`,
        { cache: 'no-store' }
    ).then(response => response.json())

    if (!producto)
        return (
            <NotFound />
        )

    return (
        <div className="max-w-6xl m-auto mb-6">
            <Retornar className="text-sm text-blue-500 mb-6">
                Volver
            </Retornar>
            <h1 className="font-bold text-4xl text-center mb-10">Producto Seleccionado</h1>
            <article className="bg-gray-200 flex flex-col justify-center items-center p-12">
                <section className="flex gap-6 flex-row justify-center items-center">
                    <div className="relative basis-1/2 pt-20 text-2xl content-start">
                        <Image
                            src={`/imgs/productos/${producto.imagen}`}
                            alt={producto.nombre}
                            width={860}
                            height={860}
                        />
                    </div>
                    <div className="basis-1/2 ml-3">
                        <h2 className="text-5xl border-b border-gray-200 pb-4 mb-4 pt-12 font-bold">{producto.nombre}</h2>
                        <p className="pb-1 text-5xl font-bold">$ {producto.precio.toLocaleString()}</p>

                        <Contador item={producto} />
                    </div>
                </section>
                <section className="mt-12 pt-20 text-2xl content-start">
                    <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Descripción</h3>
                    <p className="text-gray-600">{producto.description}</p>
                </section>
            </article>
        </div>
    )
}

export default DetalleProducto
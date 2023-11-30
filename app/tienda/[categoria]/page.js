import NotFound from '@/app/not-found'
import ListaProductos from '@/components/productos/ListaProductos'
import MenuCategorias from '@/components/productos/MenuCategorias'

export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `Categoría - ${params.categoria}`,
        description: `${params.description}`,
    }
}

const ProductosPage = ({params}) => {

    const rutasDinamicas = [
        "todos",
        "Moviles",
        "TV-Audio",
        "Electrodomesticos",
        "Computacion"
    ]
    
    const { categoria } = params
  
    const itemExistente = rutasDinamicas.some((item) => item === categoria)
   
    if(!itemExistente)
        return (
        <NotFound/>
        )

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

            <div className="flex gap-10">
                <MenuCategorias />
                <ListaProductos categoria={categoria} mostrarBotones={false}/>
            </div>
        </main>
    )
}

export default ProductosPage
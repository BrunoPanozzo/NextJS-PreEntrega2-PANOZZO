import DetalleProducto from "@/components/productos/DetalleProducto"

const DetailPage = ({params}) => {

    const {slug} = params

    return (
        <main className="container m-auto mt-10">
            <DetalleProducto slug={slug}/>
        </main>
    )
}

export default DetailPage
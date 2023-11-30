import { mockData } from '@/data/productos'
import { NextResponse } from 'next/server'

const timerSleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve,timer))
}

export async function GET(request, {params}) {

    const {categoria} = params

    const productosFiltrados = categoria === 'todos' ? mockData : mockData.filter(item => item.categoria === categoria)

    await timerSleep(1000)

    return NextResponse.json(productosFiltrados)
}
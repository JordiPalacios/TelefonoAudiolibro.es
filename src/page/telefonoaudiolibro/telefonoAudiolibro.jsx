import React from 'react'
import { Section } from '../../components/shared/section'

export const TelefonoAudiolibro = () => {
    return (
        <main>
            <h1 className="text-5xl font-bold">Teléfonoaudiolibro.es</h1>
            <Section as="header" className="bg-green-300">
                <p>Hola</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"> Adios </button>
                <h1 className="text-5xl font-bold">Hello</h1>
            </Section>
            <Section as="header" className="bg-red-300">
                <p>Hola</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"> Adios </button>
                <h1 className="text-5xl font-bold">Hello</h1>
            </Section>
        </main>
    )
}

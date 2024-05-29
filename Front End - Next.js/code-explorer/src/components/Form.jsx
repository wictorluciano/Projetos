'use client'

import { useRef, useState } from "react";

export default function Form() {
    const form = useRef();
    const nameInput = useRef(null)
    const emailInput = useRef(null)
    const assuntoInput = useRef(null)
    const mensagemTextarea = useRef(null)

    function Enviar(e){
        e.preventDefault()
        const nomeValor = nameInput.current.value
        const emailValor = emailInput.current.value
        const assuntoValor = assuntoInput.current.value
        const mensagemValor = mensagemTextarea.current.value

        const validarEmail = (emailValor) => {
            // Expressão regular para validar o formato do email
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return regex.test(emailValor)
        };

        if(!nomeValor && !emailValor && !assuntoValor && !mensagemValor){
            alert("Preencher Formulário")
        } else if(!nomeValor){
            alert("Preencher campo nome")
        } else if(!validarEmail(emailValor)){
            alert("Preencher campo email")
        } else if(!assuntoValor){
            alert("Preencher campo assunto")
        } else if(!mensagemValor){
            alert("Preencher campo mensagem")
        } else {
            alert("Formulário enviado com sucesso!")
        }

    }

    return(
        <form onSubmit={Enviar} ref={form} className="flex flex-col w-full gap-6">
            <input ref={nameInput} type="text" name="name" id="name" placeholder="Nome *" className="block w-full px-[18px] h-[48px] bg-white 
            rounded-md outline-none ring-1 ring-inset ring-gray-300 
            focus:ring-2 focus:ring-inset focus:ring-scale-100" />

            <input ref={emailInput} type="email" name="email" id="email" placeholder="E-mail *" className="block w-full px-[18px] h-[48px] bg-white 
            rounded-md outline-none ring-1 ring-inset ring-gray-300 
            focus:ring-2 focus:ring-inset focus:ring-scale-100" />

            <input ref={assuntoInput} type="text" name="assunto" id="assunto" placeholder="Assunto *" className="block w-full px-[18px] h-[48px] bg-white 
            rounded-md outline-none ring-1 ring-inset ring-gray-300 
            focus:ring-2 focus:ring-inset focus:ring-scale-100" />

            <textarea ref={mensagemTextarea} name="mensagem" id="mensagem" placeholder="Mensagem *" className="block w-full py-[16px] px-[18px] h-[148px] bg-white 
            rounded-md outline-none ring-1 ring-inset ring-gray-300 
            focus:ring-2 focus:ring-inset focus:ring-scale-100"></textarea>
            
            <button type="submit" className="w-full h-[45px] rounded-md bg-brand-color text-white font-bold text-sm hover:border hover:border-brand-color hover:bg-scale-100 hover:text-brand-color hover:shadow-md hover:shadow-scale-200
            transition ease-in-out delay-150 duration-150">ENTRAR EM CONTATO</button>
        </form>
    )
}
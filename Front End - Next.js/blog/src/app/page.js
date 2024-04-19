import { SectionCards } from "@/components/SectionCards";

export default function Home() {
  return (
    <main className="flex flex-col bg-dark-10 gap-[40px] py-[40px]">
      <SectionCards 
        data="17 de ago, 2024"
        titulo="O que é linguagem de programação? Conheça as principais"
        descricao="Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
      /> 
      
      <SectionCards 
        data="12 de jul, 2024"
        titulo="GitHub agora permite fazer login sem precisar de senha"
        descricao="O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores."
      /> 

      <SectionCards 
        data="21 de jun, 2024"
        titulo="Por que os hiperlinks são azuis em sua maioria?"
        descricao="Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor."
      />
    </main>)

}


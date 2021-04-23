// SPA - Funciona Apenas com o JS do Navegador Habilitado
// SSR - Redenrização dos dados no servidor
// SSG - Renderização dos dados no servidor, porém com controle de tempo (Versão estática)

import { useEffect } from "react"

export default function Home(props) {
  console.log(props.episodes);

  return (
    <div>INDEX</div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

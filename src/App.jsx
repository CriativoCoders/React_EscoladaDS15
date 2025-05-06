//  no app apagar tudo que tinha antes 
 import { BarraNavegacao } from "./Componentes/BarraNavegacao";
 import { Cabecalho } from "./Componentes/Cabecalho";
 import { Conteudo } from "./Componentes/Conteudo";
import { Rodape } from "./Componentes/Rodape";


 function App(){
  return(
      <>
      <BarraNavegacao/>
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
      </>

  )
 }

 export default App
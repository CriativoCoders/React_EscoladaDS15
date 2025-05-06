import estilo from './Menu.module.css';
export function Menu(){
    return(
        <div className={estilo.conteiner}>
            <table>
                <tr>
                    <td>
                    <span className={`${estilo.icon} material-symbols-outlined`}>person</span>                        
                        <br></br>
                        Professores
                    </td>

                    <td>
                    <span className={`${estilo.icon} material-symbols-outlined`}>groups</span>
                        <br></br>
                        Gestores
                    </td>
                </tr>
                <tr>
                    <td>
                    <span className={`${estilo.icon} material-symbols-outlined`}>menu_book</span>
                        <br></br>
                        Disciplinas
                    </td>

                    <td>
                    <span className={`${estilo.icon} material-symbols-outlined`}>nature_people</span>
                    <br></br>
                        Ambiente
                    </td>
                </tr>
            </table>
        </div>
    )
}
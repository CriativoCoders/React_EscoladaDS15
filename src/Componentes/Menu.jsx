import estilo from './Menu.module.css';
export function Menu(){
    return(
        <div className={estilo.conteiner}>
            <table>
                <tr>
                    <td>
                        Professores
                    </td>

                    <td>
                        Gestores
                    </td>
                </tr>
                <tr>
                    <td>
                        Disciplinas
                    </td>

                    <td>
                        Ambiente
                    </td>
                </tr>
            </table>
        </div>
    )
}
import {useState} from "react";

import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { FloatLabel } from 'primereact/floatlabel';
import {InputText} from "primereact/inputtext";
import 'primereact/resources/themes/lara-light-cyan/theme.css';


function Home(){
    return (
        <div>
            <div>
                <div>Home Luis Ricardo Costa</div>

                <Panel header="Observaçoes">
                    <p className="m-0">
                        Para testes e validações
                    </p>
                </Panel>

            </div>
            <div></div>
            <Contador/>
        </div>
    )
}

function Contador(){

    const [contador,setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return (
        <div>

            <FloatLabel>
                <InputText id="contador" value={contador} onChange={(e) => setValue(e.target.value)} />
                <label for="contador">Valor do Contador</label>
            </FloatLabel>

            <Button onClick={adicionarContador} label="Teste click" />
        </div>
    )
}

export default Home
import { useState } from 'react';
import { Button } from "./components/Button";
import { FormInput } from "./components/FormInput";
import './App.css';

export function btd(binary) {
    let contador = 0;
    let decimal = 0;
    while (binary !== 0) {
        decimal += Math.pow(2, contador) * (binary % 10);
        binary = Math.floor(binary / 10);
        contador++;
    }
    return decimal;
}

function App() {
    const [binary, setBinary] = useState("");
    const [isValidBinary, setIsValidBinary] = useState(true);
    const [decimalResult, setDecimalResult] = useState(null);
    const [alertText, setAlertText] = useState("");

    const handleBinaryChange = (e) => {
        const inputValue = e.target.value;

        // Verifica se o valor é composto apenas por 0's ou 1's
        const isValidInput = /^[01]*$/.test(inputValue);

        // Atualiza o estado de validação e o valor
        setIsValidBinary(isValidInput);
        setBinary(inputValue);
    };

    const handleConvert = () => {
        if (!binary) {
            // Se o campo de entrada estiver vazio, define a mensagem de alerta
            setAlertText("Por favor, insira um número binário antes de clicar em 'Converter'.");
            return;
        }
        // Adicione aqui a lógica para converter o número binário para decimal
        if (isValidBinary) {
            const decimalValue = btd(parseInt(binary));
            setDecimalResult(decimalValue);
            // Reseta o alerta
            setAlertText("");
        } else {
            // Define a mensagem de alerta
            setAlertText("Por favor, insira apenas valores binários (números compostos por 0's e/ou 1's)!");
        }
    };

    return (
        <div className="App">
            <div className='App-header'>
                <h2>Conversor de Binário para Decimal</h2>
                <p className='App-header'>Este conversor lhe permite converter números binários para sua forma decimal!</p>
                <p className='App-header'>Basta inserir o número binário que deseja converter na caixa indicada abaixo, e depois é só cliclar no botão "Converter" para obter o número correspondente em decimal.</p>
            </div>
            <div className="container">
                <p className='text'>Insira o número binário</p>
                <FormInput
                    id='binary'
                    
                    value={binary}
                    type='number'
                    size='full'
                    onChange={handleBinaryChange}
                    style={{ borderColor: isValidBinary ? 'initial' : 'red' }}
                />
                
                {alertText && (
                    <p style={{ color: 'red' }}>{alertText}</p>
                )}

                <div className="m-4"></div>

                <div className="flex flex-col items-center">
                    <Button label="Converter" action={handleConvert} color='blue' className="menu" />
                </div>
                
                <p className='text'>Número Decimal:   {decimalResult !== null && decimalResult}</p>
                
            </div>
        </div>
    );
}

export default App;

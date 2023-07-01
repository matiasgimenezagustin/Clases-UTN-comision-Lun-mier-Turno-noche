import React, { useState } from 'react'

const Calculator = () => {

    const [resultado, setResultado] = useState(0)
    const handleSubmitCalculatorForm = (evento) =>{
        evento.preventDefault()
        console.log(evento.nativeEvent.submitter.value)
        let operacion = evento.nativeEvent.submitter.value

        if(operacion == '-'){
            setResultado(calculatorForm.numero_1 - calculatorForm.numero_2)
        }else if(operacion == '+'){ 
            setResultado(calculatorForm.numero_1 + calculatorForm.numero_2)
        }else if(operacion == '*'){
            setResultado(calculatorForm.numero_1 * calculatorForm.numero_2)
        }else if(operacion == '/'){
            setResultado(calculatorForm.numero_1 / calculatorForm.numero_2)
        }
        console.log(calculatorForm)
    }

    const [calculatorForm, setCalculatorForm] = useState({numero_1: '', numero_2: ""})

    const handleChangeCalculatorInput = (evento) =>{
        setCalculatorForm({...calculatorForm, [evento.target.name]: Number(evento.target.value)})
    }
  return (
    <div>
        <h1>Calculadora React</h1>
        <form action="" onSubmit={handleSubmitCalculatorForm}> 
            <label htmlFor="numero_1">Ingrese el primer numero:</label>
            <input type="number" name='numero_1' id='numero_1' value={calculatorForm.numero_1} onChange={handleChangeCalculatorInput}/>
            <label htmlFor="numero_2">Ingrese el primer numero:</label>
            <input type="number" name='numero_2' id='numero_2' value={calculatorForm.numero_2}  onChange={handleChangeCalculatorInput}/>
            <div>
                <button type="submit" value='+'>+</button>
                <button type="submit" value='-'>-</button>
                <button type="submit" value='*'>*</button>
                <button type="submit" value='/'>/</button>
            </div>
        </form>
        <h2>El resultado de la operacion es: {resultado}</h2>
    </div>
  )
}

export default Calculator
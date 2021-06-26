import { useState, useEffect } from 'react'
import { cpf } from 'cpf-cnpj-validator'

const Input = (props) =>{

    const [ value, setValue ] = useState('')
    const [ isValide, setIsvalide ] = useState(false)

    useEffect(() => {

        if(props?.mask === "CPF"){
            
            setIsvalide(cpf.isValid(value))

            setValue(cpf.format(value))

        }else if(props?.mask === "Email"){
            setIsvalide(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))
        }else setValue(value)

    }, [value,props])

    return (
        <span className={`gria-input input-${isValide}`}>
            <input {...props} data={`${value && true}`} onChange={e=>{
                props?.onChange(e)
                setValue(e.target.value)
            }} value={value} />
            { props?.placeholder && <label>{props?.placeholder}</label> }
        </span>
    )
}
export default Input
import { useState } from 'react'
import './App.css';
import cadastroImg from './assets/img/cadastro.png'
import griaImg from './assets/img/gria.png'

import infoImage from './assets/img/informação.png'

import Input from './components/input'
import Modal from './components/modal'

const App = () =>{
  const [ toggle, setToggle ] = useState(false)
  const [ dadosFormulario, setDadosFormulario ] = useState({})

  const getMailMask = ()=>{
    if(!dadosFormulario?.email)return
    let mail = dadosFormulario?.email?.split('@')
    let str = mail[0].substr(mail[0].length-3)
    return [...mail[0].substr(0,mail[0].length-3)].map(()=>'*').join('')+str+'@'+mail[1]
  }


  return (
      <>
        <Modal onClose={()=>setToggle(!toggle)} display={toggle}>
          <div className="cad-modal-container">
            <img src={infoImage} alt="cadastro-img" />
            <strong>Cadastro Realizado com Sucesso!</strong>
            <span>
              <p>O link de confirmalção foi enviado para o</p>
              <p>email {getMailMask()}</p>
            </span>
            <button className="btn" onClick={()=>setToggle(!toggle)}>Fechar</button>
          </div>
        </Modal>
        <div className="container">
        <div>
          <span>
            <a href="/">
              Retornar
            </a>
          </span>
        </div>
        <div>
          <div>
            <img src={cadastroImg} alt="cadastro-img" />
          </div>
          <div>
            <form onSubmit={e=>{
              e.preventDefault()
              setToggle(!toggle)
            }}>
              <div>
                <div>
                  <h3>Cadastrar Candidato</h3>
                  <label>Cadastre-se e encontre a oputunidade que deseja</label>
                </div>
                <div>
                  <img src={griaImg} alt="gria-img" />
                </div>
              </div>
              <div>
                <Input onChange={e=>setDadosFormulario({
                  ...dadosFormulario,
                  cpf: e.target.value
                })} mask="CPF" placeholder="CPF" type="text" required/>
                <Input mask="Email"  onChange={e=>setDadosFormulario({
                  ...dadosFormulario,
                  email: e.target.value
                })} placeholder="Email" type="email" required/>
                <Input  onChange={e=>setDadosFormulario({
                  ...dadosFormulario,
                  senha: e.target.value
                })} placeholder="Senha" type="password" required/>
                <Input  onChange={e=>setDadosFormulario({
                  ...dadosFormulario,
                  confirmSenha: e.target.value
                })} placeholder="Confirmar senha" type="password" required/>
              </div>
              <div>
                <button type="submit">
                  Cadastrar
                </button>
                <button type="button">
                  Já possui cadastro? faça o login aqui
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
  )
}
export default App;

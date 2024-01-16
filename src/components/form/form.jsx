import React from 'react';
import { useForm } from 'react-hook-form'
import './form.css'

const FormRevenda = () => {
    const { register } = useForm()

    
    
    const onSubmit = () => {}
        
    
        

    return ( 
        <>
            <div className="app-container">
                <div className="form-group">
                    <h1 className='title-form'>Titulo</h1>
                    <label>Nome</label>
                    <input
                        //className={errors?.name && "input-error"}
                        type="text"
                        placeholder="Seu nome"
                    />
                    {/*errors?.name && <p className="error-message">{errors?.name}</p>*/}
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input
                        //className={errors?.email && "input-error"}
                        type="email"
                        placeholder="Seu e-mail"
                    />
                    {/*errors?.email && <p className="error-message">{errors?.email}</p>*/}
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input
                        //className={errors?.password && "input-error"}
                        type="password"
                        placeholder="Senha"
                    />
                    {/*errors?.password && (
                        <p className="error-message">{errors?.password}</p>
                    )*/}
                </div>
                <div className="form-group">
                    <label>Profissão</label>
                    <select
                        //className={errors?.profession && "input-error"}
                    >
                        <option value="0">Selecione sua profissão...</option>
                        <option value="developer">Desenvolvedor</option>
                        <option value="other">Outra</option>
                    </select>

                    {/*errors?.profession && (
                        <p className="error-message">{errors?.profession}</p>
                    )*/}
                </div>
                <div className="form-group">
                <div className="checkbox-group">
                <input
                    type="checkbox"
                    name="privacy-policy"
                />
                <label>I agree with the privacy terms.</label>
                </div>

                    {/*errors?.privacyTerms && (
                        <p className="error-message">{errors?.privacyTerms}</p>
                    )*/}
                </div>

                <div className="form-group">
                    <button onClick={onSubmit}>Criar conta</button>
                </div>
            </div>
        </>
    );
}
 
export default FormRevenda;
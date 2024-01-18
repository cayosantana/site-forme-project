import React from 'react';
import { useForm } from 'react-hook-form'
import './form.css'

const FormRevenda = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return ( 
        <>
            <div className="app-container">
                <div className="form-group">
                    <h1 className='title-form'>Titulo</h1>
                    <label>Nome</label>
                    <input
                        className={errors?.name && "input-error"}
                        type="text"
                        placeholder="Seu nome"
                        {...register("name", {required: true})}
                    />
                    {errors?.name?.type === 'required' && <p className="error-message">Nome é um campo obrigatório!</p>}
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input
                        className={errors?.email && "input-error"}
                        type="email"
                        placeholder="Seu e-mail"
                        {...register("email", {required: true})}
                    />
                    {errors?.email?.type === 'required' && <p className="error-message">Email é um campo obrigatório!</p>}
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input
                        className={errors?.password && "input-error"}
                        type="password"
                        placeholder="Senha"
                        {...register("password", {required: true, minLength: 8 })}
                    />
                    {errors?.password?.type === 'required' && (
                        <p className="error-message">Senha é um campo obrigatório!</p>
                    )}
                    {errors?.password?.type === 'minLength' && (
                        <p className="error-message">A senha tem que ter no minimo 8 caracteres!</p>
                    )}
                </div>
                <div className="form-group">
                    <label>Profissão</label>
                    <select
                        {...register("profession", { validate: (value) => {
                            return value !== "0"
                        }})}
                        className={errors?.profession && "input-error"}
                    >
                        <option value="0">Selecione sua profissão...</option>
                        <option value="developer">Desenvolvedor</option>
                        <option value="other">Outra</option>
                    </select>

                    {errors?.profession?.type === 'validate' && (
                        <p className="error-message">O campo Profissão é obrigatório!</p>
                    )}
                </div>
                <div className="form-group">
                <div className="checkbox-group">
                <input
                    type="checkbox"
                    name="privacy-policy"
                    {...register("privacyTerms", {required: true})}
                />
                <label>I agree with the privacy terms.</label>
                </div>

                    {errors?.privacyTerms?.type === 'required' && (
                        <p className="error-message">Campo Obrigatório!</p>
                    )}
                </div>

                <div className="form-group">
                    <button onClick={() => handleSubmit(onSubmit)()}>Criar conta</button>
                </div>
            </div>
        </>
    );
}
 
export default FormRevenda;
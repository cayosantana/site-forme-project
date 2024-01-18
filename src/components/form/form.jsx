//Nesse componenete eu precisei instalar 02 bibliotecas (react-hook-form e validator)
import React from 'react';
import { useForm } from 'react-hook-form'
import validator from 'validator';
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
                    <h1 className='title-form'>Seja um Revendedor</h1>
                    <label>Nome</label>
                    <input
                        className={errors?.name && "input-error"}
                        type="text"
                        placeholder="Nome"
                        {...register("name", {required: true})}
                    />
                    {errors?.name?.type === 'required' && <p className="error-message">Nome é um campo obrigatório!</p>}
                </div>
                <div className="form-group">
                    <label>CNPJ</label>
                    <input
                        className={errors?.cnpj && "input-error"}
                        type="text"
                        placeholder="xx.xxx.xxx/xxxx-xx"
                        {...register("cnpj", {required: true, minLength: 18 })}
                    />
                    {errors?.cnpj?.type === 'required' && (
                        <p className="error-message">CNPJ é um campo obrigatório!</p>
                    )}
                    {errors?.cnpj?.type === 'minLength' && (
                        <p className="error-message">O CNPJ deve ter no minimo 18 caracteres!</p>
                    )}
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input
                        className={errors?.email && "input-error"}
                        type="email"
                        placeholder="e-mail"
                        {...register("email", {required: true, validate: (value) => validator.isEmail(value)})}
                    />
                    {errors?.email?.type === 'required' && <p className="error-message">Email é um campo obrigatório!</p>}
                    {errors?.email?.type === 'validate' && <p className="error-message">Email não é valido!</p>}
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input
                        className={errors?.tel && "input-error"}
                        type="tel"
                        placeholder="(xx) xxxxx-xxxx"
                        {...register("tel", {required: true, minLength: 15 })}
                    />
                    {errors?.tel?.type === 'required' && (
                        <p className="error-message">Telefone é um campo obrigatório!</p>
                    )}
                    {errors?.tel?.type === 'minLength' && (
                        <p className="error-message">O telefone deve possuir DDD!</p>
                    )}
                </div>
                {/*<div className="form-group">
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
                </div>*/}
                {/*<div className="form-group">
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
                    </div>*/}
                <div className="form-group">
                <div className="checkbox-group">
                <input
                    type="checkbox"
                    name="privacy-policy"
                    {...register("privacyTerms", {required: true})}
                />
                <label>Politicas de privacidade e termos de uso.</label>
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
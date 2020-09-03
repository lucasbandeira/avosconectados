import React from 'react'
import AsyncSelect from 'react-select/async'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import './form.css'
import 'react-virtualized/styles.css'

const promiseOptions = inputValue => new Promise((resolve, reject) => {
  fetch('http://localhost:8080/voluntario')
  .then(response => response.json())
  .then(({ items }) => {
    resolve(items.map(({ linha, horario }) => ({ value: linha, label: horario })))
  })
  .catch(reject)
}, 1000);

function FormInscricao() {
  const [voluntarioSelecionado, setVoluntario] = React.useState('')
  return (
      <div>
        <Formik
            initialValues = {{nome: '', telefone: '', linhaDoVoluntario: ''}}
            validate={values => {
              const errors = {};
              if (!values.nome) {
                errors.nome = 'Campo obrigatório';
              } else if(!values.telefone){
                  errors.telefone = 'Campo obrigatório';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    values.linhaDoVoluntario = 'D' + voluntarioSelecionado.value;
                    fetch('http://localhost:8080/voluntario/update', {
                        method: 'post',
                        body: JSON.stringify(values),
                        headers: { "Content-Type" : "application/json; charset=UTF-8" }
                    })
                    .then(function(response) {
                      window.location.href = 'http://localhost:9000/page-2/'
                    })
                    setSubmitting(false)
                }, 400)
            }}
        >
            {
                ({ isSubmitting }) => (
                    <Form action="/page-2">
                      <div className="input-group">
                        <Field type="text" name="nome" placeholder="Nome" className="input--style-2" />
                        <ErrorMessage name="nome" component="div" />
                      </div>
                      <div className="input-group">
                        <Field type="text"
                          name="telefone"
                          placeholder="Telefone/Whatsapp"
                          className="input--style-2"
                        />
                        <ErrorMessage name="telefone" component="div" />
                      </div>
                      <AsyncSelect
                        placeholder="Selecione um horário"
                        name="voluntarioSelecionado"
                        value={voluntarioSelecionado}
                        onChange={event => {
                            setVoluntario(event);
                        }}
                        cacheOptions defaultOptions
                        loadOptions={promiseOptions}
                      /> <br/>
                      <button type="submit" class="btn btn--radius btn--green" disabled={isSubmitting}>
                        Enviar
                      </button><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Form>
                )
            }
        </Formik>
      </div>

  )
}
export default FormInscricao

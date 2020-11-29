import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';

import axios from '../../../services/api';
import logo from '../../../images/logo.svg';
import Header from '../../../components/Header';
import { Title, Container } from './styled';

export default function AlunoEvento() {


  const [category, setCategory] = useState([]);
  const [activity, setActivity] = useState([]);


  const [selectedCategory, setSelectedCategory] = useState('0');
  const [selectedActivity, setSelectedActivity] = useState('0');


  useEffect(() => {
    axios.get('/category').then(response => {
      setCategory(response.data)
    })
  }, [])


  useEffect(() => {
    if (selectedCategory === '0') {
        return;
    }

    const params = {
      idcategory: 1
    }

    axios.get('/activity', {params}).then(response => {
        console.log(response.data)    
        // setActivity(response.data);
    })

},[selectedCategory]) //quando q essa função deve executar


  return (
    <>
      <Header
        image={logo}
        text="Imagem da Logo"
        title="Atividades Complementares"
        ensino="Ensino"
        pesquisa="Pesquisa"
        extencao="Extenção"
        total="Total"
      />

      <Title>Adicionar Atividade</Title>

      <Container className="container">
        <form>
          <div className="form-column raw">
            <div className="drop-raw">
              <div className="form-group col-md-6">
                <label htmlFor="name">Nome da Instituição</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Nome da Instituição"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="atd">Atividade Complementar</label>
                <input
                  type="text"
                  id="atd"
                  className="form-control"
                  placeholder="Atividade Complementar"
                />
              </div>
            </div>
            <div className="drop-raw">
              <div className="form-group col-md-6">
                <label htmlFor="main-text">Modalidade</label>

                <select
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="form-control"
                  id="profile"
                >
                  {category.map(cat => (
                    <option key={cat.idcategory} value={cat.name_cat}>
                      {cat.name_cat}
                    </option>
                  ))}
                </select>


                {/* <select name="uf" id="uf" value="" onChange={handleSelectUf}>
                    <option value="0">Selecione uma UF</option>
                    {category.map(cat => (
                        <option key={cat} value={cat}>{cat.name_cat}</option>
                    ))}
                </select> */}

                {/* <select id="main-text-2" className="form-control">
                  <option>Selecione</option>
                  <option value="">Curso de extenção</option>
                </select> */}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="main-text-2">Atividade</label>
                <select
                  onChange={e => setSelectedActivity(e.target.value)}
                  className="form-control"
                  id="profile"
                >

                {activity.map(act => (
                    <option key={act.idactivity} value={act.description}>
                      {act.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="drop-raw">
              <div className="form-group col-md-6">
                <label htmlFor="main-text">Quantidade de Horas</label>
                <input
                  type="number"
                  id="hour"
                  className="form-control"
                  placeholder="Suas horas validadas"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="hour">Horas Validadas</label>
                <input
                  type="number"
                  id="hour"
                  className="form-control"
                  placeholder="Suas horas validadas"
                />
              </div>
            </div>
            <div className="drop-raw">
              <div className="form-group col-md-6">
                <label htmlFor="name">Data de Conclusão</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Nome da Instituição"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Nome da Instituição</label>
                <input
                  type="file"
                  id="name"
                  className="form-control-file"
                  placeholder="Nome da Instituição"
                />
              </div>
            </div>
            <div className="btn-salve">
              <button className="btn btn-primary">Salvar</button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
}

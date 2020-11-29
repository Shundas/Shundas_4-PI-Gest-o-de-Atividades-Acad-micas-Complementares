import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FiPlus,
  FiClipboard,
  FiTrendingUp,
  FiCheck,
  FiSearch,
} from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.css';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
  },

  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

export default function CardPageColaborador() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <ul className={classes.grid}>
          <div className="card" style={{ width: '18rem' }}>
            <div className={`card-body ${classes.center}`}>
              <FiPlus size={25} color="blue" className="icon" />
              <h5 className="card-title">Adicionar Atividade</h5>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <div className={`card-body ${classes.center}`}>
              <FiSearch size={25} color="blue" className="icon" />
              <h5 className="card-title">Consultar Atividades</h5>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <div className={`card-body ${classes.center}`}>
              <FiClipboard size={25} color="blue" className="icon" />
              <h5 className="card-title">Consultar Regras</h5>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <div className={`card-body ${classes.center}`}>
              <FiCheck size={25} color="blue" className="icon" />
              <h5 className="card-title">Tarefas</h5>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <div className={`card-body ${classes.center}`}>
              <FiTrendingUp size={25} color="blue" className="icon" />
              <h5 className="card-title">Consultar Progresso</h5>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

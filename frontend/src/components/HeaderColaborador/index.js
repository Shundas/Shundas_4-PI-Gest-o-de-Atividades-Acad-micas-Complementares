import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'static',
    background: '#28a745',
    padding: '15px 7px',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  typograph: {
    marginLeft: '10px',
    marginRight: '10px',
  },
}));

const Background = styled.img`
  max-width: 208px;
`;

const ContainerApp = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default function AppBarPageColaborador() {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <ContainerApp>
            <Background
              src={require('../../images/logo.svg')}
              alt="Imagem da Logo"
            />
            <Typography className={classes.typograph} variant="h6">
              Atividades Complementares
            </Typography>
          </ContainerApp>
          <Button color="inherit">
            <FiUser size={25} />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

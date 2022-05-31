import React from "react";
import { useState, useEffect } from "react";
import data from "../components/data.json";
import management from "./management.json";
import { Card } from "./Card";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import "../styles/listCard.css";


import Gestao from "./Gestao";
import ControlledSelect from './ControlledSelect';
import Button from './Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  endomarketing: {
    marginLeft: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 10,
    marginLeft: theme.spacing(2),
    maxHeight:'100%',
  },
  widgets: {
    flexGrow: 1,
    background: "#121212",
    marginTop: 40,
    marginLeft: theme.spacing(2),
  },
  widget2: {
    padding: theme.spacing(2),
    background:"#fff2de"
  },
  widget3: {
    padding: theme.spacing(2),
    marginTop: 10,
  },
  widget4: {
    padding: theme.spacing(1),
    marginTop: 5,
    background:"#3489b121"
    
  },
  image: {
    width: "100%",
    height: "100%",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: 73,
    maxHeight: 73,
  },
  gestao: {
    padding: theme.spacing(2),
  },
  img_gestao: {
    margin: "auto",
    display: "block",
    maxWidth: 60,
    maxHeight: 60,
  },
}));

data = data.data;
 management = management.data[0].boards;

var arr = management.map(function(obj) {
    return Object.keys(obj).map(function(key) {
        return obj[key];
    });
});

const ListCard = () => {
  const classes = useStyles();

  return (
    
    <Grid container spacing={2}>
    <Grid item xs={12} sm container>
        <div className={classes.root}>
        <Grid container spacing={12}
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end">
           
            <Grid className={classes.endomarketing} item xs={9}>
            <h1>Endomarketing</h1>
            </Grid>
            <Grid item xs>
             <ControlledSelect />
             </Grid>
             <Grid item xs>
             <Button />
             </Grid> 
        </Grid>
          {data.map((item) => {
            return (
              <Paper className={classes.paper} key={item.id}>
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={item.file.url} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs={8}>
                        <Typography gutterBottom variant="subtitle1">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {item.type}|{item.info.date}|{}confirmações de {}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            );
          })}
        </div>
      </Grid>

      <Grid item xs={4}>
      <Grid item xs={12} sm container>
      
        <Grid item xs container direction="column" spacing={2}>
          <Grid item className={classes.widgets}>
          
            <div>
            
              <Paper className={classes.widget2}>
                <Typography gutterBottom variant="subtitle1">
                  Endomarketing
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Endomarketing está relacionado às ações de treinamento ou
                  qualificação dos colaboradores da empresa visando um melhor
                  serviço para o cliente. Marketing interno, devido ao nome, é
                  usualmente confundido com Endomarketing mesmo sendo conceitos
                  diferentes.
                </Typography>
              </Paper>
            </div>
            
            <Paper className={classes.widget3}>
            <Typography gutterBottom variant="subtitle1">
              Quadros de Gestão à Vista
            </Typography>

            {arr.map((management) => {
            return(
            <Paper className={classes.widget4}>
            <Typography variant="body2" color="textSecondary">
             {management[0]}
            </Typography>
            <Grid className={classes.gestao} container spacing={3}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                item
                xs={12}
              >
                <Grid item xs={3}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img_gestao}
                      alt="complex"
                      src={management[1][0].file}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={3}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img_gestao}
                      alt="complex"
                      src={management[1][1].file}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={3}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img_gestao}
                      alt="complex"
                      src={management[1][2].file}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={3}>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img_gestao}
                      alt="complex"
                      src={management[1][3].file}
                    />
                  </ButtonBase>
                </Grid>
              </Grid>
            </Grid>

            </Paper>
                );
                })}
          </Paper>
                  
          </Grid>
      </Grid>

      </Grid>
               
    </Grid>
    </Grid>
  );
};

export default ListCard;



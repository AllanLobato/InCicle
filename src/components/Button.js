import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      flexGrow: 1,
      margin: 2,
      width: 103,
      height: 38,
      background:'#3489b1',
      color:'#fff'
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" >Criar +</Button>
    </div>
  );
}
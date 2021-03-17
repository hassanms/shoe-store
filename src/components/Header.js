import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ReactComponent as Home } from '../media/icons/home.svg';
import { ReactComponent as Nike } from '../media/icons/nike.svg';
import { ReactComponent as Adidas } from '../media/icons/adidas.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  linkDecoration: {
      textDecoration: "none",
      color: "black"
  },
  selectedLink: {
    color: "blue"
  }
}));

export default function Header() {
    const classes = useStyles();
    const [selected, setSelected] = useState(0);

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs>
                    <Link to="/" className={clsx({[classes.linkDecoration]: true, [classes.selectedLink]: selected === 0})} onClick={() => setSelected(0)}>
                      <Tab label="Home" icon={<Home width={30} height={30} />} />
                      </Link>
                    <Link to="/nike" className={clsx({[classes.linkDecoration]: true, [classes.selectedLink]: selected === 1})} onClick={() => setSelected(1)}>
                      <Tab label="Nike" icon={<Nike width={30} height={30} />} />
                      </Link>
                    <Link to="/adidas" className={clsx({[classes.linkDecoration]: true, [classes.selectedLink]: selected === 2})} onClick={() => setSelected(2)}>
                      <Tab label="Adidas" icon={<Adidas width={30} height={30} />} />
                      </Link>
                </Tabs>
            </AppBar>
        </div>
    );
    
}
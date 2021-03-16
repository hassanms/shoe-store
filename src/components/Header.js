import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    linkDecoration: {
        textDecoration: "none",
    }
  }));

export default function Header() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Link to="/"><Tab label="Home" icon={<PhoneIcon />} /></Link>
                    <Link to="/nike"><Tab label="Nike" icon={<FavoriteIcon />} /></Link>
                    <Link to="/adidas"><Tab label="Adidas" icon={<PersonPinIcon />} /></Link>
                    <Tab label="Item Four" icon={<HelpIcon />} />
                </Tabs>
            </AppBar>
            {/* <TabPanel value={value} index={0}>
                Home
            </TabPanel>
            <TabPanel value={value} index={1}>
                Nike
            </TabPanel>
            <TabPanel value={value} index={2}>
                Adidas
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel> */}
        </div>
    );
    
}
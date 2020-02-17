import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from "../img/SouDestLogo.svg";
import '../css/AppBar.css';
import {useHistory} from "react-router-dom";

import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory();

    const handleChange = event => {
        setAuth(event.target.checked);
    };

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleAppBarButton = event => {
        if (event.target.className === "test") {
            history.push({pathname: "/", state: {logout: true}});
        } else if (event.target.id === 'profile') {
            history.push({pathname: "/Profile", state: {logout: true}});
        }
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        if (event.target.id === 'logout') {
            history.push({pathname: "/SignIn", state: {logout: true}});
        } else if (event.target.id === 'profile') {
            history.push({pathname: "/Profile", state: {logout: true}});
        }
    };

    /*
    <FormGroup>
        <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            label={auth ? 'Logout' : 'Login'}
        />
    </FormGroup>
    */
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton href="/" edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                onClick={handleAppBarButton}>
                        <img src={logo} className="App-logo" alt="SouDest Logo"/>
                    </IconButton>
                    <Button href="/"  variant="text" className="AppBarItems" >
                        SouDest
                    </Button>
                    <Button variant="text"  className="AppBarItems">
                        |
                    </Button>
                    <Button href="#/plan/"  id="plan" variant="text" className="AppBarItems" >
                        Planen
                    </Button>
                    <Button href="#/travel/"  id="travel" variant="text" className="AppBarItems">
                        Reisen
                    </Button>
                    <Button href="#/tickets/"  id="tickets" variant="text" className="AppBarItems">
                        meine Tickets
                    </Button>
                    {auth && (
                        <div className="ProfileIcon">
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem id="profile" onClick={handleClose}>Profile</MenuItem>
                                <MenuItem id="logout" onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

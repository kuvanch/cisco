import React from 'react';
import {Switch, Route, NavLink } from "react-router-dom";
import User from "./User/index";
import clsx from 'clsx';
import {useHistory} from "react-router-dom"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Admin from './adminpage/Auth'
import Contact from './adminpage/Table'
import Upload from './adminpage/Upload'
import { Button } from '@material-ui/core';
const drawerWidth = 240;  

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowY: 'hidden',
    overflowX:'hidden'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background:"#fff",
    height:"100vh", 
  },
}));
function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const history = useHistory()
  const exitClick = () => {
    history.push("/admin")
    history.go()
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={window.location.pathname === "/" ? {display:"none"}:null}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
              Панель администратора
          </Typography>
          <Button 
            style={{marginLeft:"auto", color:"#fff"}} color="secondary" variant="contained"
            onClick={exitClick}
          >
            выход
          </Button>
        </Toolbar>
       
      </AppBar>
      <Drawer
        variant="permanent"
        style={window.location.pathname === "/" ? {display:"none"}:null}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['contact','upload'].map((text, index) => (
            <NavLink to={`/${text}`} key={index} style={{textDecoration:"none", color:"#333"}} activeClassName="active">
                <ListItem button key={text}>
                    <ListItemIcon>{index === 2 ? <ExitToAppIcon /> : (index === 0 ? <ContactPhoneIcon/> : <CloudUploadIcon/>)}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            </NavLink>
          ))}     
        </List>
        <Divider />
      </Drawer>
          <Switch>
              <Route exact path="/">
                <User/>
              </Route>
              <main className={classes.content}>
              <div className={classes.toolbar} />
                  <Route exact path="/contact">
                      <Contact/>
                  </Route>
                  <Route exact path="/upload">
                      <Upload/>
                  </Route>
                  <Route exact path="/admin">
                    <Admin/>
                  </Route>
                  <Route exact path="/">
                    <RedirectUser/>
                  </Route>
                </main>
          </Switch>   
    </div>
  );
}

export function RedirectUser(){
  React.useEffect(()=>{
    window.location.href="/"
  },[])
  return(
    <></>
  )
}

export default App;

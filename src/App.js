import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
// pages
import Home from "./pages/Home.tsx";
import About from "./pages/About";
import Layout from "./Layout";
import Products from "./pages/Products";
import SignIn from "./pages/Login/index.tsx"
import BlockView from "./pages/BlockView.tsx"
import ProductDetails from "./pages/ProductDetails";
import CreatePage from "./pages/CreatePage.tsx"
import Login from './pages/Login/index.tsx';
import Register from './pages/Register/index.tsx';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;
const listDrawer = [
  {
    title: "Blog articles",
    to: "/home",
    icon:"/images/pen-tool-color.png"
  },
  {
    title: "Create page",
    to: "/create-page",
    icon:"/images/file-plus-color.png"
  },
  {
    title: "Files",
    to: "/files",
    icon:"/images/fileIcon.png"
  },
];
const LinkNav = [
  {
    title: "Pricing",
    to: "/",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Home",
    to: "/home",
  },
  {
    title: "Sign in",
    to: "/login",
  },
];
const App = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [isCheckLogin, setIsCheckLogin] = useState(false);
  const [indexNav, setIndexNav] = useState(0)

  useEffect(() => {
    if (window.location.pathname != "/") {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
    if (window.location.pathname == "/login" || window.location.pathname == "/register") {
      setIsCheckLogin(true);
    } else {
      setIsCheckLogin(false);
    }
   
  }, []);
  useEffect(() => {
    listDrawer.map((data, index) =>{
      if(window.location.pathname == data.to){
        setIndexNav(index)
      }
    })
   
  }, []);
  const getDataNav = (data) => {
    if (data != "/") {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
    if(data == "/login"){
      
      setIsCheckLogin(true)
    }else{
      setIsCheckLogin(false)
    }
  };
  const changeNav = (index) =>{
    setIndexNav(index)
  }
  return (
    <div style={{height: isCheck == false ? "150vh" : "auto" }}>
      {isCheck == false ? (
        <div className={isCheckLogin == true ? "App " : "App bg-image"} >
          <BrowserRouter>
          {
            isCheckLogin == false  ? 
            <nav
            style={{
              width: "97%",
              maxWidth: "100%",
              border: "none",
              justifyContent: "end",
              gap: "84px",
              paddingTop: "36px",
            }}
          >
            {LinkNav.map((data, index) => {
              return (
                <Link
                  style={
                    data.to == "/login"
                      ? {
                          textDecorationLine: "none",
                          border: "1px solid",
                          padding: "5px 20px 5px 20px",
                          borderRadius: "5px",
                        }
                      : { textDecorationLine: "none" }
                  }
                  to={data.to}
                >
                  <div onClick={() => getDataNav(data.to)}>{data.title}</div>
                </Link>
              );
            })}
          </nav> : null
            
          }
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Layout} />
              <Route exact path="/products/:id" component={ProductDetails} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </BrowserRouter>
        </div>
      ) : (
        <div className="App">
          <BrowserRouter>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                style={{ backgroundColor: "#2D3748" }}
              >
                <Toolbar>
                  <img style={{ width: "30px" }} src="/images/group.png"></img>
                  <span style={{ color: "#ffffff", fontSize: "20px" }}>
                    Rival
                  </span>
                  <span style={{ color: "#4299E1", fontSize: "20px" }}>
                    CMS
                  </span>{" "}
                </Toolbar>
                <div style={{ position: "absolute", right: "140px", top:"16px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={11}>
                        <button
                      style={{
                        width: "82px",
                        height: "32px",
                        backgroundColor: "#D53F8C",
                        color: "#FFFCFE",
                        border: "none",
                        marginRight:"25px",
                        borderRadius: "5px",
                      }}
                    >
                      Pro plan
                    </button>
                        </Grid>
                        <Grid item xs={1}>
                          <img style={{width:"50px",position:"absolute", top:"-10px", borderRadius:"50px"}} src="/images/image-avatar.png"></img>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
              </AppBar>
              <Drawer
                variant="permanent"
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                  },
                }}
              >
                <Toolbar />
                <Box sx={{ overflow: "auto", padding:"25px",backgroundColor:"#E2E8F0", height:"100%"}}>
                  <List>
                    {listDrawer.map(
                      (text, index) => (
                        
                        <ListItem key={text.to} disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <img style={{width:"25px"}} src={text.icon}></img>
                              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            </ListItemIcon>
                            <Link
                            style={{textDecorationLine: "none" }}
                              to={text.to}
                              onClick={()=>changeNav(index)}
                            >
                              <div style={{color:"#2C5282", fontWeight:indexNav == index ?  "900" : "400"}}>{text.title}</div>
                            </Link>
                          </ListItemButton>
                        </ListItem>
                      )
                    )}
                  </List>
                  
                </Box>
              </Drawer>
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                 <Switch>
                  <Route exact path="/home" component={BlockView} />
                  <Route exact path="/create-page" component={CreatePage} />
                </Switch>
              </Box>
            </Box>
           
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default App;

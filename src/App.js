import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
// pages
import Home from "./pages/Home.tsx";
import About from "./pages/About";
import Layout from "./Layout";
import Products from "./pages/Products";
import BlockView from "./pages/BlockView.tsx"
import ProductDetails from "./pages/ProductDetails";
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

const App = () => {
  const [isCheck, setIsCheck] = useState(false);
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
      to: "/products",
    },
  ];
  useEffect(() => {
    if (window.location.pathname == "/home") {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  }, []);
  const getDataNav = (data) => {
    if (data == "/home") {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  };
  return (
    <div style={{height: isCheck == false ? "150vh" : "auto" }}>
      {isCheck == false ? (
        <div className="App bg-image">
          <BrowserRouter>
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
                      data.to == "/products"
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
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about">
                <About />
              </Route>
              <Route path="/home">
                <Layout />
              </Route>
              <Route path="/products/:id">
                <ProductDetails />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      ) : (
        <div className="App">
          <BrowserRouter>
            {/* <nav
              style={{
                width: "100%",
                maxWidth: "100%",
                backgroundColor: "#2D3748",
                height: "80px",
              }}
            >
              <div style={{ paddingRight: "80px", paddingLeft: "100px" }}>
                <div style={{ display: "flex" }}>
                  <img style={{ width: "30px" }} src="/group.png"></img>
                  <span style={{ color: "#ffffff", fontSize: "20px" }}>
                    Rival
                  </span>
                  <span style={{ color: "#4299E1", fontSize: "20px" }}>
                    CMS
                  </span>{" "}
                  <div style={{ position: "absolute", right: "150px" }}>
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
                        borderRadius: "5px",
                      }}
                    >
                      123
                    </button>
                        </Grid>
                        <Grid item xs={1}>
                          <img style={{width:"50px",position:"absolute", top:"-10px"}} src="/logo192.png"></img>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>
                </div>
              </div>
            </nav> */}
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                style={{ backgroundColor: "#2D3748" }}
              >
                <Toolbar>
                  <img style={{ width: "30px" }} src="/group.png"></img>
                  <span style={{ color: "#ffffff", fontSize: "20px" }}>
                    Rival
                  </span>
                  <span style={{ color: "#4299E1", fontSize: "20px" }}>
                    CMS
                  </span>{" "}
                </Toolbar>
                <div style={{ position: "absolute", right: "150px", top:"16px" }}>
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
                        borderRadius: "5px",
                      }}
                    >
                      Pro plan
                    </button>
                        </Grid>
                        <Grid item xs={1}>
                          <img style={{width:"50px",position:"absolute", top:"-10px"}} src="/logo192.png"></img>
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
                    {["View site", "Starred", "Send email", "Drafts"].map(
                      (text, index) => (
                        
                        <ListItem key={text} disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <Link
                            style={{textDecorationLine: "none" }}
                            >
                              <div style={{color:"#2C5282"}}>{text}</div>
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
                  <Route exact path="/" component={Home} />
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/home">
                    <BlockView />
                  </Route>
                  <Route path="/products/:id">
                    <ProductDetails />
                  </Route>
                  <Route path="/products">
                    <Products />
                  </Route>
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

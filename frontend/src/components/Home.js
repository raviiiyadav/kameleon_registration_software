// import HomeIcon from "@mui/icons-material/Home";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import PeopleIcon from "@mui/icons-material/People";
// import GroupsIcon from "@mui/icons-material/Groups";
// import PersonIcon from "@mui/icons-material/Person";
// import BadgeIcon from "@mui/icons-material/Badge";
// import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

// import {
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import React from "react";

// const SideBar = () => {
//   const [open, setOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };
//   return (
//     <Box
//       bgcolor={"lightBlue"}
//       flex={1}
//       p={2}
//       // sx={{ display: { xs: "none", sm: "block" } }}
//     >
//       <Box position="fixed">
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <HomeIcon />
//               </ListItemIcon>
//               <ListItemText primary="Homepage" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <CheckCircleOutlineIcon />
//               </ListItemIcon>
//               <ListItemText primary="Check-In" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <GroupsIcon />
//               </ListItemIcon>
//               <ListItemText primary="Exhibitor" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <PeopleIcon />
//               </ListItemIcon>
//               <ListItemText primary="Visitor" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <PersonIcon />
//               </ListItemIcon>
//               <ListItemText primary="Organiser" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <BadgeIcon />
//               </ListItemIcon>
//               <ListItemText primary="Badge" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <PermPhoneMsgIcon />
//               </ListItemIcon>
//               <ListItemText primary="Save Contact" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </Box>
//     </Box>
//   );
// };

// export default SideBar;

// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function SideBar() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Kameleon Tech
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "rtl" ? (
//               <ChevronRightIcon />
//             ) : (
//               <ChevronLeftIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         {/* <Divider /> */}
//         <List>
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//       </Box>
//     </Box>
//   );
// }

// import HomeIcon from "@mui/icons-material/Home";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import PeopleIcon from "@mui/icons-material/People";
// import GroupsIcon from "@mui/icons-material/Groups";
// import PersonIcon from "@mui/icons-material/Person";
// import BadgeIcon from "@mui/icons-material/Badge";
// import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
// import MenuIcon from "@mui/icons-material/Menu";
// import {
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Drawer,
//   IconButton,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import { useState } from "react";

// const SideBar = () => {
//   const [open, setOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <>
//       {/* Mobile Drawer */}
//       <IconButton
//         color="inherit"
//         aria-label="open drawer"
//         onClick={handleDrawerToggle}
//         edge="start"
//         sx={{
//           display: { sm: "block", md: "none" },
//           position: "absolute",
//           top: 0,
//           right: 0,
//           zIndex: 1,
//         }}
//       >
//         <MenuIcon />
//       </IconButton>

//       <Drawer
//         anchor="left"
//         open={open}
//         onClose={handleDrawerToggle}
//         sx={{ display: { sm: "block", md: "none" } }}
//       >
//         <Box
//           role="presentation"
//           onClick={handleDrawerToggle}
//           onKeyDown={handleDrawerToggle}
//         >
//           <List>
//             <ListItem disablePadding>
//               <ListItemButton component="a" href="#home">
//                 <ListItemIcon>
//                   <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Homepage" />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton component="a" href="#simple-list">
//                 <ListItemIcon>
//                   <CheckCircleOutlineIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Check-In" />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton component="a" href="#simple-list">
//                 <ListItemIcon>
//                   <GroupsIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Exhibitor" />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton component="a" href="#simple-list">
//                 <ListItemIcon>
//                   <PeopleIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Visitor" />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton component="a" href="#simple-list">
//                 <ListItemIcon>
//                   <PersonIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Organiser" />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton component="a" href="#simple-list">
//                 <ListItemIcon>
//                   <BadgeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Badge" />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton component="a" href="#simple-list">
//                 <ListItemIcon>
//                   <PermPhoneMsgIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Save Contact" />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>

//       {/* Desktop Sidebar */}
//       <Box
//         bgcolor="lightBlue"
//         flex={1}
//         p={2}
//         sx={{ display: { xs: "none", md: "block" } }}
//       >
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#home">
//               <ListItemIcon>
//                 <HomeIcon />
//               </ListItemIcon>
//               <ListItemText primary="Homepage" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <CheckCircleOutlineIcon />
//               </ListItemIcon>
//               <ListItemText primary="Check-In" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <GroupsIcon />
//               </ListItemIcon>
//               <ListItemText primary="Exhibitor" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <PeopleIcon />
//               </ListItemIcon>
//               <ListItemText primary="Visitor" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <PersonIcon />
//               </ListItemIcon>
//               <ListItemText primary="Organiser" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <BadgeIcon />
//               </ListItemIcon>
//               <ListItemText primary="Badge" />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton component="a" href="#simple-list">
//               <ListItemIcon>
//                 <PermPhoneMsgIcon />
//               </ListItemIcon>
//               <ListItemText primary="Save Contact" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </Box>
//     </>
//   );
// };

// export default SideBar;

// import { useState } from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Home from "./Home";

// import HomeIcon from "@mui/icons-material/Home";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import PeopleIcon from "@mui/icons-material/People";
// import GroupsIcon from "@mui/icons-material/Groups";
// import PersonIcon from "@mui/icons-material/Person";
// import BadgeIcon from "@mui/icons-material/Badge";
// import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

// const drawerWidth = 240;

// function SideBar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [menuData, setMenuData] = useState("Home");

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         <ListItem disablePadding onClick={() => setMenuData("Home")}>
//           <ListItemButton>
//             <ListItemIcon>
//               <HomeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Home" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding onClick={() => setMenuData("Home")}>
//           <ListItemButton>
//             <ListItemIcon>
//               <CheckCircleOutlineIcon />
//             </ListItemIcon>
//             <ListItemText primary="Check-In" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding onClick={() => setMenuData("Home")}>
//           <ListItemButton>
//             <ListItemIcon>
//               <PeopleIcon />
//             </ListItemIcon>
//             <ListItemText primary="Exhibitor" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding onClick={() => setMenuData("Home")}>
//           <ListItemButton>
//             <ListItemIcon>
//               <GroupsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Visitor" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding onClick={() => setMenuData("Home")}>
//           <ListItemButton>
//             <ListItemIcon>
//               <PersonIcon />
//             </ListItemIcon>
//             <ListItemText primary="Organiser" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding onClick={() => setMenuData("Home")}>
//           <ListItemButton>
//             <ListItemIcon>
//               <BadgeIcon />
//             </ListItemIcon>
//             <ListItemText primary="Badge" />
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding onClick={() => setMenuData("Home")}>
//           <ListItemButton>
//             <ListItemIcon>
//               <PermPhoneMsgIcon />
//             </ListItemIcon>
//             <ListItemText primary="Save Contact" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//       <Divider />
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           sx={{
//             width: { sm: `calc(100% - ${drawerWidth}px)` },
//             ml: { sm: `${drawerWidth}px` },
//           }}
//         >
//           <Toolbar>
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap component="div">
//               Kameleon
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Box
//           component="nav"
//           sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//           aria-label="mailbox folders"
//         >
//           {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//           <Drawer
//             variant="permanent"
//             sx={{
//               display: { xs: "none", sm: "block" },
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//               },
//             }}
//             open
//           >
//             {drawer}
//           </Drawer>
//         </Box>
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             p: 3,
//             width: { sm: `calc(100% - ${drawerWidth}px)` },
//           }}
//         >
//           {/* <Toolbar /> */}
//           {menuData === "Home" && <Home />}
//         </Box>
//       </Box>
//     </>
//   );
// }

// SideBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default SideBar;

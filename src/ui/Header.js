import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import ElevationScroll from './ElevationScroll';
import Link from '../Link';
import { useTheme } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { headerStyles } from './styles';

const Header = (props) => {
  const classes = headerStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'iOS/Android App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case '/estimate':
          props.setValue(5);
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptions, routes, props.selectedIndex, props]);

  const tabs = (
    <>
      <Tabs
        value={props.value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            disableRipple
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        href="/estimate"
        disableRipple
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => {
          props.setValue(5);
        }}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}, ${i}`}
            component={Link}
            href={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
            disableRipple
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              href={route.link}
              selected={props.value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            href="/estimate"
            selected={props.value === 5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <img
                className={classes.logo}
                src="/assets/logo.svg"
                alt="company_logo"
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;

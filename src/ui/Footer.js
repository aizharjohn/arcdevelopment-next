import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import Link from '../Link';

import { footerStyles } from './styles';

const Footer = (props) => {
  const classes = footerStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/"
                onClick={() => props.setValue(0)}
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                href="/customsoftware"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/mobileapps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                href="/websites"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                href="/revolution"
                onClick={() => props.setValue(2)}
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/about"
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                href="/about"
                onClick={() => props.setValue(3)}
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/contact"
                onClick={() => props.setValue(4)}
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src="/assets/footerAdornment.svg"
        className={classes.adornment}
        alt="black decorative slash"
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/facebook.svg"
            alt="facebook logo"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/twitter.svg"
            alt="twitter logo"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram logo"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated } from 'components';

import content from './content';
import styles from './style';
import { withStyles } from '@material-ui/styles';

const { tagline, title, subtitle } = content;

const Welcome = ({ classes }) => {
  return (
    <>
      <Typography className={classes.strike} variant='h3' color='textPrimary'>
        {tagline}
      </Typography>
      <Typography className={classes.strike} variant='h3' color='textPrimary'>
        {tagline}
      </Typography>
      <Typography className={classes.strike} variant='h3' color='textPrimary'>
        {tagline}
      </Typography>
      <Typography className={classes.strike} variant='h3' color='textPrimary'>
        {tagline}
      </Typography>
      <Typography className={classes.strike} variant='h3' color='textPrimary'>
        {tagline}
      </Typography>
      <Fade in timeout={1000}>
        <Typography variant='h1' color='textPrimary'>
          {title}
        </Typography>
      </Fade>
      <Typography variant='h3' color='textPrimary'>
        {subtitle}
      </Typography>
    </>
  );
};

export default withStyles(styles)(Welcome);

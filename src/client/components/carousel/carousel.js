import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: 'Welcome',
    imgPath: 'src/client/assets/images/carouselslides/welcome.png'
  },
 
  {
    label: 'Dragonfly',
    imgPath: 'src/client/assets/images/carouselslides/dragonfly.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'src/client/assets/images/carouselslides/welcome.png'
  },
 
  {
    label: 'Frog',
    imgPath: 'src/client/assets/images/carouselslides/frog.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'src/client/assets/images/carouselslides/welcome.png'
  },
 
  {
    label: 'Meerkat',
    imgPath: 'src/client/assets/images/carouselslides/meerkat.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'src/client/assets/images/carouselslides/welcome.png'
  },
 
  {
    label: 'Snow Leopard',
    imgPath: 'src/client/assets/images/carouselslides/snowleopard.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'src/client/assets/images/carouselslides/welcome.png'
  },
 
  {
    label: 'Vulture',
    imgPath: 'src/client/assets/images/carouselslides/vulture.jpg'
  },
 
  {
    label: 'Welcome',
    imgPath: 'src/client/assets/images/carouselslides/welcome.png'
  }
 ];
 
 const styles = (theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1
  },
  img: {
    height: 600,
    maxWidth: '100%',
    overflow: 'hidden',
    display: 'block',
    width: '100%'
  }
 });
 
 class Carousel extends React.Component {
  state = {
    activeStep: 0
  };
 
  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1
    }));
  };
 
  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1
    }));
  };
 
  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
 
    return (
      <div className={classes.root}>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    );
  }
 }
 
 Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
 };
 
 export default withStyles(styles, { withTheme: true })(Carousel);
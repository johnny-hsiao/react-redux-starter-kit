import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { teal500, teal600, teal700 } from 'material-ui/styles/colors';
import { white } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from '../../components/Header';
import classes from './CoreLayout.scss';
import '../../styles/core.scss';

// needed for ontouchtap events
injectTapEventPlugin();

export const appPalette = {
  primary1Color: teal500,
  primary2Color: teal600,
  primary3Color: teal700,
  // accent1Color: pinkA200,
  // accent2Color: grey100,
  // accent3Color: grey500,
  textColor: white,
  // alternateTextColor: white,
  // canvasColor: white,
  // borderColor: grey300,
  // disabledColor: fade(darkBlack, 0.3),
  // pickerHeaderColor: cyan500,
  // clockCircleColor: fade(darkBlack, 0.07),
  // shadowColor: fullBlack,
};

const muiTheme = getMuiTheme({
  palette: appPalette,
  appBar: {
    // Actual Header height is 60px. Header has 'padding-top: 8px' to vertically center buttons
    height: 52,
  }
});

export const CoreLayout = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className='text-center'>
      <Header />
      <div className={classes.mainContainer}>
        {children}
      </div>
    </div>
  </MuiThemeProvider>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;
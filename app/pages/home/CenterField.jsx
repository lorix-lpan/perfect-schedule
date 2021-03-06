import React from 'react';
import Paper from 'material-ui/Paper';

import SuggestSchool from './SuggestSchool';
import { blue500 } from 'material-ui/styles/colors';

const centerStyle = {
  paddingTop: '2em',
  marginTop: '3%',
  textAlign: 'center',
};

const titleStyle = {
  color: blue500,
  fontSize: '1.3em',
  fontWeight: '300',
  marginBottom: '1em',
};

const containerStyle = {
  paddingTop: '0.5em',
  paddingBottom: '1em',
};

function CenterField() {
  return (
    <div className="row center-xs">
      <Paper className="col-md-6 col-xs-10" style={centerStyle} zDepth={3}>
        <div style={containerStyle}>
          <div className="row center-xs">
            <p style={titleStyle}>Find Your Perfect Schedule Now</p>
          </div>
          <SuggestSchool inputType="school" />
        </div>
      </Paper>
    </div>
  );
}

export default CenterField;

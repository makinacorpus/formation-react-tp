import React from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NominatimForm from './NominatimForm';
import NominatimFormUncontrolled from './NominatimFormUncontrolled';
import i18n from '../../services/i18n';

function Nominatim({
  handleSubmitControlled,
  handleSubmitUncontrolled,
  handleChange,
  handleInput,
  inputValue
}) {
  return (
    <MuiThemeProvider>
      <Card className="Nominatim" style={{
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        botto: 0,
        margin: 12,
        width: '400px',
        zIndex: 10000
      }}>
        <CardTitle
          title={i18n.t('search address')}
          titleStyle={{fontSize: 16}}
          titleColor="#006064" />
        <CardText>
          Form controlled
          <NominatimForm
            handleSubmit={handleSubmitControlled}
            handleChange={handleChange}
            inputValue={inputValue}
          />
          Form uncontrolled
          <NominatimFormUncontrolled
            handleSubmit={handleSubmitUncontrolled}
            inputValue={inputValue}
            handleInput={handleInput}
          />
        </CardText>
      </Card>
    </MuiThemeProvider>
  );
}

export default Nominatim;

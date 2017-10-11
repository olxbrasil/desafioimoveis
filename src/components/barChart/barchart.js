import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'barchart': {
    'maxWidth': [{ 'unit': 'px', 'value': 400 }],
    'margin': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 300 }],
    'display': 'flex',
    'flexWrap': 'wrap',
    'alignItems': 'flex-end',
    'justifyContent': 'space-around',
    'screen&&>w768': {
      'margin': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
    }
  },
  'barchart__title': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.3 }]
  },
  'barchart__bar': {
    'minHeight': [{ 'unit': 'px', 'value': 65 }],
    'width': [{ 'unit': '%H', 'value': 0.45 }],
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }],
    'WebkitTransition': 'height 0.5s',
    'transition': 'height 0.5s',
    'borderRadius': '10px 10px 0 0',
    'background': '#3f51b5',
    'background': '-moz-linear-gradient(top, #3f51b5 0%, #2e44b2 100%)',
    'background': '-webkit-linear-gradient(top, #3f51b5 0%,#2e44b2 100%)',
    'background': 'linear-gradient(to bottom, #3f51b5 0%,#2e44b2 100%)',
    // filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3f51b5', endColorstr='#2e44b2',GradientType=0 );
    'color': 'white',
    'fontSize': [{ 'unit': 'em', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.4 }]
  }
});

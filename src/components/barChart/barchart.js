import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'barchart': {
    'position': 'relative',
    'maxWidth': [{ 'unit': 'px', 'value': 400 }],
    'margin': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': 'auto' }],
    'maxHeight': [{ 'unit': 'px', 'value': 250 }],
    'minHeight': [{ 'unit': 'px', 'value': 250 }],
    'height': [{ 'unit': 'px', 'value': 250 }]
  },
  'barchart__bar': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 190 }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }],
    // background: #2a92d3;
	background: -moz-linear-gradient(top, #2a92d3 0%, #00a5c6 100%);
	background: -webkit-linear-gradient(top, #2a92d3 0%,#00a5c6 100%);
	background: linear-gradient(to bottom, #2a92d3 0%,#00a5c6 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2a92d3', endColorstr='#00a5c6',GradientType=0 );
    'background': '#3f51b5',
    'background': '-moz-linear-gradient(top, #3f51b5 0%, #2e44b2 100%)',
    'background': '-webkit-linear-gradient(top, #3f51b5 0%,#2e44b2 100%)',
    'background': 'linear-gradient(to bottom, #3f51b5 0%,#2e44b2 100%)',
    'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#3f51b5', endColorstr='#2e44b2',GradientType=0 )',
    'color': 'white'
  },
  'barchart__bar:last-of-type': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  }
});

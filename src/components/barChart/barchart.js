import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'barchart': {
    'position': 'relative',
    'maxWidth': [{ 'unit': 'px', 'value': 400 }],
    'margin': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'px', 'value': 200 }],
    'maxHeight': [{ 'unit': 'px', 'value': 200 }],
    'minHeight': [{ 'unit': 'px', 'value': 200 }],
    // overflow: hidden;
    'display': 'flex',
    'flexWrap': 'wrap',
    'alignItems': 'flex-end'
  },
  'barchart__title': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'barchart__bar': {
    'minHeight': [{ 'unit': 'px', 'value': 35 }],
    // position: absolute;
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'boxSizing': 'border-box',
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }],
    'WebkitTransition': 'height 0.5s',
    'transition': 'height 0.5s',
    'background': '#3f51b5',
    'background': '-moz-linear-gradient(top, #3f51b5 0%, #2e44b2 100%)',
    'background': '-webkit-linear-gradient(top, #3f51b5 0%,#2e44b2 100%)',
    'background': 'linear-gradient(to bottom, #3f51b5 0%,#2e44b2 100%)',
    'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#3f51b5', endColorstr='#2e44b2',GradientType=0 )',
    'color': 'white'
  },
  'barchart__bar:last-of-type': {
    'right': [{ 'unit': 'px', 'value': 0 }],
    'float': 'right'
  }
});

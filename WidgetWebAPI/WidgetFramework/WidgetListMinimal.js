import React from 'react';
import ReactDOM from 'react-dom';
import GridLayout from './GridLayout'
import BasicLayout from './BasicLayout'
import DynamicLayout from './DynamicLayout'
import App from './App'
import WidgetListMinimal from './components/widget/WidgetListMinimal'
import LineChartWidget from './components/widget/LineChartWidget'
import StackedAreaChartWidget from './components/widget/StackedAreaChartWidget'
import HomePage from './components/widget/HomePage'
import "babel-polyfill";
import {observe} from './components/widget/moveWidget';

observe(({}) => 
  ReactDOM.render(
  <HomePage />,
  document.getElementById('root')
)
)
// ReactDOM.render(
//   <HomePage />,
//   document.getElementById('root')
// );

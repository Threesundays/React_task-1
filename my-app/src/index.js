import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const rootDiv = document.getElementById('root');
rootDiv.appendChild(App());

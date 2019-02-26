import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyComponent } from './4-react';

ReactDOM.render(
  <MyComponent prop1={3} />,
  document.getElementById('root') as HTMLElement
);

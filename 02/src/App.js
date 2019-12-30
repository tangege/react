import React from 'react';
import './App.css';
import { Button, Icon, Calendar } from 'antd';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Button block type="primary">点我</Button>
      <Icon type="step-backward" />
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} />
      </div>
      <Home age={100}>
        <span>hello</span>
        <span>hello</span>
      </Home>
    </div>
  );
}

export default App;

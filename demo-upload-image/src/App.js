import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onLoad = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })
}

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>dasdsadsa</div>
    )
  }
}

export default App;

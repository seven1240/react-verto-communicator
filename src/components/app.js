import React from 'react';
import { Link } from 'react-router'
import VertoBaseComponent from './vertobasecomponent';

import Main from '../containers/main/index.js';
import AppBar from '../containers/appbar/index.js';

class App extends VertoBaseComponent {
  constructor(props){
    super(props);
    this.state = {isModalOpen: false};
    this.modal = undefined;
    App.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(aModal){
    //console.log('aaaaa')
    if (!this.state.isModalOpen) {
      this.modal = aModal;
    } else {
      this.modal = undefined;
    }

    this.setState({ ...this.state, isModalOpen: !this.state.isModalOpen });
  }

  getCompStyle() {
    return this.props.compStyle;
  }

  getDefaultStyle(styleName) {
    const styles = {
      appStyles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100vh' // want to fill the whole screen height
      }
    };

    return (styles[styleName]);
  }

  render(){
    return (
      <div style={this.getStyle("appStyles")}>
        <AppBar />
        <Main />
        {this.modal}

      </div>);

  }
}

export default App;

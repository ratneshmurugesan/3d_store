import React from 'react';

import Modal from 'react-modal';

import AframeScene from '../scene/a-frame-scene'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-10%',
    width:     '60%',
    height: '60%',     
    transform             : 'translate(-50%, -50%)'
  }
};


class ModalApp extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  

  openModal() {
    console.log("openModal" + this.state.modalIsOpen)
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.callModal();
    this.setState({modalIsOpen: false});
    console.log("closeModal" + this.state.modalIsOpen)
  }

  

  render() {
    const objmtlprops = {name: this.props.modelName, obj:'utilities\\localFiles\\GTR.obj', mtl: 'src\\scene\\GTR.mtl'} //this.props.objMtlProps
    return (
        
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">

          <h2 ref={subtitle => this.subtitle = subtitle}></h2>
          <div><AframeScene objmtlprops={objmtlprops}/></div>
          <div>
          <button className='modalCloseButton' onClick={this.closeModal}>Click outside to CLOSE</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalApp;
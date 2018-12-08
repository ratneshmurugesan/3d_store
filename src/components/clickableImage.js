import React from 'react';

import Modal from 'react-modal';
//import Modal2 from './modal'
// import Modal1 from './modal1'
//import Button from './button'
import AframeScene from '../scene/a-frame-scene'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-10%',
      width                 : '60%',
      height                : '60%',     
      transform             : 'translate(-50%, -50%)'
    }
  };

class ClickableImage extends React.Component {

    constructor(props){
        super(props);
        this.state = { isOpen: false };
        // this.state = {
        //     modalIsOpen: false
        //   };
        //this.openModal = this.openModal.bind(this);
        //this.closeModal = this.closeModal.bind(this);
        this.callModal = this.callModal.bind(this);
    } 
    
    //   openModal() {
    //     console.log("openModal" + this.state.isOpen)
    //     this.setState({isOpen: true});
    //   }

    // callModal(){
    //     //this.refs.ModalReference.openModal();
    //     //this.props.callModal();
    //     //console.log("callModal")
    // }
    
    callModal(){
        console.log("Before clicked"+this.state.isOpen);
      this.setState({ isOpen: !this.state.isOpen });
      console.log("After clicked"+this.state.isOpen);
    };

    render() {
        const objmtlprops = {name: this.props.modelName, obj:'utilities\\localFiles\\GTR.obj', mtl: 'src\\scene\\GTR.mtl'} //this.props.objMtlProps
        return (
            <div className="flex-item">
                
                <img className="image" src={this.props.thumb} onClick={this.callModal}/>
                 {this.state.isOpen && (
                    <Modal
                    ariaHideApp={false}
                    isOpen={this.state.isOpen}
                    onRequestClose={this.callModal}
                    style={customStyles}
                    onClick={() => {this.callModal}}>
                    <AframeScene objmtlprops={objmtlprops} onClick={() => {this.callModal}}/>
                    <h2>Click outside to CLOSE</h2>
                    </Modal>
                  )}
            </div>
        );
    }
}

export default ClickableImage;

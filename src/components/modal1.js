import React from 'react';


import AframeScene from '../scene/a-frame-scene'

class ModalSimple extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show : false
        }
        this.hideModal = this.hideModal.bind(this)
    }
    openModal(){
      this.setState({ show: true });
    }
    
    hideModal(){
      this.setState({ show: false });
    }
      
    render() {
        const showHideClassName = this.state.show ? 'modal display-block' : 'modal display-none';
        const objmtlprops = {name: this.props.modelName, obj:'utilities\\localFiles\\GTR.obj', mtl: 'src\\scene\\GTR.mtl'} //this.props.objMtlProps
      return (
          
        <main>

          <div className={showHideClassName}>
        <section className='modal-main'>
          <div><AframeScene objmtlprops={objmtlprops}/></div>
          <button onClick={this.hideModal}>
            Close
          </button>
        </section>
      </div>
        </main>
      );
    }
  }

export default ModalSimple
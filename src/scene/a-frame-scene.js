import React, { Component } from 'react';
import Aframe from '../../aframe'

class AframeScene extends React.Component {

  

  render() {
    return (
      <div className="asceneDiv">
        <a-scene vr-mode-ui="enabled: false">

          <a-assets>
            <a-asset-item id="tree-obj" src={this.props.objmtlprops.obj}></a-asset-item>
            <a-asset-item id="tree-mtl" src={this.props.objmtlprops.mtl}></a-asset-item>
          </a-assets>

          <a-entity obj-model="obj: #tree-obj; mtl: #tree-mtl">
            <a-animation attribute="rotation"
              dur="10000"
              fill="forwards"
              to="0 360 0"
              repeat="indefinite"></a-animation>
          </a-entity>
          <a-entity camera="active: true" position="0 2 10" data-aframe-default-camera></a-entity>

        </a-scene>
      </div>
    );
  }
}
export default AframeScene
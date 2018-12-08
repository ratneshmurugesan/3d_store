import React from 'react';

import ClickableImage from './clickableImage'

import { store } from '../redux/reduxStore'
import {addPagination, addModels} from '../redux/actions'

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.addPagination = this.addPagination.bind(this);
    this.addModels = this.addModels.bind(this);
  }

  addPagination(e){
    store.dispatch(addPagination(1, e.target.parentElement.className.toString()));
  }

  addModels(e){
    const modelName = e.target.parentElement.id;
    store.dispatch(addModels(modelName, 1, e.target.parentElement.id.toString()));
  }

  render() {

    let models = store.getState().models;
    return (
      <section className="feed">
        <div className="tiles">
          {
            models.map((model, index) => {
              return (
                <div>
                <h2>{model.name}</h2>
                <section className="container" key={index.toString()}>
                  

                  <div className="flex-container" id={model.name.toString()}>
                    {
                      model.models.map((m, index) => {
                        return (
                          <ClickableImage modelName={model.name} key={index.toString()} thumb={m.thumb} />
                        );
                      })
                    }
                    {
                      <button onClick={this.addModels} type="button" className="arrow-load-more">></button>
                    }
                  </div>
                </section>
                </div>
              );
            })
          }
        </div>
        {
          <button onClick={this.addPagination} type="button" className="load-more">Load more</button>
        }
      </section>
    );
  }
}

class HorizontalPagination extends React.Component {
  render() {
    return (<Feed className='container' />)
  }
}

export default HorizontalPagination;
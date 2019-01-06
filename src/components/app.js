import React from 'react';
import { connect } from 'react-redux';

import {
  addPagination,

  animalCount,
  foodCount,
  furnitureCount,
  natureCount,
  technologyCount,
  transportCount
} from '../redux/actions'

class App extends React.Component {

  callRespectiveModel(name) {
    if (name === 'Animals') {
      this.props.addAnimalCount(name)
    } else if (name === 'Foods') {
      this.props.addFoodCount(name)
    } else if (name === 'Furniture') {
      this.props.addFurnitureCount(name)
    } else if (name === 'Nature') {
      this.props.addNatureCount(name)
    } else if (name === 'Technology') {
      this.props.addTechnologyCount(name)
    } else if (name === 'Transport') {
      this.props.addTransportCount(name)
    }
  }

  render() {

    const { models, paginationCount, addPaginationCount, modelCount } = this.props

    return (
      <section className="feed">
        <div className="tiles">
          {
            models.slice(0, paginationCount).map((pagination, index) => {
              return [
                <strong key={index}>{pagination.name}</strong>,

                <section className="container" key={(Math.random(0, index) * 2).toString()}>
                  <div className="flex-container" key={(Math.random(0, index) * 2).toString()}>
                    {
                      pagination.models.slice(0, modelCount[pagination.name]).map((model, index) => {
                        return (<div className="flex-item" key={(Math.random(0, index) * 2).toString()}>
                          {model.name}
                        </div>);
                      })
                    }
                    <button onClick={() => this.callRespectiveModel(pagination.name)} type="button" className="arrow-load-more">></button>
                  </div>
                </section>
              ]
            })
          }{
          paginationCount < models.length ? <button onClick={addPaginationCount} type="button" className="load-more">Load more</button> : null
          }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    models: state.models,
    modelCount: state.modelCount,
    paginationCount: state.paginationCount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPaginationCount: (name) => { dispatch(addPagination(name)) },
    addAnimalCount: (name) => { dispatch(animalCount(name)) },
    addFoodCount: (name) => { dispatch(foodCount(name)) },
    addFurnitureCount: (name) => { dispatch(furnitureCount(name)) },
    addNatureCount: (name) => { dispatch(natureCount(name)) },
    addTechnologyCount: (name) => { dispatch(technologyCount(name)) },
    addTransportCount: (name) => { dispatch(transportCount(name)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
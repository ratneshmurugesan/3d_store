import React from 'react';

import DemoCarousel from '../components/carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import models from '../../utilities/models'

class Feed extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
        visible: 2,
        error: false
      };
  
      this.loadMore = this.loadMore.bind(this);
    }
  
    loadMore() {
      this.setState((prev) => {
        return {visible: prev.visible + 1};
      });
    }
  
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/posts").then(
        res => res.json()
      ).then(res => {
        this.setState({
          items: res
        });
      }).catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });
    }
  
    render() {
      return (
        <section className="feed">

          <h1>Simple Load More/Pagination with React</h1>
  
          <div className="tiles">
            {this.state.items.slice(0, this.state.visible).map((item, index) => {
                return this.props.axis === 'horizontal'
                ?(
                  <div className="" key={item.id}>
                    <DemoCarousel/>
                  </div>
                ):(
                  <div className="" key={item.id}>
                    <span className="count">{index+1}</span>
                    <h2>{item.name}</h2>
                    <p>{item.body}</p>
                    <DemoCarousel/>
                  </div>
                );
              })}
            </div>
            {this.state.visible < this.state.items.length &&
               <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
            }

          </section>
      );
    }
  }
  
export default Feed;
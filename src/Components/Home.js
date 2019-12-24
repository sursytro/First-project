import React, { Component } from 'react';
import Banner from './Banner';
import Popularmovies from './Popularmovies';
class  Home extends Component{
   constructor(){
    super();
    this.handleRecMovies= this.handleRecMovies.bind(this);
   }
   
handleRecMovies(movie){
    console.log(this)
    this.props.moviesData(movie)
}
    render() { 
        return ( 
            
            <React.Fragment>
                <Banner/>
                <Popularmovies moviesData={this.handleRecMovies}/>
                </React.Fragment>
        
         );
    }
}
 
export default Home ;
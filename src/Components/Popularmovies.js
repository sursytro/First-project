import React, { Component } from 'react';
import styled from 'styled-components';
import {Container,Row,Col,Card} from 'react-bootstrap'
import Axios from 'axios';
import {Link} from 'react-router-dom';
class Popularmovies extends Component {
    constructor(){
    super();
    this.state= {
        movies:[],
        url:'https://api.themoviedb.org/3/movie/popular?api_key=e7a14856d7aa0556a3cc058dc2896bbe&language=en-US&page=1'
    }
}
 
    componentDidMount(){
Axios.get(this.state.url)
.then((res)=>this.setState({movies:res.data.results}))

    }
    render() { 
        console.log('render')
        return ( 
            <PopularWrapper>
                <h1>Popular Movies</h1>
                <Container>
                    <Row>
                        {this.state.movies.map(movie =>{
                            return (
                                <Col md='3'onClick={() => this.props.moviesData(movie)}>
                                    
                                    <Link to={`/Movies/${movie.id}`}>

                                    <Card>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
  <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
  </Card.Body>
</Card>
</Link>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </PopularWrapper>
         );
    }
}

const PopularWrapper=styled.div``
   
 export default Popularmovies;
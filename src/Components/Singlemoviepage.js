import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
class Singlemoviepage  extends Component {
    state = {  }
    render() { 
        const {movie} =this.props;
        return(
           
                <Container>
                    <Row>
                        <Col md ='6'>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=""/>
                        </Col>
                        <Col md ='6'>
                 <h2>{movie.title}</h2>
                  <p>{movie.overview}</p>
            <h6>{movie.release_date}</h6>
                    
                        </Col>
                    </Row>
                </Container>
            )
    };
         

}
 
export default Singlemoviepage ;
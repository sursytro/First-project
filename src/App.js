import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Singlemoviepage from './Components/Singlemoviepage';
import Pagenotfound from './Components/404';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            movie:{}
        }
    }

    handleRecMovies = (movie) => {
        this.setState({movie})
        console.log(movie)
    }
 
    render() { 
        return (  
            <div>
                <Navbar/>
                <Switch> 
                <Route path ='/'exact render={(props) => < Home {...props} moviesData ={this.handleRecMovies} />}/>
               
                <Route path ='/movies/:id' exact render={(props) => <Singlemoviepage {...props} movie ={this.state.movie} />}/>
                <Route path ='/Pagenotfound' component={Pagenotfound}/>
                <Redirect to ='/Pagenotfound'/>
                
                </Switch>
                <Footer/>


            </div>
        );
    }
}
 
export default App;

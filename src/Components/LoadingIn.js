import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

//remove component?

class LoadingIn extends Component {
    render() {
        return(
        <div className="App">
            <div className="container-fluid">
                <div className="col-xs-12 col-md-12">
                    <img src="static/sanofi.gif" className="mainLogo text-center zoom" alt="Sanofi"/>
                </div>
                <div className="col-xs-12 col-md-12">
                    <Link to={'/Introduction'}>
                        <button className='btn btn-lg btn-purple fixedLoadBtn delayedZoom'>Next</button>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}

export default LoadingIn;
import React, { Component } from 'react';
import './Browse.css';
import Nav from '../Nav/Nav';
import axios from 'axios';
import {getAnimal} from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Browse extends Component {
    constructor() {
        super()
        this.state = {
            animals: []
        }
    }
    componentDidMount() {
        axios.get('/api/animals')
            .then(resp => {
                return this.setState({
                    animals: resp.data
                })
            })
    }
    render() {
        console.log(this.state.animals)
        return (
            <div>
                <Nav />
                {this.state.animals.map((e, i, arr) => {
                    return (
                        <div key={i}>
                            {e.name}
                            <Link to={`/details/${e.name}`}>
                                <img onClick={() => { this.props.getAnimal(e.animal_id) }} src={e.image} alt='' />
                            </Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        getAnimal: (id)=>{dispatch(getAnimal(id))}
    }
}

export default connect(null, mapDispatchToProps)(Browse);

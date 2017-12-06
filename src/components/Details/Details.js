import React, { Component } from 'react';
import './Details.css';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';



class Details extends Component {
    constructor(props){
        super(props)

        this.state={
            animal:{}
        }
    }

    componentDidMount(){
        console.log(this.props.match) 
        this.setState({ animal: this.props.animal})
    }

    componentWillReceiveProps(nextProps){
        this.setState({animal: nextProps.animal})
    }

    render() {
        console.log(this.props.animal)
        const { name, image } = this.props.animal;
        return (
            <div>
                <Nav />
                <div>
                <h1>{this.props.match.params.name}</h1> {/* Will display animal name*/}
                    <img src={this.state.animal.image} alt='' />
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        animal: state.animal
    }
}

export default connect(mapStateToProps)(Details);

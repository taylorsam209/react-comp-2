import React, { Component } from 'react';
import './Details.css';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';



class Details extends Component {

    componentDidMount(){
        // const {match: {params} } = this.props;
    }

    render() {
        console.log(this.props.animal)
        const { name, image } = this.props.animal;
        return (
            <div>
                <Nav />
                <div>
                    {name}
                    <img src={image} alt='' />
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

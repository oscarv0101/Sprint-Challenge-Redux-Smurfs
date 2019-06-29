import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

class Smurfs extends React.Component {

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    render() {
        return (
            <div >
                {this.props.smurfs.map((smurf) =>
                    <div className="smurf-box" key={smurf.id}>
                        <h1>Name: {smurf.name}</h1>
                        <h3>Age: {smurf.age}</h3>
                        <h3>Height: {smurf.height}</h3>
                        {/* <li key={smurf.id}>{smurf.text}</li> */}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        fetchingSmurfs: state.fetchingSmurfs
    };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
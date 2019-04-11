import React from 'react';
import {connect} from 'react-redux';
// import moment from 'moment';
import {withRouter} from 'react-router-dom';

import {getData} from '../actions'

class Friends extends React.Component {
    componentDidMount() {
        this.props.getData();
    }



    render() {
        return (
            <div>
                <ul>
                    {this.props.Friends.map(friend => {
                        return (
                            <li>{friend.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({friendInfo, fetchingData}) => ({
    friendInfo, 
    fetchingData
});

export default withRouter(connect(
    mapStateToProps,
    {getData}
)(Friends)
)
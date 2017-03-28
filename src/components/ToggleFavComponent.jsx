"use strict";

import React, {PropTypes} from "react";
import RaisedButton from "material-ui/RaisedButton";
import {Row, Col} from "react-flexbox-grid";

export default class ToggleFavComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (
            <Row>
                <Col xs={12}>
                    {this.props.showAll ?
                        <RaisedButton label="Show Favs" onClick={this.props.toggleShowAll.bind(this)}
                                      secondary={true}/>
                        :
                        <RaisedButton label="Show All" onClick={this.props.toggleShowAll.bind(this)}
                        primary={true}
                        />
                        }
                </Col>
            </Row>
        )
    }
}
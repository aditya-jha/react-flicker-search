"use strict";

import React, {PropTypes} from "react";
import ImageSearchService from "./../services/ImageSearchService";
import {Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";

export default class SearchBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.scope = {
            searchText: ""
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSearchSubmit.bind(this)}>
                    <Row>
                        <Col xs={12}>
                            <TextField
                                onChange={this.handleChange.bind(this)}
                                type="text"
                                hintText="Enter search text"
                                floatingLabelText="Search Text"/>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }

    handleChange(event, newValue) {
        this.scope.searchText = newValue;
    }

    onSearchSubmit(event) {
        event.preventDefault();
        if (!this.scope.searchText) return;

        ImageSearchService
            .fetchImages(this.scope.searchText)
            .then((res) => {
                console.log(res);
                this.props.setImagesToState(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
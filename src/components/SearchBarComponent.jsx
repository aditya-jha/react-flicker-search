"use strict";

import React, {PropTypes} from "react";
import ImageSearchService from "./../services/ImageSearchService";
import {Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import ShortlistService from "./../services/ShortlistService";
import RaisedButton from "material-ui/RaisedButton";

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
                            <RaisedButton label="search" type="submit" primary={true}/>
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

        if (!this.props.showAll) this.props.toggleShowAll();

        ImageSearchService
            .fetchImages(this.scope.searchText)
            .then((res) => {
                ShortlistService.fetchData().then((favs) => {
                    let favIds = {};
                    for(let i=0;i<favs.length;i++) {
                        favIds[favs[i].id] = 1;
                    }
                    for(let i=0;i<res.length;i++) {
                        if (favIds[res[i].id]) {
                            res[i].fav = true;
                        }
                    }
                    this.props.setImagesToState(res);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
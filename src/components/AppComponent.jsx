"use strict";

import React, {PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Grid, Row, Col} from "react-flexbox-grid";
import SearchBarContainer from "./../containers/SearchBarContainer";
import ToggleFavContainer from "./../containers/ToggleFavContainer";
import ImageDisplayContainer from "./../containers/ImageDisplayContainer";

export default class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <MuiThemeProvider>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <SearchBarContainer showAll={this.props.showAll}/>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <ToggleFavContainer/>
                    </Row>
                    <br/>
                    <Row>
                        {this.props.images.map((image, index) => {
                            if (!this.props.showAll && !image.fav) return;
                            else return (
                                <Col xs={12} sm={6} md={4} key={image.id}>
                                    <ImageDisplayContainer imageIndex={index}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Grid>
            </MuiThemeProvider>
        )
    }
}
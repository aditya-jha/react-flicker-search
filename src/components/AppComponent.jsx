"use strict";

import React, {PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Grid, Row, Col} from "react-flexbox-grid";
import SearchBarContainer from "./../containers/SearchBarContainer";

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
                            <SearchBarContainer/>
                        </Col>
                    </Row>
                </Grid>
            </MuiThemeProvider>
        )
    }
}
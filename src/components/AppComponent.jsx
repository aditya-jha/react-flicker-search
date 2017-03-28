"use strict";

import React, {PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Grid, Row, Col} from "react-flexbox-grid";
import SearchBarContainer from "./../containers/SearchBarContainer";
import ToggleFavContainer from "./../containers/ToggleFavContainer";
import ImageDisplayContainer from "./../containers/ImageDisplayContainer";
import ShortlistService from "./../services/ShortlistService";

export default class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        ShortlistService.fetchData().then((res) => {
            console.log(res);
            this.props.initFavs(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    componentWillReceiveProps(nextProps) {
        ShortlistService.setData(nextProps.favs);
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
                        {this.props.showAll ?
                            this.props.images.map((image, index) => (
                                <Col xs={12} sm={6} md={4} key={image.id}>
                                    <ImageDisplayContainer imageIndex={index} image={image} favs={false}/>
                                </Col>
                            ))
                            :
                            this.props.favs.map((image, index) => (
                                <Col xs={12} sm={6} md={4} key={image.id}>
                                    <ImageDisplayContainer imageIndex={index}  image={image} favs={true}/>
                                </Col>
                            ))
                        }

                    </Row>
                </Grid>
            </MuiThemeProvider>
        )
    }
}
"use strict";

import React, {PropTypes} from "react";
import {Row, Col} from "react-flexbox-grid";
import IconButton from 'material-ui/IconButton';
import Favorite from "material-ui/svg-icons/action/favorite";
import FavoriteBorder from "material-ui/svg-icons/action/favorite-border";

export default class ImageDisplayComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favStatus: props.image.fav
        }
    }

    render() {
        const styles = {
            mediumIcon: {
                width: 48,
                height: 48,
            },
            medium: {
                width: 96,
                height: 96,
                padding: 24,
            },
        };

        return (
            <div className="image-container">
                <div>
                    <img src={this.props.image.url}/>
                </div>
                <div className="fav-container">
                    <IconButton
                        onClick={this.toggleImageFavStatus.bind(this)}
                        iconStyle={styles.mediumIcon}
                        style={styles.medium}>
                        {this.state.favStatus ? <Favorite/> : <FavoriteBorder/>}
                    </IconButton>
                </div>
            </div>
        )
    }

    toggleImageFavStatus() {
        this.setState((prevState, props) => {
            return {
                favStatus: !prevState.favStatus
            }
        });
        this.props.toggleImageFavStatus(this.props.imageIndex);
    }
}
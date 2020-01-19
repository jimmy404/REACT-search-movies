import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Detail extends Component {
    static propTypes = {
        id: PropTypes.string
    }

componentDidMount() {
    const {id} = this.props
    this._fetchMovie({id})
}

    render() {
        return(
            <p>Pagina de detalle</p>
        )
    }
}
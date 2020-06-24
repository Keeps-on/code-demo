import React from 'react';


export default class Compose extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                哈哈:{this.props.children}
            </div>
        )
    }


}
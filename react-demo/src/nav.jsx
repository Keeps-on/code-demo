
import React from 'react';

export default class Nav extends React.Component {

    render() {
        // 接收传入的props
        console.log(this.props.nav);
        const nav = this.props.nav;

        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul>
                    {/* {nav.map(item => <li key={item}>{item}</li>)} */}
                    {
                        nav.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
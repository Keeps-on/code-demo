import React from 'react'


import { Link, NavLink } from "react-router-dom";
import './style.css'
/**
 * Link与NavLink的区别
 *  当使用NavLink的时候在当前的dom节点上会有activ的属性
 *  在添加公共的active的属性的时候,为了防止点击过程中都变红所以要加上exact的精准匹配
 *  可以通过activeClassName
 */
export default class Nav extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* <Link to="/">Home</Link> */}
                        <NavLink activeClassName="selected" activeStyle={{ color: 'red' }} exact to="/">Home</NavLink>
                    </li>
                    <li>
                        {/* <Link to="/mine">Mine</Link> */}
                        {/* <NavLink activeClassName="selected" exact to="/mine">Mine</NavLink> */}
                        <Link
                            to={{
                                pathname: "/mine",
                                search: "?sort=name",
                                hash: "#the-hash",
                                state: { fromDashboard: true }
                            }}

                        >Mine</Link>
                    </li>
                    <li>
                        {/* <Link to="/mine/ucenter">Ucenter</Link> */}
                        <NavLink activeClassName="selected" exact to="/mine/ucenter">Ucenter</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
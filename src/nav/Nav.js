/**
 * Created by choyt on 17-4-2.
 */

import React from 'react';
import './Nav.css';

class Nav extends React.Component {

    componentDidMount() {
        let that = this;
        this.refs.numsUl.onmouseover = (e) => {
            that.props.clearTimer();
            e.preventDefault();
        };

        Array.prototype.forEach.call(this.refs.numsUl.childNodes, (item) => {
            item.onmousemove = e => {
                let index = parseInt(e.target.childNodes[0].nodeValue, 10) - 1;
                that.props.reActive(index);
                e.preventDefault();
            }
        });

        this.refs.numsUl.onmouseout = (e) => {
            that.props.createTimer();
        }
    }

    shouldComponentUpdate() {
        Array.prototype.forEach.call(this.refs.numsUl.children, (item) => {
            let that = this;
            if (that.props.currentIndex === (parseInt(item.childNodes[0].nodeValue, 10) - 1)) {
                item.className = "current";
            } else {
                item.className = "";
            }
        });
        return false;
    }

    render() {
        return (
            <ul className="num-list" id="num-list" ref="numsUl">
                <li className="current">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        );
    }
}

export default Nav;
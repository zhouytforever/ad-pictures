/**
 * Created by choyt on 17-4-2.
 */

import React from 'react';
// import ReactDOM from 'react-dom';
import i1 from './img/01.jpg';
import i2 from './img/02.jpg';
import i3 from './img/03.jpg';
import i4 from './img/04.jpg';
import i5 from './img/05.jpg';
import './Ads.css';


class Ads extends React.Component {
    shouldComponentUpdate(){
        let baseTop = this.refs.picsUl.children[0].offsetHeight * this.props.currentIndex;
        this.refs.picsUl.style.top = -baseTop + 'px';
        return false;
    }
    render() {
        return (
            <div className="pic-list-box">
                <ul id="pic-list-ul" ref="picsUl">
                    <li><a href="#"><img src={i1} alt=""/></a></li>
                    <li><a href="#"><img src={i2} alt=""/></a></li>
                    <li><a href="#"><img src={i3} alt=""/></a></li>
                    <li><a href="#"><img src={i4} alt=""/></a></li>
                    <li><a href="#"><img src={i5} alt=""/></a></li>
                </ul>
            </div>
        );
    }
}

export default Ads;
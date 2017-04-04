import React, {Component} from 'react';
import Ads from './ads/Ads';
import Nav from './nav/Nav';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.timer = null;
        this.state = {currentIndex: 0, maxIndex: 5};
    }

    componentDidMount() {
        this.createTimer();
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    clearTimer() {
        this.timer && clearInterval(this.timer);
    }

    createTimer() {
        let that = this;
        this.timer = setInterval(() => {
            let current = (that.state.currentIndex + 1) % that.state.maxIndex;
            that.setState({currentIndex: current, maxIndex: 5});
        }, 3000);
    }

    reActive(index) {
        this.setState({currentIndex: index, maxIndex: 5});
    }

    render() {
        return (
            <div className="box">
                <Ads currentIndex={this.state.currentIndex} maxIndex={this.state.maxIndex}/>
                <Nav currentIndex={this.state.currentIndex} maxIndex={this.state.maxIndex}
                     reActive={this.reActive.bind(this)} createTimer={this.createTimer.bind(this)}
                     clearTimer={this.clearTimer.bind(this)}/>
            </div>
        );
    }
}

export default App;

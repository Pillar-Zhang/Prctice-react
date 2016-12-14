import React, {Component, PropTypes} from 'react';

class FlexLayout extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="box">
                        <div className="item item-1">1</div>
                        <div className="item item-2">2</div>
                        <div className="item item-3">3</div>
                        <div className="item item-4">4</div>
                        <div className="item item-5">5</div>
                        <div className="item item-6">6</div>
                        <div className="item item-7">7</div>
                        <div className="item item-8">8</div>
                        <div className="item item-9">9</div>
                        <div className="item item-10">10</div>
                    </div>
                </div>
            </div>
        );
    }
}

FlexLayout.propTypes = {

};

export default FlexLayout;
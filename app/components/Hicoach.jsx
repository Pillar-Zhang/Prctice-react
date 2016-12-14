import React, { Component, PropTypes } from 'react';

class Hicoach extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col l1 border"></div>
                    <div className="col l3 border">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <div className="row">
                                        <li className="tab col s12"><a href="#test1" style={{wordWrap:"break-word"}}> 1111111111111111111111111111111111111111111111111111111111111</a></li>
                                        <li className="tab col s12"><a className="active" href="#test2">22222222222222222222222222222222222222222222222222222</a></li>
                                        <li className="tab col s12"><a href="#test3">33333333333333333333333333333333333333333333333333333333333333</a></li>
                                        <li className="tab col s12"><a href="#test4">44444444444444444444444444444444444444444444444444444444444444</a></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col l8 border">
                        <div className="row">
                            <div id="test1" className="col s12">TesTest 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1t 1</div>
                            <div id="test2" className="col s12">TTest 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1est 2</div>
                            <div id="test3" className="col s12">TTest 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1est 3</div>
                            <div id="test4" className="col s12">TeTest 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1Test 1st 4</div>
                        </div>
                    </div>
                </div>





            </div>
        );
    }
}

Hicoach.propTypes = {

};

export default Hicoach;
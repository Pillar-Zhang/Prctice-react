import React, {Component, PropTypes} from 'react';

class Col extends Component {
    componentDidMount(){
        $('.materialboxed').materialbox();
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s2 materialboxed">1</div>
                        <div className="col s1 materialboxed">2</div>
                        <div className="col s8 materialboxed">3</div>
                        <div className="col s2 materialboxed">4</div>
                        <div className="col s2 materialboxed">5</div>
                        <div className="col s2 materialboxed">6</div>
                        <div className="col s2 materialboxed">7</div>
                        <div className="col s2 materialboxed">8</div>
                        <div className="col s2 materialboxed">9</div>
                        <div className="col s2 materialboxed">10</div>
                    </div>
                </div>
            </div>
        );
    }
}

Col.propTypes = {

};

export default Col;
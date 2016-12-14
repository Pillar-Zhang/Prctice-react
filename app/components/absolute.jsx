import React, { Component, PropTypes } from 'react';

class Absolute extends Component {

    componentDidMount() {
        $('.materialboxed').materialbox();
        
        $('#test').click(function () {
            $(this).animate({
                left: '40px',
                width: '80%',
                height: '80%',
            })
        })

    }

    render() {
        return (
            <div>
                <div className="relative">
                    <div id="test">1</div>
                    <div>2</div>
                    <div>3</div>
                    <div className="materialboxed">4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </div>
            </div>
        );
    }
}

Absolute.propTypes = {

};

export default Absolute;
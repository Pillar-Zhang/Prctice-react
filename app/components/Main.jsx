import React, {Component, PropTypes} from 'react';
import Prctice from './Prctice.jsx';
import FilterableProductTable from './FilterableProductTable.jsx'



class Main extends Component {
    render() {
        
        return (
            <div>
                <FilterableProductTable />
            </div>
        );
    }
}

Main.propTypes = {

};



export default Main;
import React, {Component} from 'react';
import moment from 'moment';

class Header extends Component{
    static defaultProps = {
        year: moment().year(),
        month: moment().format('MMMM')
    }

    render(){
        return(
            <div className="Header">
                <input type="number" id="year" name="year" min="1" max="9999" defaultValue={this.props.year}></input>
                {this.props.month}
                {console.log(this.props.year)}
            </div>
        );
    }
}

export default Header;
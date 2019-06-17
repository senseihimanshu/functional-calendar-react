import React, {Component} from 'react';

class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
    }

    toggleShow(show){
        this.setState({
            show: !show
        });
        console.log(show);
    }

    render(){
        return(
            <div className="AddForm">
                <div><button onClick={this.toggleShow.bind(this, this.state.show)} id="add">{!this.state.show? <i className="fa fa-plus" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</button><button id="show">Show</button></div>
                {this.state.show?
                    <form>
                        <div>
                            <label htmlFor="note">Note:</label>
                            <input type="text" id="note" name="note" />
                        </div>
                        <div>
                            <label htmlFor="time">Time:</label>
                            <input type="time" id="time" name="time" />
                        </div>
                        <button type="submit"><i class="fa fa-check" aria-hidden="true"></i></button>
                        <button>Close</button>
                    </form>  :
                    <div></div>
                }
                
            </div>
        );        
    }
}

export default AddForm;
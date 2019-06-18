import React, {Component} from 'react';
import './AddForm.css'
class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            show: false,
            notesArr: [],
            reminder: '',
            time: '',
            active: false
        };
    }

    clearFields = (e) => {
        document.getElementById('note').value = '';
        document.getElementById('time').value = '';
        if(this.state.notesArr.length > 0){
            this.setState({
                active: true
            });
            (e.target.parentNode.parentNode.parentNode).style.backgroundColor = 'yellow';
        }else{
            this.setState({
                active: false
            });
        }
    }

    setValue = (e) =>{
        // let key =  e.target['name'];
        // console.log(key);
        let {reminder, time, notesArr} = this.state;
        reminder = document.getElementById('note').value;
        time = document.getElementById('time').value;
        if(reminder !== '' && time !== ''){
            notesArr.push({
                reminder,
                time
            });
    
            this.setState({
                reminder,
                time,
                notesArr: notesArr       
            });
            console.log(this.state, notesArr);

            document.getElementById('message').innerHTML = 'Submitted';
            setTimeout(()=>{
                document.getElementById('message').innerHTML = '';
                this.setState({
                    open: false
                });
            }, 2500);
            this.clearFields(e);
        }
    }

    pushObj = (e) =>{
        e.preventDefault();
        this.setValue(e);
    }

    toggleOpen(open){
        this.setState({
            open: !open
        });
        // console.log(open);
    }

    toggleShow(show){
        this.setState({
            show: !show
        });
    }

    render(){
        return(
            <div className="AddForm">
                <div>
                    <button onClick={this.toggleOpen.bind(this, this.state.open)} id="add">{!this.state.open? <i className="fa fa-plus" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</button>
                
                <button onClick={() => this.toggleShow(this.state.show)} id="show">Show</button>
                
                </div>
                
                {this.state.open?
                    <form>
                        <div id="message"></div>
                        <div>
                            <label htmlFor="note">Note:</label>
                            <input type="text" id="note" name="note" />
                        </div>
                        <div>
                            <label htmlFor="time">Time:</label>
                            <input type="time" id="time" name="time" />
                        </div>
                        <button onClick={this.pushObj} type="submit"><i className="fa fa-check" aria-hidden="true"></i></button>
                        <button onClick={this.toggleOpen.bind(this, this.state.open)}>Close</button>
                    </form>  :
                    <div></div>
                }

                {this.state.show?
                    <ul className='reminders'><div>Reminders:
                        {this.state.notesArr.map((cur, index)=>{
                            return <li key={cur.reminder+index}>{cur.reminder}<span>{cur.time}</span></li>
                        })}
                    </div></ul> :
                    <div></div>
                }
                
            </div>
        );        
    }
}

export default AddForm;
import React, {Component} from 'react';
import Header from './Calendar/Header';
import Dates from './Calendar/Dates';
import moment from 'moment';

class Calendar extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     year: 2019,
        //     month: 6
        // };
        this.datesArr = [[],[],[],[],[],[],[]]; 
    }

    componentWillMount(){
        var date;
        for(let t = 0; t<moment('2019/06/01').day(); t++){
            this.datesArr[t].push('-');    
        }
        for(let i = 1; i<=moment().daysInMonth(); i++){
            date = new Date(`2019/06/${i}`);
            console.log(moment(date).day());
            this.datesArr[moment(date).day()].push(i);
        } 
        console.log(this.datesArr);
    }

    render(){

        return(
            <div className="Calendar">
                <Header />         
                <table>
                    <thead>
                        <tr id="nameDays">
                            <td>Sunday</td>
                            <td>Monday</td>
                            <td>Tuesday</td>
                            <td>Wednesday</td>
                            <td>Thursday</td>
                            <td>Friday</td>
                            <td>Saturday</td>   
                        </tr>
                    </thead>
                    <tbody>
                        <Dates datesArr={this.datesArr[0]} day="Sunday"/>
                        <Dates datesArr={this.datesArr[1]} day="Monday"/>
                        <Dates datesArr={this.datesArr[2]} day="Tuesday"/>        
                        <Dates datesArr={this.datesArr[3]} day="Wednesday"/>
                        <Dates datesArr={this.datesArr[4]} day="Thursday"/>
                        <Dates datesArr={this.datesArr[5]} day="Friday"/>
                        <Dates datesArr={this.datesArr[6]} day="Saturday"/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calendar;
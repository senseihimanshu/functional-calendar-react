import React, {Component} from 'react';
import Header from './Calendar/Header';
import Dates from './Calendar/Dates';
import {Link} from 'react-router-dom';
import moment from 'moment';

class Calendar extends Component{
    constructor(props){
        super(props);
        var {props: {year, month}} = this;
        if(month>12){
            month = null;
        }
        if(!(year >= 1 && year<=3000)){
            year = null;
        }
        this.state = {
            year: year || moment().year(),
            month: month-1 || moment().month()+1
        };
        this.datesArr = [[],[],[],[],[],[],[]];
        
        this.changeMonth = this.changeMonth.bind(this);
        this.changeYear = this.changeYear.bind(this);
        this.update = this.update.bind(this);
    }

    componentWillMount(){
        let date = new Date(`${this.state.year}/${moment().month(this.state.month).format("M")}/1`);
        for(let t = 0; t<moment(`${this.state.year}/${this.state.month}/01`).day(); t++){
            this.datesArr[t].push('-');
        }
        for(let i = 1; i<=moment(date).daysInMonth(); i++){
            date = new Date(`${this.state.year}/${this.state.month}/${i}`);
            console.log(moment(date).day());
            this.datesArr[moment(date).day()].push(i);
        } 
        console.log(this.datesArr);
    }

    changeMonth(changedMonth){
        console.log(changedMonth);
        this.setState({
            month: changedMonth
        });
    }

    changeYear(changedYear){
        console.log(changedYear);
        this.setState({
            year: changedYear
        });
    }

    update(){
        this.datesArr = [[],[],[],[],[],[],[]];
        let date = new Date(`${this.state.year}/${moment().month(this.state.month).format("M")}/1`);
        for(let t = 0; t<moment(`${this.state.year}/${moment().month(this.state.month).format("M")}/01`).day(); t++){
            this.datesArr[t].push('-');
        }
        for(let i = 1; i<=moment(date).daysInMonth(); i++){
            date = new Date(`${this.state.year}/${moment().month(this.state.month).format("M")}/${i}`);
            this.datesArr[moment(date).day()].push(i);
        } 
        console.log(moment(date).daysInMonth());
        console.log(moment().month(this.state.month).format("MMMM"));
        console.log(this.state.year);
    }

    // componentDidUpdate(){
    //     const {props: {match: {params:  {year, month}}}} = this;
    //     this.setState({
    //         year: year,
    //         month: month
    //     })
    // }

    render(){
        // const {props: {match: {params:  {year, month}}}} = this;
        // console.log("year: ", year, "month: ", month)
        // console.log(this.props);
        // this.update();
        return(
            <div className="Calendar">
                {/* <Link to={`/${this.state.year}`}><button onClick={this.handleChangeBackward}><i className="fa fa-arrow-left" aria-hidden="true"></i></button></Link> */}
                <Header year={this.state.year} month={this.state.month} passYear={this.changeYear} passMonth={this.changeMonth}/>
                {/* <button onClick={}><i class="fa fa-arrow-right" aria-hidden="true"></i></button>       */}
                <Link to={`/year/${this.state.year}/month/${this.state.month}`} onClick={this.update}>Sumbit</Link>
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

//<Switch>
/* <Route exact path={`/${this.state.year}`} component={()=><Calendar currentYear={this.state.year} changeYear={this.handleYear}/>} />
{/* <Route exact path='/year/month' component={()=><Calendar changeYear={this.handleYear}/>} /> */
// </Switch> */}
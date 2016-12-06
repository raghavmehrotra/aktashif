import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import update from 'immutability-helper'
import * as data from '../accessAllData.jsx'
import {hashHistory} from 'react-router'

const Register = React.createClass({
    
    getInitialState: function() {
      return {
          id: this.props.params.userId,
          birthDate: "4/12/2016",
          mobile: '',
          topic1: '',
          topic2: '',
          topic3: '',
          ambition: '',
          education: ''
      }  
    },
    
    handleSubmit: function() {
        console.log(this.props.params)
        var firebaseRef = data.getFirebaseReference("users/"+this.props.params.userId+"/info")
        firebaseRef.set(this.state)
        return false;
    },
    
    handleChange: function(event) {
        const name = event.target.name
        const val = event.target.value
        var newState = update(this.state, { [event.target.name]: {$set:  [val]}})
        this.setState(newState)
        console.log(this.state)
    },
    
    render: function() {
        return (
            <center dir='rtl'>
                <h2>التسجيل</h2>
                <form onSubmit={this.handleSubmit}>
                    <h3>عني</h3>
                    ميلادي: 
                    <DatePicker
                        selected={moment(this.state.birthDate)}
                        peekNextMonth 
                        placeholderText="ميلادي"
                        showMonthDropdown 
                        showYearDropdown
                        dropdownMode="select" /> <br/>
                    موبايل:
                    <input name="mobile" type="text" value={this.state.mobile} onChange={this.handleChange}/> <br/>
                    أحب القراءة عن:
                       <input name="topic1" type="text" value={this.state.topic1} onChange={this.handleChange}/>
                      <input name="topic2" type="text" value={this.state.topic2} onChange={this.handleChange}/>
                      <input name="topic3" type="text" value={this.state.topic3} onChange={this.handleChange}/>
                    <h3>طموحي</h3>
                    أريد أن أكون... <input name="ambition" type="text" value={this.state.ambition} onChange={this.handleChange}/> <br/>
                    درست لحد... 
                    <select name="education" value={this.state.education} onChange={this.handleChange}>
                      <option value="intermediate">المتوسطة</option>
                      <option value="secondary">الثانوية</option>
                      <option value="diploma">دبلوما</option>
                      <option value="graduate">دراسات عليا</option>
                    </select>
                    <br/> <br/>
                    <input type="submit" value="سجّل"/>
                </form>
            </center>
            
    )}
})

export default Register;
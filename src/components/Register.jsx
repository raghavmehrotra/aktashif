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

    handleDateChange: function(event) {
      var selectedDate = JSON.stringify((event._d))
      selectedDate = selectedDate.substring(1, selectedDate.length-1) // for some reason, the initial string has quotes when sent to the callback
      const year = selectedDate.substring(0, 4)
      const month = selectedDate.substring(5,7)
      const day = selectedDate.substring(8,10)
      this.setState({
        birthDate: month + "/" + day + "/" + year
      })
    },

    render: function() {
        const inputButtonStyle = {
          "border": "1px solid black"
        }
        const submitButtonStyle = {
          "border": "1px solid black",
          "background": "#2f2f62",
          "color": "white"
        }
        return (
            <center dir='rtl'>
              <h2>التسجيل</h2>
              <h3>عني</h3>

              ميلادي:
              <DatePicker
                  selected={moment(this.state.birthDate)}
                  onChange = {this.handleDateChange}
                  placeholderText="ميلادي"
                  showYearDropdown = "true"
                  dropdownMode="select" />
              <br/>
              <br />

              موبايل:
              <input style={inputButtonStyle} name="mobile" type="text" value={this.state.mobile} onChange={this.handleChange}/> <br/> <br />
              أحب القراءة عن:
              <br />
              <input style={inputButtonStyle} name="topic1" type="text" value={this.state.topic1} onChange={this.handleChange}/>
              <br />
              <input style={inputButtonStyle} name="topic2" type="text" value={this.state.topic2} onChange={this.handleChange}/>
              <br />
              <input style={inputButtonStyle} name="topic3" type="text" value={this.state.topic3} onChange={this.handleChange}/>
              <br />

              <h3>طموحي</h3>
              أريد أن أكون...
              <input style={inputButtonStyle} name="ambition" type="text" value={this.state.ambition} onChange={this.handleChange}/> <br/> <br />

              درست لحد...
              <select style={inputButtonStyle} name="education" value={this.state.education} onChange={this.handleChange}>
                <option value="intermediate">المتوسطة</option>
                <option value="secondary">الثانوية</option>
                <option value="diploma">دبلوما</option>
                <option value="graduate">دراسات عليا</option>
              </select>
              <br/>
              <br/>
              <input style={submitButtonStyle} onClick={this.handleSubmit} type="submit" value="سجّل"/>
            </center>

    )}
})

export default Register;

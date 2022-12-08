// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {name: '', date: '', appointmentList: [], tempList: []}

  onChangingTitle = event => {
    this.setState({name: event.target.value})
  }

  onChangingDate = event => {
    this.setState({date: event.target.value})
  }

  addButton = () => {
    const {name, date} = this.state

    const addPerson = {
      id: uuidv4(),
      name,
      date,
      isClickStart: false,
    }
    if (name !== '' && date !== '') {
      this.setState(prevState => ({
        appointmentList: [...prevState.appointmentList, addPerson],
        name: '',
        date: '',
      }))
    }
  }

  onStartButtonClicked = id => {
    const {appointmentList} = this.state
    const starClick = appointmentList.map(each => {
      if (each.id === id) {
        return {...each, isClickStart: !each.isClickStart}
      }
      return each
    })
    this.setState({appointmentList: starClick})
  }

  clickStartListButton = () => {
    const {appointmentList, tempList} = this.state
    if (appointmentList.length <= tempList.length) {
      this.setState({appointmentList: tempList, tempList: []})
    } else {
      const filteredList = appointmentList.filter(
        each => each.isClickStart === true,
      )
      this.setState({appointmentList: filteredList, tempList: appointmentList})
    }
  }

  render() {
    const {name, date, appointmentList} = this.state
    return (
      <div className="bg_container">
        <div className="main_container">
          <div className="first_section">
            <div className="add_appointment_container">
              <h1 className="heading mb-5">Add Appointment</h1>
              <form className="form_container">
                <label htmlFor="title" className="m-0">
                  TITLE
                </label>
                <input
                  id="title"
                  className="pl-2"
                  type="text"
                  placeholder="Title"
                  onChange={this.onChangingTitle}
                  value={name}
                />
                <label htmlFor="date" className="m-0">
                  DATE
                </label>
                <input
                  id="date"
                  className="pl-2 date_part"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onChangingDate}
                  value={date}
                />
                <button
                  type="button"
                  className="add_button"
                  onClick={this.addButton}
                >
                  Add
                </button>
              </form>
            </div>
            <div className="image_container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="second_Container">
            <div className="heading_and_button_container">
              <h1 className="second_container_heading">Appointments</h1>
              <button
                onClick={this.clickStartListButton}
                type="button"
                className="starred_button rounded-pill pr-2 pl-2"
              >
                Starred
              </button>
            </div>
            <ul className="list-unstyled list_container">
              {appointmentList.map(eachAppointmentItem => (
                <AppointmentItem
                  appointmentListItem={eachAppointmentItem}
                  onStartButtonClicked={this.onStartButtonClicked}
                  key={eachAppointmentItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments

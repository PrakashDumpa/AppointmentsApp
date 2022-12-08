// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentListItem, onStartButtonClicked} = props
  const {name, date, id, isClickStart} = appointmentListItem

  const starButton = () => {
    onStartButtonClicked(id)
  }

  const dateFormate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starImage = isClickStart
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list mt-2">
      <div className="listItem w-100">
        <div className="listItem_heading_container">
          <p className="listItem_name m-0 text-truncate">{name}</p>
          <button
            // eslint-disable-next-line react/no-unknown-property
            testid="star"
            className="start_button"
            type="button"
            onClick={starButton}
          >
            <img className="m-0" src={starImage} alt="star" />
          </button>
        </div>
        <p className="m-0 date_color">Date:{dateFormate}</p>
      </div>
    </li>
  )
}

export default AppointmentItem

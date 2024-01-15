import {Component} from 'react'

import './index.css'

import EventItem from '../EventItem'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const resultOfEvent = {
  initial: 'Initial',
  registered: 'Registered',
  notRegistered: 'Not_registered',
  registrationClosed: 'Closed',
}

class Events extends Component {
  state = {eventsTotal: eventsList, result: resultOfEvent.initial}

  check = id => {
    const {eventsTotal} = this.state
    const item = eventsTotal.find(each => each.id === id)
    console.log(item)
    const {registrationStatus} = item
    switch (registrationStatus) {
      case 'REGISTERED':
        this.setState({result: resultOfEvent.registered})
        break
      case 'YET_TO_REGISTER':
        this.setState({result: resultOfEvent.notRegistered})
        break
      case 'REGISTRATIONS_CLOSED':
        this.setState({result: resultOfEvent.registrationClosed})
        break
      default:
        break
    }
  }

  registeredView = () => (
    <div className="registered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        className="registerdImg"
        alt="registered"
      />
      <h1 className="registeredHeading">
        You have already registered for the event
      </h1>
    </div>
  )

  notRegisteredView = () => (
    <div className="registered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="registerImg"
        alt="yet to register"
      />
      <p className="registeredpara">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this art
        form.
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  renderInitialView = () => (
    <p className="eventDetails">
      Click on an event, to view its registration details
    </p>
  )

  registrationClosedView = () => (
    <div className="registered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="registerdClosedImg"
        alt="registrations closed"
      />
      <h1 className="registeredHeading">Registrations are closed now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  render() {
    const {eventsTotal, result} = this.state
    let eventDetailsViewElement
    switch (result) {
      case resultOfEvent.registered:
        eventDetailsViewElement = this.registeredView()
        break
      case resultOfEvent.notRegistered:
        eventDetailsViewElement = this.notRegisteredView()
        break
      case resultOfEvent.registrationClosed:
        eventDetailsViewElement = this.registrationClosedView()
        break
      default:
        eventDetailsViewElement = this.renderInitialView()
        break
    }
    return (
      <div className="MainContainer">
        <div className="firstContainer">
          <h1 className="heading">Events</h1>
          <ul className="unorderedList">
            {eventsTotal.map(each => (
              <EventItem item={each} key={each.id} check={this.check} />
            ))}
          </ul>
        </div>
        <div className="secondContainer">{eventDetailsViewElement}</div>
      </div>
    )
  }
}
export default Events

import './index.css'

const EventItem = props => {
  const {item, check} = props
  const {id, imageUrl, name, location, registrationStatus} = item
  const clicked = () => {
    console.log('hi')
    check(id)
  }
  return (
    <li className="listItem">
      <img src={imageUrl} alt="event" className="itemImg" onClick={clicked} />
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem

import './index.css'

const BrowserHistory = props => {
  const historyDetails = props
  const {timeAccessed, logoUrl, title, domainUrl} = historyDetails
  console.log(historyDetails.timeAccessed)

  return (
    <li className="item-container">
      <div>
        <p className="paragraph">{timeAccessed}</p>
        <img className="domain-logo" alt="domain logo" src={logoUrl} />
        <p className="paragraph">{title}</p>
        <p className="domain-paragraph">{domainUrl}</p>
      </div>
      <div>
        <img
          className="icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </div>
    </li>
  )
}

export default BrowserHistory

// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class cashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const slice = name.slice(0, 1)

    return (
      <div className="app-con">
        <div className="cash-container">
          <div className="container-emo">
            <div className="inti-container">
              <p>{slice}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-con">
            <p className="balance">Your Balance</p>
            <p className="bal">
              {balance} <br /> <spam className="sp">In Rupees</spam>
            </p>
          </div>
          <p className="withdrall-con">Withdraw</p>
          <p className="ch-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="deg-con">
            {denominationsList.map(eachDenominations => (
              <DenominationItem
                key={eachDenominations.id}
                denominationDetails={eachDenominations}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default cashWithdrawal

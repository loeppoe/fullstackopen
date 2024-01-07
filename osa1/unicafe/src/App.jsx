import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
        <StatisticLine text='good' value={props.good} />
          <StatisticLine text='neutral' value={props.neutral} />
          <StatisticLine text='bad' value={props.bad} />
          <StatisticLine text='all' value= {props.total} />
          <StatisticLine text='average' value={(props.good - props.bad) / (props.total)} />
          <StatisticLine text='positive' value={(props.good / (props.total)) * 100 + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = (newValue) => {
    setGood(newValue)
    setTotal(newValue + neutral + bad)
  }

  const handleNeutralClick = (newValue) => {
    setNeutral(newValue)
    setTotal(newValue + good + bad)
  }

  const handleBadClick = (newValue) => {
    setBad(newValue)
    setTotal(newValue + neutral + good)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => handleGoodClick(good + 1)} text="good" />
      <Button handleClick={() => handleNeutralClick(neutral + 1)} text="neutral" />
      <Button handleClick={() => handleBadClick(bad + 1)} text="bad" />
      
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App

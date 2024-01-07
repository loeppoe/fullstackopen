const Part = (props) =>{
  return(
    <div>
      <p>{props.name} {props.exercises} </p>
    </div>)
}

const Total = (props) =>{
  return(
    <div>
      <p>
        {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}
      </p>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part name={props.part.parts[0].name} exercises={props.part.parts[0].exercises} />
      <Part name={props.part.parts[1].name} exercises={props.part.parts[1].exercises} />
      <Part name={props.part.parts[2].name} exercises={props.part.parts[2].exercises} />
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]}

  return (
    <div>
      <Header course={course} />
      <Content part={course} />
      <Total total={course} />
    </div>
  )
}

export default App

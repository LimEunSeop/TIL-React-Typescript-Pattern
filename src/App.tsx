import './App.css'
import CounterClass from './CounterClass'
import CounterFunction from './CounterFunction'

function App() {
  return (
    <>
      <h1>React + Typescript 패턴 공부</h1>
      <p>
        Link:{' '}
        <a href="https://dev.to/alexomeyer/10-must-know-patterns-for-writing-clean-code-with-react-and-typescript-1m0g">
          https://dev.to/alexomeyer/10-must-know-patterns-for-writing-clean-code-with-react-and-typescript-1m0g
        </a>
      </p>
      <h2>1. Use Default import to import React</h2>
      <p>"esModuleInterop" tsconfig 를 true로 할 것.</p>
      <h2>2. Declare types before runtime implementation</h2>
      <h2>3. Always provide explicit type of children Props</h2>
      <h2>4. Use type inference for defining a component state or DefaultProps</h2>
      <h2>5. Use type alias instead of interface for declaring Props/State</h2>
      <h2>6. Don't use method declaration within interface/type alias</h2>
      <h2>7. Don't use FunctionComponent</h2>
      <h2>8. Don't use constructor for class components</h2>
      <h2>9. Don't use public accessor within classes</h2>
      <h2>10. Don't use private accessor within Component class</h2>
      <h2>Bonus: Don't use enum</h2>

      <h2>Class Component</h2>
      <CounterClass someProps="testClassProps" />

      <h2>Function Component</h2>
      <CounterFunction someProps="testFunctionProps" />
    </>
  )
}

export default App

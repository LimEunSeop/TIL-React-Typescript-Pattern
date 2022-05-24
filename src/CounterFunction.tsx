import { MouseEvent, useState } from 'react'

// Functional Component의 State는 클래스의 state와는 useState를 사용하면서 각 속성이 분리가 되기 시작했다.
// 웬만하면 primitive 이지만, 오브젝트라면 이는 전역에서 관리하는 타입을 가져와서 할당해야할 것이다.
// 이는 클래스 컴포넌트에서도 마찬가지일것!!

type Props = { someProps: string; name: string }

const defaultProps: Partial<Props> = {
  name: 'John Doe',
}

const CounterFunction = ({ someProps, name }: Props) => {
  const [count, setCount] = useState<number>(0)

  const handleButtonClick = (e: MouseEvent) => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <div>someProps: {someProps}</div>
      <div>name: {name}</div>
      <div>{count}</div>
      <button onClick={handleButtonClick}>click</button>
    </>
  )
}

CounterFunction.defaultProps = defaultProps

export default CounterFunction

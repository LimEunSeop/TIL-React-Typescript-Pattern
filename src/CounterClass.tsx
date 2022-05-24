import { Component, MouseEvent } from 'react'

type State = { count: number }

type Props = { someProps: string; name: string }

export default class CounterClass extends Component<Props, State> {
  static defaultProps: Partial<Props> = { name: 'John Doe' }
  state = { count: 0 }

  // super(props)만 있으면 생성자 없어도 됨. 생성자에서는 readonly 인것은 재할당 가능. 이외의 코드에서 오류를 방지하는것 뿐.
  // constructor(props: Props) {
  //   super(props)

  // 	this.state = { count: 5 }
  // }

  handleButtonClick = (e: MouseEvent) => {
    this.setState((state) => {
      return { count: state.count + 1 }
    })
  }

  render() {
    return (
      <>
        <div>someProps: {this.props.someProps}</div>
        <div>name: {this.props.name}</div>
        <div>{this.state.count}</div>
        <button onClick={this.handleButtonClick}>click</button>
      </>
    )
  }
}

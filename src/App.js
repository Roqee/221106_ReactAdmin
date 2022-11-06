import React, { Component } from 'react'
import { Button, message } from 'antd'

export default class App extends Component {
	handClick = () => {
		message.success('成功啦。。。')
	}

	render() {
		return (
			<div>
				<Button type='primary' onClick={this.handClick}>
					点击
				</Button>
			</div>
		)
	}
}

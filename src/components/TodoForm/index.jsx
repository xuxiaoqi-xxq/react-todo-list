import React from 'react';
import { addTodo } from '../../api';
import { Form, Input, Button, Checkbox } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
const { TextArea } = Input;

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ''
		};
	}

	handlerChange = (e) => {
		this.setState({ content: e.target.value });
	};

	submitForm = (e) => {
		e.preventDefault();
		addTodo({ content: this.state.content, status: false })
			.then((response) => {
				this.props.addTodo(response.data);
			})
	};

	render() {
		const layout = {
			labelCol: { span: 8 },
			wrapperCol: { span: 16 },
		  };
		  const tailLayout = {
			wrapperCol: { offset: 8, span: 16 },
		  };
		return (
			// <Form>
			// 	<Form.Item>
			// 		<TextArea
			// 			autoSize={{ minRows: 2 }}
			// 			placeholder="Input a new Todo here..."
			// 			value={this.state.content}
			// 			onChange={this.handlerChange}
			// 		/>
			// 	</Form.Item>
			// 	<Form.Item>
			// 		<Button type="primary" htmlType="submit" onClick={this.submitForm}>
			// 			Submit
        	// 		</Button>
			// 	</Form.Item>
			// </Form>
			<Button type="primary" shape="circle" icon={<PlusOutlined />} size={12} />
		);
	}
}

export default TodoForm;

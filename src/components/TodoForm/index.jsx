import React from 'react';

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
		this.props.addTodo(this.state.content);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<div className="todo-form">
						<input
							placeholder="Input a new Todo here..."
							value={this.state.content}
							onChange={this.handlerChange}
						/>
						<button>add</button>
					</div>
				</form>
			</div>
		);
	}
}

export default TodoForm;

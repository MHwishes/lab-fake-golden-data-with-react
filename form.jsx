var Form = React.createClass({
    getInitialState: function () {
        return {
            shape: []
        };
    },
    delete: function (index) {
        this.state.shape.splice(index, 1);
        this.setState({shape: this.state.shape});

    },
    increase: function () {
        let isChecked = this.refs.text.checked;
        if (isChecked) {
            this.state.shape.push(<div>
            <textarea rows="3" cols="20">
            </textarea>
                <button onClick={this.delete.bind(this, this.state.shape.length - 1)}>删除</button>

            </div>)
        }
        isChecked = this.refs.data.checked;

        if (isChecked) {
            this.state.shape.push(<div>
                <input type="date"/>
                <button onClick={this.delete.bind(this, this.state.shape - 1)}>删除</button>
            </div>)

        }
        this.setState({shape: this.state.shape});
    },
    run: function () {
        ReactDOM.render(<Preview>{this.state.shape}</Preview>, document.body)

    },
    render: function () {
        return (
            <div>
                <div id="title">
                    <button onClick={this.run}>预览</button>
                </div>
                <div id="right">
                    <input type="radio" name="input1" ref="text"/> 文本
                    <br/>
                    <input type="radio" name="input1" ref="data"/>日期
                    <br/>
                    <button onClick={this.increase}>增加</button>
                </div>
                <div id="left">
                    {this.state.shape}
                </div>
            </div>)
    }
});

ReactDOM.render(<div>
    <Form/>
</div>, document.getElementById("form"));


var Preview = React.createClass({
    run: function () {
        ReactDOM.render(<div>
            <Form/>
        </div>, document.body);

    },
    render: function () {
        return <div>
            <button onClick={this.run}>编辑</button>
            <div>
                {this.props.children}
            </div>
            <button>提交</button>
        </div>

    }
});

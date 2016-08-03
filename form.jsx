var App = React.createClass({
    getInitialState: function () {
        return {
            shape: [],
            isEditor: true
        };
    },
    toggle: function () {
        this.setState({
            isEditor: !this.state.isEditor
        });
    },
    onChildChanged: function (newState) {
        this.setState({
            shape: newState
        });
    },
    render: function () {
        const isEditor = this.state.isEditor;

        return (
            <div>
                <button name='title' onClick={this.toggle}>{isEditor ? "Preview" : "Edit"}</button>
                <div className={isEditor ? "" : "hidden"}>
                    <RightPanel callbackParent={this.onChildChanged}>{this.state.shape}</RightPanel>
                    <LeftPanel callbackParent={this.onChildChanged}>{this.state.shape}</LeftPanel>
                </div>
                <div className={isEditor ? "hidden" : ""}>
                    <Preview>{this.state.shape}</Preview>
                </div>
            </div>
        )
    }
});



var RightPanel = React.createClass({

    increase: function () {
        let isTextChecked = this.refs.text.checked;

        if (isTextChecked) {
            this.props.children.push("textItem")
        }

        let isDateChecked = this.refs.data.checked;

        if (isDateChecked) {
            this.props.children.push("dateItem");
        }
        this.setState({shape: this.props.children});
        this.props.callbackParent(this.props.children);
    },
    render: function () {
        return (
            <div>
                <div id="right">
                    <input type="radio" name="input" ref="text"/> 文本
                    <br/>
                    <input type="radio" name="input" ref="data"/>日期
                    <br/>
                    <button onClick={this.increase}>增加</button>
                </div>
            </div>
        )
    }
});

var LeftPanel = React.createClass({
    delete: function (index) {
        this.props.children.splice(index, 1);
        this.setState({shape: this.props.children});
    },
    render: function () {
        return (<div id="left">
                {this.props.children.map((item,index)=> {
                if (item === 'textItem') {
                    return <div>
                        <textarea rows="3" cols="20"> </textarea>
                        <button onClick={this.delete.bind(this,index)}>删除</button>
                    </div>
                }

                if (item === 'dateItem') {
                    return <div>
                        <input type="date"/>
                        <button onClick={this.delete.bind(this,index)}>删除</button>
                    </div>

                }
            })
            }
            </div>
        )
    }
});

var Preview = React.createClass({

    render: function () {
        return <div>
            <div>
                {this.props.children.map(item=> {
                    if (item === "textItem") {
                        return <div>
                            <textarea rows="3" cols="20"> </textarea>
                        </div>
                    }
                    if (item === 'dateItem') {
                        return <div><input type="date"/></div>
                    }
                })}
            </div>
            <button id="title">提交</button>
        </div>
    }
});

ReactDOM.render(<div>
    <App/>
</div>, document.getElementById("form"));


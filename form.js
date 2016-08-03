var App = React.createClass({
    getInitialState: function () {
        return {
            elements: [],
            isEditor: true
        }
    },
    toogle: function () {
        this.setState({isEditor: !this.state.isEditor})
    },
    addElement: function (ele) {
        this.state.elements.push(ele);
        this.setState({elements:this.state.elements})
    },
    removeElement: function (i) {
        this.state.elements.splice(i, 1);
        this.setState({elements:this.state.elements})
    },

    render: function () {
        const isEditor = this.state.isEditor;
        return (
            <div>
                <button onClick={this.toogle}>{isEditor ? 'preview' : "edit"}</button>
                <div className={isEditor ? '' : 'hidden'}>
                    <Editor onAdd={this.addElement} onDelete={this.removeElement} elements={this.state.elements} />
                </div>
                <div className={isEditor ? 'hidden' : ''}><Preview elements={this.state.elements}/></div>
            </div>

        )
    }
});

var Editor = React.createClass({
    render: function () {
        return (
            <div>
                <Right onAdd={this.props.onAdd}/>
                <Left onDelete={this.props.onDelete} elements={this.props.elements}/>
            </div>

        )
    }
});

var Right = React.createClass({
    add: function () {
        const element = $("input[name=input]:checked").val();
        this.props.onAdd(element);
    },
    render: function () {
        return (
            <div>
                <input type="radio" name="input" value="text"/>文本框
                <input type="radio" name="input" value="date"/>日期
                <button onClick={this.add}>+</button>
            </div>

        )
    }
});

var Left = React.createClass({
    delete: function (i) {
        this.props.onDelete(i);
    },
    render: function () {
        const elements = this.props.elements.map((ele, i)=> {
            return <div key={i}>
                <input type={ele}/>
                <button onClick={this.delete.bind(this, i)}>-</button>
            </div>
        })

        return (
            <div>{elements}</div>
        )
    }
});


var Preview = React.createClass({
    render: function () {
        const text = this.props.elements.map((ele, i)=> {
            return <div key={i}>
                <input type={ele}/>
            </div>
        })
        return (
            <div>
                {text}
                <button>提交</button>
            </div>

        )
    }
});

ReactDOM.render(<App/>, document.getElementById('form'));
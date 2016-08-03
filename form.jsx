var App = React.createClass({
    getInitialState:function () {
      return{elements:[],
      isEditor:true}
    },
    toogle:function () {
      this.setState({isEditor:!this.state.isEditor})  
    },
    addElement:function (ele) {
        this.state.elements.push(ele);
        this.setState({elements})
    },
    render: function () {
        const isEditor=this.state.isEditor;
        return (
        <div>
            <button onClick={this.toogle}>{isEditor?'preview':"edit"}</button>
            <div className={isEditor?'':'hidden'}>
                <Editor onAdd={this.addElement} onDelete={this.remove} elements={this.state.elements} />
            </div>
            <div className={isEditor?'hidden':''}><Preview/></div>
        </div>

        )
    }
});

var Editor = React.createClass({
    render: function () {
        return (
        <div>
            <Right  onAdd={this.props.onAdd}/>
            <Left onDelete={this.props.onDelete} elements={this.props.elements}/>
        </div>
           
        )
    }
});

var Preview = React.createClass({
    render: function () {
        const text=this.state.elements.map(ele=>{
            <div><input  type={ele}/></div>
        })
        return (
            <div>
                {text}
                <button>提交</button>
            </div>

        )
    }
});

ReactDOM.render(<App/>,document.getElementById('form'))
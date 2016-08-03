var App = React.createClass({
    getInitialState:function () {
      return{elements:[],
      isEditor:true}
    },
    toogle:function () {
      this.setState({isEditor:!this.state.isEditor})  
    },
    render: function () {
        const isEditor=this.state.isEditor;
        return (
        <div>
            <button onClick={this.toogle}>{isEditor?'preview':"edit"}</button>
            <div className={isEditor?'':'hidden'}><Editor/></div>
            <div className={isEditor?'hidden':''}><Preview/></div>
        </div>

        )
    }
});

var Editor = React.createClass({
    render: function () {
        return (
        <div></div>
           
        )
    }
});



var Preview = React.createClass({
    render: function () {
        return (
        <div></div>
           
        )
    }
});

ReactDOM.render(<App/>,document.getElementById('form'))
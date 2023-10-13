class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Image!</h1>
        <img src="https://images.unsplash.com/photo-1696986291642-54225330b8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));

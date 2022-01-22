import './App.scss';
import Message from './Message';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My first React App
        <h3>Hello, {props.name} </h3>
        <Message text={'Задание по первому уроку'} />
      </header>
    </div>
  );
}

export default App;

import './App.scss';
import React, { useEffect, useState } from "react";

const AUTHOR = {
  me: 'me',
  bot: 'bot'
}

function App() {
  //1.Добавить в компонент App поле стейта messageList.
  //В нем хранить массив объектов-сообщений (объект должен содержать, как минимум, поля text и author).
  // Начальное значение - пустой массив).

  // array [ {text: 'input text', autor: 'me | bot'} ]

  //2.Рендерить список сообщений через map
  //3.Добавить и стилизовать форму - поле для ввода текста и кнопка для отправки сообщения.
  //При отправке сообщения обновление UI должно происходить за счет обновления стейта App.
  //3.Добавить в App useEffect - на каждое отправленное пользователем сообщение должен
  //отвечать робот (должно автоматически отправляться сообщение с фиксированным
  //текстом) - для этого необходимо проверять автора последнего сообщения.
  //4*. Сделать задержку ответа робота - сообщение от него должно отправляться через
  //некоторый промежуток времени после отправки сообщения пользователя (напр., 1.5 сек).

  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const valueFromInput = event.target.value;
    setValue(valueFromInput);
  }

  const handleSend = () => {
    setMessageList([...messageList, { text: value, author: AUTHOR.me }]);
    setValue('');
  }

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
      setMessageList([...messageList, { text: 'сгенерированное сообщение', author: AUTHOR.bot }]);
    }
  }, [messageList])// componentDidUpdate
  return (
    <div>
      <div className="App">
        <div className='dashBoard'>
          {messageList.map((message,) => (
            <div className='message'>{message.text}<sup>{message.author}</sup></div>
          ))}
        </div>
        <div className='controlPanel'>
          <input onChange={handleChange} value={value} />
          <button onClick={handleSend}>Send</button>
        </div>

      </div>
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import './Button.css';

const Button = () => {
  const [text, setText] = useState('Click me!');
  return (
    <div>
        <button onClick={() => {
            setText('Thank you!');
            setTimeout(() => {
              setText('Click me!');
            }, 2000);
        } }>{text}</button>
    </div>
  )
}

export default Button

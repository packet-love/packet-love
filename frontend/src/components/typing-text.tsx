import React, {useState, useEffect} from 'react';

interface TypingTextProps {
  text: string,
  speed: number,
  fontSize: string,
  color: string,
  onComplete: () => void
}

const TypingText: React.FC<TypingTextProps> = ({text, speed, fontSize, color, onComplete}) => {
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);

  useEffect(() => {
    let typingText = text ? text : "";//기본값
    let typingSpeed = speed ? speed : 100;//기본값

    const interval = setInterval(() => {
      setText((Text) => {
        let updated = Text;
        updated = Text + typingText[Count];
        return updated;
      });
      setCount(Count + 1);
    }, typingSpeed);

    if (Count === typingText.length) {
      clearInterval(interval);
      onComplete();
    }

    return () => clearInterval(interval);
  }, [Text]);

  useEffect(() => {
    setText('');
    setCount(0);
  }, [text]);

  return (
    <p style={{fontSize: `${fontSize}`, color: `${color}`}}>{Text}</p>
  )
};

export default TypingText;

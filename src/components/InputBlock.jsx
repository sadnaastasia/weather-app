import { useRef } from 'react';
import { getWeather } from '../store/weatherSlice';
import { useDispatch } from 'react-redux';

function InputBlock() {
  let inputRef = useRef(null);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(getWeather(inputRef.current.value));
  };

  const keyHandler = (event) => {
    if (event.key === 'Enter') {
      clickHandler();
      inputRef.current.focus();
    }
  };

  return (
    <div
      className="flex justify-around bg-fuchsia-200/50 rounded-lg shadow-xl p-5"
      onKeyDownCapture={keyHandler}
    >
      <input
        className="capitalize outline-none text-xl w-3/4 bg-fuchsia-100/50 rounded-lg px-5 py-2 mr-2"
        ref={inputRef}
        placeholder="City name"
        defaultValue="Minsk"
        autoFocus
      ></input>
      <button
        className="bg-fuchsia-100/50 rounded-lg px-5 py-2 text-xl cursor-pointer"
        onClick={clickHandler}
      >
        Search
      </button>
    </div>
  );
}

export default InputBlock;

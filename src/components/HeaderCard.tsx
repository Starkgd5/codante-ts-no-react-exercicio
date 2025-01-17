import { useContext, useEffect, useRef } from "react";
import { fetchQuote, fetchRandomColor } from "../lib/services";
import Button from "./Button";
import context from "../context/context";


export default function HeaderCard() {
  const { bgColor, setBgColor, setQuote } = useContext(context);

  async function handleClick() {
    const quote = await fetchQuote();
    const color = await fetchRandomColor();
    setQuote(quote);
    setBgColor(color.hex);
  }
  async function handleChangeColorClick() {
    const newColor = await fetchRandomColor();
    setBgColor(newColor.hex);
    
  }

  const quoteButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    quoteButtonRef?.current?.focus();
  }, [])

  return (
    <div className="w-full max-w-4xl px-10 py-6 mx-auto bg-white border-2 border-gray-200 shadow-2xl rounded-lg bg-opacity-15 ">
    <h1 className="text-3xl font-bold brightness-50 md:text-7xl font-display " style={{color: bgColor}}>
      Frases Motivacionais
    </h1>
    <Button ref={quoteButtonRef} onClick={handleClick} bgColor={bgColor}>
      Me dê uma dose de ânimo
    </Button>
    <Button className="ml-2" onClick={handleChangeColorClick} bgColor={bgColor}>
      Mudar cor
    </Button>
    <label htmlFor="color-changer"
      className="inline-flex px-4 py-2 mt-10  bg-transparent border-2 border-gray-200 shadow-xl rounded bg-opacity-15 focus:outline-none
      focus:ring-2 focus:ring-white focus:ring-opacity-50 ml-2 cursor-pointer"
      >
        <span className="brightness-50 font-bold" style={{color: bgColor}}>Escolha uma cor</span>
      <input onChange={(e) => setBgColor(e.currentTarget.value)} type="color" name="color-changer" id="color-changer" className="w-0 h-0"/>
    </label>
    </div>
  )
}
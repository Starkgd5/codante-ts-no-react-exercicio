import { useContext } from "react";
import Cards from "./Cards";
import context from "../context/context";


export default function QuoteCard() {
  const { quote } = useContext(context)
  return (
    <Cards>
      <p className="font-serif text-3xl italic leading-normal text-gray-700 font-extralight">
        {quote?.quote}
      </p>
      <p className="mt-10 text-2xl text-black">-- {quote?.author}</p>
    </Cards>
  );
}

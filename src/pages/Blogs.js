import { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom/client";

const Blogs = () => {

  const [inputvalues,Setinputvalues] = useState("");
  const PreviousValue = useRef("");
  const count = useRef(0);

  const inputElement = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    PreviousValue.current = inputvalues;
  });

  function focusElement(){
    inputElement.current.focus();
  }
 

  return (
    <div>
      <input type="text" value = {inputvalues} onChange={(e) => Setinputvalues(e.target.value)} />
      Count Currecnt : {count.current} <br/>

      Currect Value : {inputvalues}<br/>

      Previous Value : {PreviousValue.current}<br/>

      <input type="text" ref={inputElement} />
      <button onClick={focusElement} >Click </button>
    </div>
  );

  
  

};

export default Blogs;

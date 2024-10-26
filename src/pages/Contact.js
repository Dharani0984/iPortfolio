import { useState,createContext,useContext } from "react";


const userContext = createContext();
function Contact(){

  function Component1(){
    const [user,setUser] = useState("Dharani Kumar N");
    return (
      <userContext.Provider value={user}>
        <h1>Mr sir. {user}</h1>
        <Component2 />
      </userContext.Provider>
    );
  }

  function Component2(){
    return (
     <div>
        <h2>Component2</h2>
        <Component3 />
     </div>
      
    );
  }

  function Component3(){
   return (
    <div>
      <h3>Component3</h3>
      <Component4 />
    </div>
   );
  }

  function Component4(){
    return (
     <div>
       <h4>Component4</h4>
       <Component5 />
     </div>
    );
  }

  function Component5(){

    const user = useContext(userContext);

    return (
      <div>
        <h1>Mr, sir, {user}</h1>
      </div>

    );
  }
  return (
    <idv>
      < Component1 />
    </idv>
  );
  };
  
  export default Contact;
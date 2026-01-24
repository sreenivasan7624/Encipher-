
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
{/*Task:1*/}
function Valid({ log }) {
  return (
    <h2>
      {log ? "Login success" : "Login Unsuccess"}
    </h2>
  );
}
{/*Task:2*/}
function Message() {
  const [msg, setMsg] = useState(false);

  return (
    <div>
      <button onClick={() => setMsg(!msg)}>
        Show / Hide Message
      </button>

      {msg && <p>Hello</p>}
    </div>
  );
}
{/*Task:3*/}
function Login() {
  const [log, setLog] = useState(false);

  return (
    <div>
      <button onClick={() => setLog(!log)}>
        {log?"Login":"Logout"}
      </button>

      {log && <h3>Dashboard</h3>}
    </div>
  );
}
{/*Task:4*/}
function Fruit(){
    const fru=["Apples","Dragon Fruit","Avacardo"]
    return(
        <ul>
            {fru.map((fru,index)=>(
                <li key={index}>{fru}</li>
            ))}
        </ul>
    )
}
{/*Task:5 */}
function List(){
    const leg=[
        {id:1,name:"Messi"},
        {id:2,name:"Neymar"},
        {id:3,name:"Suarez"},
    ];
    return(
        <ul>
            {leg.map((leg,index)=>(
            <li key={leg.id}>{leg.name}</li>
        ))}
        </ul>
        
    )
        
    
}
{/*Task:6 */}
function Input() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
}
{/*Task:8*/}
function Boot() {
  return (
    <div className="container text-center mt-5">
      <button className="btn btn-primary">
        Bootstrap
      </button>
    </div>
  );
}
{/*Task:9 */}
function Card() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold">Card Title</h2>
        <p>Description text</p>
      </div>
    </div>
  );
}
 {/*Task:10 */}
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {   
  return (
    <div>
      <Valid log={true} />
      <Valid log={false} />
      <Message/>
      <Login/>
      <Fruit/>
      <List/>
      <Input/>
      <Boot/>
      <Card/>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

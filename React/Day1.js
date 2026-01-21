task:1
function Hello() {
  return <h1>Hello React</h1>
}
export default Hello;
task:2
function Welcome(){
  return <h1>Welcome to React Class</h1>
}
export default Welcome;
task:3
function Header(){
  return <h1>Header</h1>
}
function App(){
  return <Header/>
}
export default App;
task:4
function Header(){
  return <h1>Header</h1>
}
function App(){
  return <h1>App</h1>
}
function Parent(){
  return(
    <div>
      <Header/>
      <App/>
    </div>
  )
}
export default Parent;
task:5
const name="Sreeni"
function Display(){
  return <h1>Hello {name}</h1>
}
export default Display;
task:6
const name="Sreeni"
function Snow() {
  return <h1>My name is </h1>
}
function Display(){
  return <div><Snow/><h1>{name}</h1></div>
}
export default Display;
task:7
const a=10;
const b=20;
function Sum() {
  return <h1>{a+b}</h1>
}
export default Sum;
task:8
const admin="Sreeni"
function Pass(){
  if(admin){
    return <h1>Admin User</h1>
  }
}
export default Pass;
task:9

<Reign name="Sreeni" />
task:9
function Reign(props) {
  return <h1>User Name: {props.name}</h1>;
}
function App() {
  return (
      <Reign name="Sreeni" />
  );
}
export default App;
task:10
function Lord(props){
  return (
    <div>{props.name} {props.age}</div>
  );
}
function Tar(){
  return(
  <div>
  <Lord name="Sreeni" age={90} />
  </div>
  );
  
}
export default Tar;
task:11
function Rome(props){
  return(
    <diV>
    <h1>{props.name}</h1>
    </diV>
  );
}
function Bome(){
  return(
    <div><Rome name="Sreeni" /></div>
    
  );
}
export default Bome;
task:12
function Action(props){
  return <button>{props.name}</button>
}
function Rep(){
  return(
    <div>
      <Action name="Add"/>
      <Action name="Delete"/>
      <Action name="Merge"/>
    </div>
  );
}
export default Rep;
task:13
function Cond(props){
  if(props.name){
  return(
    <div><h1>Logged In</h1></div>
  );
}
  else{
    return(
    <div><h1>Logged Out</h1></div>
  );
  }
}
function Lego(){
  return(
    <div><Cond name={true}/></div>
    
  )
}
export default Lego
task:14
function Fed(props){
  return(
    <div>
      {props.user.name} {props.user.age} 
    </div>
  );
}
function Travis(){
  const user={
    name:"Sreeni",
    age:21
  }
  return(
    <div>
      <Fed user={user}/>
    </div>
  )
}
export default Travis;

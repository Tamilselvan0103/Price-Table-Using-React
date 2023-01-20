import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let data = [
    {
      User : "✔ Single User",
      Storage : "✔ 5GB Storage",
      Projects : "✔ Unlimited Public Projects",
      Access : "✔ Community Access",
      Private : "〤 Unlimited Private Projects",
      Phone : "〤 Dedicated Phone Support",
      Subdomain : "〤 Free Subdomain",
      Reports : "〤 Monthly Status Reports",
      sub : "FREE",
      price : "$0",
      duration : "month",
      text : "text-muted",
      textp : "text-muted",
      textph : "text-muted",
      texts : "text-muted",
      textr : "text-muted",

    },
    {

      User : "✔ 5 Users",
      Storage : "✔ 50GB Storage",
      Projects : "✔ Unlimited Public Projects",
      Access : "✔ Community Access",
      Private : "✔ Unlimited Private Projects",
      Phone : "✔ Dedicated Phone Support",
      Subdomain : "✔ Free Subdomain",
      Reports : "〤 Monthly Status Reports",
      sub : "PLUS",
      price : "$9",
      duration : "month",
      textr : "text-muted",
    },
    {
      User : "✔ Unlimited Users",
      Storage : "✔ 150GB Storage",
      Projects : "✔ Unlimited Public Projects",
      Access : "✔ Community Access",
      Private : "✔ Unlimited Private Projects",
      Phone : "✔ Dedicated Phone Support",
      Subdomain : "✔ Free Subdomain",
      Reports : "✔ Monthly Status Reports",
      sub : "PRO",
      price : "$49",
      duration : "month"
    }
  ]
  return (
    <div className="container App">
    {data.map((iteam,idx)=>(
      <Createcard
      key = {idx}
      User = {iteam.User}
      Storage = {iteam.Storage}
      Projects = {iteam.Projects}
      Access = {iteam.Access}
      Private = {iteam.Private}
      Phone = {iteam.Phone}
      Subdomain = {iteam.Subdomain}
      Reports = {iteam.Reports}
      duration = {iteam.duration}
      sub = {iteam.sub}
      price = {iteam.price}
      text = {iteam.text}
      textp ={iteam.textp}
      textph ={iteam.textph}
      texts ={iteam.texts}
      textr ={iteam.textr}
      />
    ))}
    
    </div>
  );
}

export default App;


function Createcard(props){
return(
  <div className ="Container">
  <div className = 'Card'>
    <div className='Header' >
      <p className='text-muted h'>{props.sub}</p>
      <span className='price'>{props.price}</span>/<sub>{props.duration}</sub>
    </div>
    <hr></hr>
    <div className='Cardbody'>
      <ul>
      <li style={{font_Weight:props.clr}}>{props.User}</li>
      <li>{props.Storage}</li>
      <li>{props.Projects}</li>
      <li>{props.Access}</li>
      <li className={props.textp}>{props.Private}</li>
      <li className={props.textph}>{props.Phone}</li>
      <li className={props.texts}>{props.Subdomain}</li>
      <li className={props.textr}>{props.Reports}</li>
      </ul>
    </div>
    <br/>
    <div className='footer'>
      <button className='Btn'>BUTTON</button>
    </div>
  </div>
  </div>
)
}
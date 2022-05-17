
import './App.css';

// price cards details
const cards = [
  {
    plan:"FREE",
    head:"$0",
    line1:"✔ Single User",
    line2:"✔ 5GB Storage",
    line3:"✔ Unlimited Public Projects",
    line4:"✔ Community Access",
    line5:"✘ Unlimited Private Projects",
    line6:"✘ Dedicated Phone Support",
    line7:"✘ Free Subdomain",
    line8:"✘ Monthly Status Reports"
  },
  {
    plan:"PLUS",
    head:"$9",
    line1:"✔ 5 User",
    line2:"✔ 50GB Storage",
    line3:"✔ Unlimited Public Projects",
    line4:"✔ Community Access",
    line5:"✔ Unlimited Private Projects",
    line6:"✔ Dedicated Phone Support",
    line7:"✔ Free Subdomain",
    line8:"✘ Monthly Status Reports"
  },
  {
    plan:"PRO",
    head:"$49",
    line1:"✔ Unlimited User",
    line2:"✔ 150GB Storage",
    line3:"✔ Unlimited Public Projects",
    line4:"✔ Community Access",
    line5:"✔ Unlimited Private Projects",
    line6:"✔ Dedicated Phone Support",
    line7:"✔ Unlimited Free Subdomain",
    line8:"✔ Monthly Status Reports"
  }
];

// main function components
export default function App() {

  return (
    <div className="App">
     <div className='container'>
       <div className="row">
        
      {cards.map((d)=><Price plan={d.plan} head={d.head} line1={d.line1} line2={d.line2} line3={d.line3} line4={d.line4} line5={d.line5} line6={d.line6} line7={d.line7} line8={d.line8}      />)}
      
      </div>  
      </div>
    </div>
  );
}


// price cards components
function Price({plan, head,line1, line2,line3, line4, line5, line6, line7, line8}){
  return(
    <div className="col ">
    <div className='card mt-5 m-5'>
        <p className='text-center fw-bold text-secondary'>{plan}</p>
        <h3 className='text-center fw'>{head} <sub className='t'>/month</sub> </h3> <br />
        <hr />
        <p className="">{line1}</p>
        <p>{line2}</p>
        <p>{line3}</p>
        <p>{line4}</p>
        <p>{line5}</p>
        <p>{line6}</p>
        <p>{line7}</p>
        <p>{line8}</p>
        <button className='btn btn-primary rounded-pill p-3 fw-bold'>BUTTON</button>
        </div>
    </div>
  );
}




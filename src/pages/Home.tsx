export default function Home() {
  const dataFooter = [
    {
      title:"Register",
      url:""
    },
    {
      title:"Terms & conditions",
      url:""
    },
    {
      title:"Privacy policy",
      url:""
    },
    {
      title:"Documentation",
      url:""
    },
    {
      title:"Pricing",
      url:""
    },
    {
      title:"Our blog",
      url:""
    },
    {
      title:"Documentation",
      url:""
    },
    {
      title:"",
      url:""
    },
  ] 
  const renderViewDataFooter = (item, i) => {
    return(
      <li style={{color:"#FFFCFE", fontSize:"16px", padding:"20px"}}>{dataFooter.length - 1 == i ? <div style={{display:"flex"}}><img style={{width:"30px"}} src="/images/group.png"></img><span>Rival</span><span style={{color:"#4299E1"}}>CMS</span></div>:item.title  }</li>
     );
  }
  return (
    <div>
      <div className="content">
        <h1 style={{fontSize:"100px", margin:"0px"}}><span style={{color:"#ffffff"}}>Rival</span><span>CMS</span></h1>
        <p style={{fontSize:"40px", color:"#ffffff",margin:"0px"}}>Fresh new way to build sites</p>
        <p style={{fontSize:"30px", color:"#FFFFFF",paddingTop:"25px", paddingBottom:"20px" }}><span style={{border:"1px solid #ffffff", padding:"30px 25px 30px 25px", borderRadius:"5px"}}>Get started free</span></p>
        <p style={{fontSize:"15px",color:"#FFFFFF", height:"200px"}}>*no card needed</p>
        
      </div>
      <div style={{position:"absolute", left:"25%", right:"25%", top:"550px"}}>
        <img style={{width:"1123px"}} src="/images/group-4.png"></img>
      </div>
      <div style={{position:"fixed", bottom:"0px", width:"100%", backgroundColor:"#2A4365"}}>
        <footer style={{textAlign:"center"}}>
          <ul style={{listStyleType:"none", display:"inline-flex"}}>
            {
             dataFooter.map((item, i) =>(renderViewDataFooter(item, i)))
             } 
          </ul>
        </footer>
      </div>
    </div>
    
  )
}
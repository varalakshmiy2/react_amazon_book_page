import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
const ArrayBook = [
  {
    img : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQk0mMpYEHg_hKlcuUCLpRHLydsdWqg8Oj_jH76-SUohev1jC1bmuPiyckJjMcQU-E_FgVgBpDS7WAMwEBXf-XymfDPc5JEjtYfBUQK-SfQRB7mrEO_fyMhrw&usqp=CAE",
    title: " Ikigai",
    link : "Ikigai(english,Hardcover,Garcia Hector)...",
    Price: "₹160.0",
  },
  {
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZLScGxVzrXC9zZXSI39qOTLJbU_qhOe6mZr0lhC_sD5FlvBCsIXwLdmDPwFZf_--NPpIsLzgs7xwgijn1creWVdx5D5P5HJ3hH8RTcPP6&usqp=CAE",
    title: " why not me",
    link1 :"Why Not ME? A Feeling of Millions (English)",
    Price: "₹120.0",
    
  },
  {
    img :"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGdusYHXubtui-SsHKSUbgnNpwyQt5PaLu3gg3mPXA1BvLFXZMUfKe4nZIbsSs7PogK9CO3yV6pIRv5mEQMmof6_L8NIZ_ELURK-i2FEw&usqp=CAE",
    title :"Better Than Best Friends",
    link2:"Amazon.in",
    Price : "₹170.0",
  },
  {
    img :"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRixN0yv3RvSud6eXyD9TMXGutjK7NCSwSYuptnCq3y_zfGwDwH062LahwZWM3jk2crg4rkkJ7ErxgmhxSIHdx-XVqJ1i2BL8kZnai35HnOZdS9_VdmWQdY&usqp=CAE",
    title :"Books Harry Potter Box Set : The Complete Collection...",
    link3:"Snapdeal",
    Price : "₹1874.0",
  },
]

const Book =(props)=>{
  
  const {img,title, Price,link,link1,link2,link3} = props;
  return(
    
    <article className ="container">
    
      <img src={img} alt ="" />
      <h2>{title.toUpperCase()}</h2>
      <a href={"https://www.snapdeal.com/product/ikigai-english-hardcover-garcia-hector/668184776843?supc=SDL947335178&utm_source=earth&utm_medium=668184776843_388_364_160&vendorCode=S28e2b&isSellerPage=true&fv=true&utm_source=earth_pla&utm_campaign=snapdeal_pla_account_pla_all_products_roas_1d_ftu&utm_medium=&utm_term=498562763992_118648795118_{bidstrategy}&gclid=Cj0KCQiA8vSOBhCkARIsAGdp6RSBHcicgRbSZY1hAX_We0-cKrZEVmvvONaTzWIf4yI9HtF3PBsN-PkaAms2EALw_wcB"}>{link}</a>
      <a href={"https://www.amazon.in/Why-Not-Feeling-Millions-English/dp/9390351472/ref=asc_df_9390351472/?tag=googleshopdes-21&linkCode=df0&hvadid=397083485192&hvpos=&hvnetw=g&hvrand=8770294009905111978&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007768&hvtargid=pla-985169491648&psc=1&ext_vrnc=hi"} >{link1} </a>
      < a href ={"https://www.amazon.in/Better-Than-Friends-Ahona-Sadhu/dp/1648059503/ref=asc_df_1648059503/?tag=googleshopdes-21&linkCode=df0&hvadid=397007499787&hvpos=&hvnetw=g&hvrand=8770294009905111978&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007768&hvtargid=pla-880921921895&psc=1&ext_vrnc=hi"}>{link2}</a>
      <a href ={"https://www.snapdeal.com/product/harry-potter-the-complete-collection/673199886040?supc=SDL884795864&utm_source=earth&utm_medium=673199886040_372_364_1874&vendorCode=S28e2b&isSellerPage=true&fv=true&utm_source=earth_pla&utm_campaign=snapdeal_pla_account_pla_all_products_roas_1d_ftu&utm_medium=&utm_term=498562763992_118648795118_{bidstrategy}&gclid=Cj0KCQiA8vSOBhCkARIsAGdp6RQZMbLJyad8ELCMM8NwWE8vywRoVlReXkk-1gO4G32D5ztzJQ-cZBQaAippEALw_wcB"}>{link3}</a>
      <h1 onClick={()=>console.log({Price})}> {Price}</h1>

    </article>
  )
}
function BookList (){
  return(
    <section>
      
      {
         
        ArrayBook.map((book, index)=>{
              return  <Book key ={index} {...book} ></Book> 
    
         }
         
        )
      }
    </section>
  )
}

ReactDOM.render(<BookList/>,document.getElementById('root'))
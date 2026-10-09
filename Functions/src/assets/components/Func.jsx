import React from 'react'
const Func = () => {

    function inputChanging(val){
    console.log(val);
  }

  function pageScrolling(elem){
    if (elem>0){
      console.log("Seedha Scrolling");
    }
    else{
      console.log("Ulta Scrolling");
    }
  }

  function btnClicked(){
    console.log('Hello');
  }

  return (
    <div>
        <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} type="text" placeholder="Enter Name" />

      <div onMouseMove={(elem)=>{
        console.log(elem.clientX);
      }} className="box">
      </div>
      <div onWheel={(elem)=>{
        pageScrolling(elem.deltaY)
      }
      }>
        <div className="page1">
          <button onClick={btnClicked}>Button</button>
        </div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  )
}

export default Func
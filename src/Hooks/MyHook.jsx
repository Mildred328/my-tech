// import React from 'react'

// // Function based component (fbc) cannot effectively manage state of data that changes or update them as they change. Hence the introduction of react hooks.
// // TYPES OF HOOKS
// // useState hook, useEffect hook, useParam hook, useContext hook, useRef,custom hooks,

// // useState hook: used to update function base components.
// // It  must be import/destructure it first from react. It must be used inside the function body.
// // It has three main parts: stateName, function to update the state(ie setName()) and the useState(initialState).


// const MyHook = () => {

//     // hook
//     // const [count, setCount] = useState(0);
//     const [theme, setTheme] = useState(blue)
//     let count = 0;
//     const handleIncrease = ()=> {
//         // count + 1;
//         setCount(count + 1);
//     }
//     const handleDecrease = ()=> {
//         // count - 1;
//         setCount(count - 1);
//     }
// console.log(count);
//   return (
//     <div>
//         <h1>My Hook Component</h1>
//         <div className="">
//             <button className='btn btn-outline-danger' onClick={handleDecrease}>-</button>
//             <span className='mx-4 fw-bold'>{count}</span>
//             <button className='btn btn-outline-success' onClick={handleIncrease}>+</button>
//         </div>
//     </div>
//   )
// }

// export default MyHook



import React, { useState, useEffect } from 'react'


// Function based component (fbc) cannot effectively manage state of data that changes or update them as they change. Hence the introduction of react hooks.
// // TYPES OF HOOKS
// // useState hook, useEffect hook, useParam hook, useContext hook, useRef,custom hooks,

// // useState hook: used to update function base components.
// // It  must be import/destructure it first from react. It must be used inside the function body.
// // It has three main parts: stateName, function to update the state(ie setName()) and the useState(initialState).


// Must be imported at the top level of your component


const MyHook = () => {

    // hook (useState) name of the hook & state of the component.
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState({
        bg: "",
        col: "black"
    })

    // useEffect hooks
    useEffect(()=>{
        console.log("useEffect called");
    })

    // run only once on page load
    useEffect(()=>{
        console.log("useEffect called once");
    }, []) //componentDidMount
    // useEffect hook as componentDidUpdate
    useEffect(()=>{
        if(count === 5){
            setTheme({
                bg: "black",
                col: "white"
            })
        }
    }, [count]) //componentDidUpdate





    // let count = 0;
    const handleIncrease = () => {
        // count + 1;
        setCount(count + 1)
    } 
    const handleDecrease = () => {
        // count - 1;
        setCount(count - 1)
    } 
console.log(count);
  return (
    <div style={{backgroundColor: theme.bg, color: theme.col}}>
        <h1>My Hook Component</h1>
        <div className="">
            <button className='btn btn-outline-danger' onClick={handleDecrease}>-</button>
            <span className='mx-4 fw-bold'>{count}</span>
            <button  className='btn btn-outline-success' onClick={handleIncrease}>+</button>


            <p>{theme.col}</p>
            <div className="">
                <button className='btn btn-danger me-4' onClick={()=>setTheme({
                    bg: "red",
                    col: "white"
                })}>Red</button>
                <button className='btn btn-primary' onClick={()=>setTheme({
                    bg: "blue",
                    col: "yellow"
                })}>Blue</button>
            </div>


        </div>
    </div>
  )
}
export default MyHook
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const buttons=[{
        id:1,
        name:'Antiques'
},
    {
        id: 2,
        name: 'Furniture'
    },
    {
        id: 3,
        name: 'Clothes'
    },
    {
        id: 4,
        name: 'Accessories'
    },

]


const Testing = () => {

    
    const[count,setCount]=useState(0);

    const[selectedButtons,setselectedButtons]=useState([]);
    const[disableButtons,setdisableButtons]=useState(false);
    const handleButtonClick=(button)=>{
      setselectedButtons((prevState)=>{
        const button_exist=prevState.includes(button);
            if (!button_exist) {
                setCount(count + 1);
                return [...prevState, button]
            }
        else{
            setCount(count-1);
            return prevState.filter((btn)=>btn.id !== button.id);
        }
      })
    }

    useEffect(()=>{
       console.log(selectedButtons);
    },[selectedButtons])

    useEffect(()=>{
        if(count>=3){
            console.log('yeah exist');
         setdisableButtons(true);
        }
        else{
            setdisableButtons(false);
        }
    },[count])


    return (
         <>
        <Grid container  >
        {buttons.map((button)=>{
            return(
               <Grid item  lg={3} key={button.id} >
                <Button disabled={!selectedButtons.includes(button) && disableButtons===true ? true : false } sx={{background:selectedButtons.includes(button)? 'red' : 'green'}} variant='contained' color='primary' onClick={()=>handleButtonClick(button)} > {button.name} </Button>
                </Grid>
            )
        })}
        </Grid>
  
        </> 
    
    );
}
 
export default Testing;
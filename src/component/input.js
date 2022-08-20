import React from "react";
import {useState} from 'react';

function app (){

    const [name,setName]=useState();
    const [Number,setNumber]=useState();
   return(
    <div>
      <form action="">
        Enter Name:
        <input type="text" placeholder="enter name" /><br />
        Enter Number:
        <input type="text" placeholder="Number" /><br />
        <button type="submit">submit</button>
      </form>
    </div>
   )
}
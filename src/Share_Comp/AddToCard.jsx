import React from 'react';

const AddToCard = () => {
    handleAddingProdut = (data)=>{
       console.log(data);
        fetch("http://localhost:1010/card",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data);
        })
        .then()
    }
  return {};
};

export default AddToCard;

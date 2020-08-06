import React from 'react';

function FormField({fieldName, type, name, onChange, value}){
  if(type !== "textarea"){
    return(
      <div>
        <label>
          {fieldName}
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            />
        </label>
      </div>
    )
  }else{
    return(
     <div>
        <label>
          {fieldName}
          <textarea
            name={name}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    )  
  }
}

export default FormField;
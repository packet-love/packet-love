import {Input} from "antd";
import React from "react";


interface TextFormProps {
  placeholder: string,
  onChange: (str: string) => void,
  addOnBefore?: undefined | null | string,
  disabled?: boolean | null
}

const TextForm: React.FC<TextFormProps> = ({placeholder, onChange, addOnBefore = null, disabled = null}) => {


  return (
    <div style={{padding: '0 15px', marginTop: '10px'}}>
      {
        disabled ?
          <Input
            disabled={true}
            addonBefore={addOnBefore != null ? <div style={{width: '40px'}}>{addOnBefore}</div> : ''}
            size={"large"}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
          />
          :
          <Input
            addonBefore={addOnBefore != null ? <div style={{width: '40px'}}>{addOnBefore}</div> : ''}
            size={"large"}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
          />
      }
    </div>
  )
};


export default TextForm;
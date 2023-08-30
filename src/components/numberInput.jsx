import './numberInput.css'

function InputNumber(props) {



    return (
        <div>
            <p className='initialName' style={ {color:`${props.errorColor}`}}>{props.name}</p>
            <input style={{borderColor: `${props.errorColor}`}} className='inputBox' type='number' value={props.data} placeholder={props.placeName} onChange={(e) => {props.att(e.target.value)}}/>
            {props.erro && <p className='errorText'>{props.error}</p>}
        </div>
    )
}

export default InputNumber
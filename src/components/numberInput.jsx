import './numberInput.css'

function InputNumber(props) {


    return (
        <div>
            <p className='initialName'>{props.name}</p>
            <input className='inputBox' type='number' placeholder={props.placeName}/>
            {props.erro && <p className='errorText'>{props.error}</p>}
        </div>
    )
}

export default InputNumber
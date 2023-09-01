import './numberInput.css'

function InputNumber(props) {

    return (
        <div>
            <p className={`initialName ${props.erro ? 'errorTextRed': ''}`} >{props.name}</p>
            <input className={`inputBox ${props.erro ? 'inputError': ''}`} type='number' value={props.data} placeholder={props.placeName} onChange={(e) => {props.att(e.target.value)}}/>
            {props.erro && <p className='errorText'>{props.error}</p>}
        </div>
    )
}

export default InputNumber
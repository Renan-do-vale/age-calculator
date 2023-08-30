import './resultText.css'

function Result(props) {


    return (
        <div className='containResult'>
            <p>{props.result}</p>
            <p>{props.text}</p>
        </div>
    )
}

export default Result
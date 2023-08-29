import './main.css'
import InputNumber from './numberInput'
import Arrow from './arrowCircle'
import Result from './resultText'

function Main(props) {
    return <div className="main">
        <div className="header">
            <InputNumber name={'DAY'} placeName={"DD"} error={'Must be a valid day'} erro={false}/>
            <InputNumber name={'MONTH'} placeName={"MM"} error={'Must be a valid month'} erro={false}/>
            <InputNumber name={'YEAR'} placeName={"YYYY"} error={'Must be in the past'} erro={false}/>
        </div>
        <div className='containerArrow'>
            <hr />
            <Arrow/>
        </div>
        <article>
            <Result text={'year'} result={'--'}/>
            <Result text={'months'} result={'--'}/>
            <Result text={'days'} result={'--'}/>
        </article>
    </div>
}

export default Main

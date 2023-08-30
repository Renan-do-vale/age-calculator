import './main.css'
import InputNumber from './numberInput'
import Arrow from './arrowCircle'
import Result from './resultText'
import { useState } from 'react'



function Main(props) {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const [day, setDay ] = useState('')
    const [month, setMonth ] = useState('')
    const [year, setYear ] = useState('')


    const [dayLabel, setDayLabel ] = useState('--')
    const [monthLabel, setMonthLabel ] = useState('--')
    const [yearLabel, setYearLabel ] = useState('--')
    
    const [ErroDay, setErrorDay ] = useState(false)
    const [ErrorMonth, setErrorMonth ] = useState(false)
    const [ErrorYear, setErrorYear ] = useState(false)

    const [erroColor, setErrorColor ] = useState('')

    function dayCalc() {
        // fix erro late
        let calc = currentDay - day
        return calc
    }

    function monthCalc() {
        if(currentMonth > month) {
            return currentMonth - month
        }else {
            let result =  (currentMonth - month) + parseInt(month)
            return result
        }


    }

    function ageCalc() {
        if(currentMonth > month) {
            return currentYear - year
        } else {
            return (currentYear - year) -1
        }
    }


    function submit() {

        if(day > 31 || day <= 0 || day === '--') {
            setErrorDay(true)
            setErrorColor('hsl(0, 100%, 67%)')
        }else {
            setErrorDay(false)
            setErrorColor('')
            setDayLabel(dayCalc())


        }

        if(month > 12 || month <= 0 || month === '--') {
            setErrorMonth(true)
            setErrorColor('hsl(0, 100%, 67%)')
        }else {
            setErrorMonth(false)
            setErrorColor('')
            setMonthLabel(monthCalc())
        }

        if(year > 2023 || year <= 0 || year === '--') {
            setErrorYear(true)
            setErrorColor('hsl(0, 100%, 67%)')
        }else {
            setErrorYear(false)
            setErrorColor('')
            setYearLabel(ageCalc())
        }

    }



    return <div className="main">
        <div className="header">
            <InputNumber name={'DAY'} placeName={"DD"} error={'Must be a valid day'} erro={ErroDay}  data={day} att={setDay} errorColor={erroColor}/>
            <InputNumber name={'MONTH'} placeName={"MM"} error={'Must be a valid month'} erro={ErrorMonth} data={month} att={setMonth} errorColor={erroColor}/>
            <InputNumber name={'YEAR'} placeName={"YYYY"} error={'Must be in the past'} erro={ErrorYear} data={year} att={setYear} errorColor={erroColor}/>
        </div>
        <div className='containerArrow'>
            <hr />
            <Arrow onClick={submit}/>
        </div>
        <article>
            <Result text={'year'} result={yearLabel}/>
            <Result text={'months'} result={monthLabel}/>
            <Result text={'days'} result={dayLabel}/>
        </article>
    </div>
}

export default Main

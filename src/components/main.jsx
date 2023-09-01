import './main.css'
import InputNumber from './numberInput'
import Arrow from './arrowCircle'
import Result from './resultText'
import { useState } from 'react'



function Main(props) {

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')


    const [dayLabel, setDayLabel] = useState('--')
    const [monthLabel, setMonthLabel] = useState('--')
    const [yearLabel, setYearLabel] = useState('--')

    const [ErrorDay, setErrorDay] = useState(false)
    const [ErrorMonth, setErrorMonth] = useState(false)
    const [ErrorYear, setErrorYear] = useState(false)

    function bissexto() {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return true
        } else {
            return false
        }
    }

    function validateDate() {
        console.log(currentYear+' '+year)
        console.log(month+' '+currentMonth)
        if (day < 1 || day > 31 || day === '') {
            setErrorDay(true)
        } else if (day === '31' && (month === '4' || month === '6' || month === '9' || month === '11')) {
            setErrorDay(true)
        } else if (month === '2' && day > 29) {
            setErrorDay(true)
        } else if (month === '2' && day === '29' && bissexto() === false) {
            setErrorDay(true)
        } else {
            setErrorDay(false)
        }
        if (month < 1 || month > 12 || month === '' || (month > currentMonth && year === currentYear )) {
            setErrorMonth(true)
        } else {
            setErrorMonth(false)
        }
        if (year < 1 || year > currentYear || year === '') {
            setErrorYear(true)
            return false
        } else {
            setErrorYear(false)
        }
        return true
    }

    function daysOfMonth(m) {
        m = parseInt(m)
        if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
            return 31
        } else if (m === 4 || m === 6 || m === 9 || m === 11) {
            return 30
        } else if (bissexto() === true) {
            return 29
        } else {
            return 28
        }
    }

    function calcAge() {
        let amountDay = 0
        let amountMonth = 0
        let amountYear = 0

        let copyDay = parseInt(day)
        let copyMonth = parseInt(month)
        let copyYear = parseInt(year)
        if (copyMonth > 12) {
            return
        }
        while (copyMonth < currentMonth - 1 || copyYear < currentYear) {
            copyMonth += 1
            amountMonth += 1
            if (amountMonth === 12) {
                amountMonth = 0
                amountYear += 1
            }
            if (copyMonth > 12) {
                copyYear += 1
                copyMonth = 1
            }
        }
        if (copyDay === currentDay) {
            amountMonth += 1
            amountDay = 0
        } else if (copyDay < currentDay) {
            amountMonth += 1
            amountDay = currentDay - copyDay
        } else {
            amountDay = daysOfMonth(currentMonth) + currentDay - copyDay
        }
        setDayLabel(amountDay)
        setMonthLabel(amountMonth)
        setYearLabel(amountYear)
    }

    function submit() {
        if (validateDate() === true) {
            calcAge()
        }
    }



    return <div className="main">
        <div className="header">
            <InputNumber name={'DAY'} placeName={"DD"} error={'Must be a valid day'} erro={ErrorDay} data={day} att={setDay} />
            <InputNumber name={'MONTH'} placeName={"MM"} error={'Must be a valid month'} erro={ErrorMonth} data={month} att={setMonth} />
            <InputNumber name={'YEAR'} placeName={"YYYY"} error={'Must be in the past'} erro={ErrorYear} data={year} att={setYear} />
        </div>
        <div className='containerArrow'>
            <hr />
            <Arrow onClick={submit} />
        </div>
        <article>
            <Result text={'year'} result={yearLabel} />
            <Result text={'months'} result={monthLabel} />
            <Result text={'days'} result={dayLabel} />
        </article>
    </div>
}

export default Main

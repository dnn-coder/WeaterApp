import { useEffect, useState } from 'react'

const Clock = () => {
    const [date, setDate] = useState("");

    useEffect(()=> {
        setInterval(()=> {
            setDate(new Date().toLocaleString())
        },1000)
        },[date])

    return <div className="clock">
        <p >Clock:</p>
        <p className="text-small margin-top clock"> {date}</p>
    </div>
}

export default Clock;
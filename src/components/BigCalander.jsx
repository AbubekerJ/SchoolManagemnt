'use client'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

const BigCalander = () => {
    const localizer = momentLocalizer(moment)
    const [view , setView]=useState(Views.WORK_WEEK)
    const handleSelectedView=(selctedView)=>{
        setView(selctedView)
    }
  return (
   
    <Calendar
    localizer={localizer}
    events={calendarEvents}
    startAccessor="start"
    endAccessor="end"
    views={['work_week',"day"]}
    view= {view}
    style={{ height: '90%'}}
    onView={handleSelectedView}
    min={new Date(2026 ,5,6,8,0,0)}
    max={new Date(2026 ,5,6,17,0,0)}
  />
  
   
  )
}

export default BigCalander

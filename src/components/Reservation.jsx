import React, { useState } from "react";
//import data
import { reservationData } from "../data";
//import variants
import { fadeIn, staggerContainer } from "../variants";
//import motion
import { motion } from "framer-motion";
//import datepicker
import DatePicker from 'react-datepicker';
//import datepickerss
import 'react-datepicker/dist/react-datepicker.css';
//import timepicker
import TimePicker from 'react-time-picker';
//import time picker css
import '../timepicker.css';
//import icons
import {FaUsers, FaCalendar, FaClock} from 'react-icons/fa'

const Reservation = () => {
  //desestructure reservation data
  const {title, subtitle, modelImg, btnText} = reservationData;
  //date state
  const [startDate, setStartDate] = useState(new Date());
  //clock state
  const [value, setValue] = useState('10:00')
  return (
    <section className="relative top-96 z-30 lb-20 lg:py-[100px]" id="reservar_mesa">
       <div className="container mx-auto">
      <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} className="text-center">
        <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1.6)} className="h2 capitalize">{title}</motion.h2>
        <motion.p variants={fadeIn('up', 'tween', 0.4, 1.6)} className="mb-8 text-dark">{subtitle}</motion.p>
        <motion.div variants={fadeIn('up', 'tween', 0.6, 1.6)} className="flex justify-center mb-8">
          <img src={modelImg} alt="" />
        </motion.div>
      </motion.div>
      <motion.form variants={fadeIn('up', 'tween', 0.8, 1.6)} initial='hidden' whileInView={'show'}>
        <div className="flex flex-col lg:flex-row gap-y-4 items-center justify-between mb-8">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
              <FaCalendar />
              <div>Escolha a data</div>
            </div>
            <DatePicker className="input" selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
              <FaClock />
              <div>Escolha o Horário</div>
            </div>
            <input className="input" type="time" placeholder="Horário"  />
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-center gap-x-[10px] font-semibold text-dark text-base mb-3">
              <FaUsers />
              <div>Quantas pessoas?</div>
            </div>
            <input className="input" type="text" placeholder="1" />
          </div>

        </div>
        
        <div className="max-w-[316px] mx-auto flex justify-center">
          <button className="btn capitalize w-full lg:w-auto">{btnText}</button>
        </div>
      </motion.form>
    </div>
        
        
    </section>
  )
}

export default Reservation

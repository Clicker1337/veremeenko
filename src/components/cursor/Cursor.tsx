import React from 'react'
import {useEffect, useState} from 'react';
import { motion } from "framer-motion"
import s from './Cursor.module.scss'

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x -250,
            y: mousePosition.y -250
        }
    }

  return (
    <motion.div
            className={s.cursor}
            variants={variants}
            animate="default"
            />
  )
}

export default Cursor
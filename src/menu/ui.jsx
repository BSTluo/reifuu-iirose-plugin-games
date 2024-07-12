import style from './style.css'
import { render, h } from 'preact'
import { useState } from 'preact/hooks'
import partingLine from '../element/partingLine.jsx'

const Menu = () => {
  return (
    <div class={style.menu}>
      <div class={style.view}>
        <div class={style.logo}></div>
        <div class={style.title}>
          <partingLine />
        </div>
      </div>
    </div>
  )
}
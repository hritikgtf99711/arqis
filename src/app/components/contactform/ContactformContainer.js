import React from 'react'
import ScrollLayout from '@/app/utils/ScrollLayout'
import Form from './Form'
import Contact from './Contact'
export default function ContactformContainer() {
  return (
    <ScrollLayout rightContent={<Form/>} leftContent={<Contact/>} isShowDrag={true}/>
  )
}

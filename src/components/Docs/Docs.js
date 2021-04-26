import React from 'react'
import './index.css'
import { useSelector } from 'react-redux'
import InputFile from './InputFile'
import MyDocuments from './MyDocuments'
import ListDocs from './ListDocs'
import excelfile from './excelDocs/new.xlsx'


export default function Docs() {
  const docsList = useSelector((state) => state.docs.getDocsList)
  const data = {template: "Шаблоны для маркировки товаров", excel: excelfile}
  return (
    <div className='table-container'>
      <InputFile />
      <ListDocs data={data}/>
      <MyDocuments docsList={docsList} />
    </div>
  )
}

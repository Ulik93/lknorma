import React from 'react'
import { useSelector } from 'react-redux'
import InputFile from '../../Docs/InputFile'
import ListDocs from '../../Docs/ListDocs'
import MyDocuments from '../../Docs/MyDocuments'
import excelfile from '../../Docs/excelDocs/new.xlsx'


export default function Tobacco() {
  const docsList = useSelector((state) => state.docs.getDocsList)
  const data = {template: "Шаблоны для табака", excel: excelfile}
  return (
    <div className='table-container'>
      <InputFile />
      <ListDocs data={data}/>
      <MyDocuments docsList={docsList} />
    </div>
  )
}

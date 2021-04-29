import React from 'react'
import { useSelector } from 'react-redux'
import InputFile from '../../Docs/InputFile'
import ListDocs from '../../Docs/ListDocs'
import MyDocuments from '../../Docs/MyDocuments'
import excelfile from '../../Docs/excelDocs/new.xlsx'


export default function Perfume() {
  const docsList = useSelector((state) => state.docs.getDocsList)
  const data = {template: "Шаблоны для парфюма", excel: excelfile, fileName: "Шаблон для парфюма"}
  return (
    <div className='table-container'>
      <InputFile />
      <ListDocs data={data}/>
      <MyDocuments docsList={docsList} />
    </div>
  )
}

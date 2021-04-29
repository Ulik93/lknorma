import React from "react"
import { CardMedia } from "@material-ui/core"
import ExcelIcon from "../../../redux/uils/icons/iconfinder_excel_272697.png"
import x from "./Message.module.css"
import {
  getExcelFileTable,
  sendExcelFileTable,
  getFileInfo,
} from "../../../redux/actions/DocumentsActions/document"
import { useDispatch } from "react-redux"
import { logout } from "../../../redux/actions/getAndLogin"
import { NavLink } from "react-router-dom"

export default function Message({ docsList }) {
  let dispatch = useDispatch()

  const handleSendExcelFile = (id, is_order) => {
    dispatch(sendExcelFileTable(id, is_order))
  }
  const handleGetTable = (id) => {
    dispatch(getExcelFileTable(id))
  }
  const handleGetInfo = (id) => {
    dispatch(getFileInfo(id))
  }

  return (
    <div>
      <button className={x.btn}>
        <div onClick={() => dispatch(logout())} className="logout">
          <i className="fas fa-door-open" /> Выйти
        </div>
      </button>

      <div className={x.flex}>
        <div className={x.flex1}>FILE</div>
        <div className={x.flex1}>NAME</div>
      </div>

      {(docsList || []).map((excel) => (
        <div className={x.flex} key={excel.id}>
          <div className={x.flex1}>
            <CardMedia className={x.card_size} type="file" image={ExcelIcon} />

            <NavLink to={`/docs/my_doc/${excel.id}`}>
              <button onClick={() => handleGetTable(excel.id)}>open</button>
            </NavLink>
            <button
              className="card-footer"
              onClick={() => handleSendExcelFile(excel.id, false)}
            >
              Delete
            </button>
            <br />
            <button>
              <a href={`${excel.excel_file}`} download>
                Скачать
              </a>
            </button>
          </div>
          <div className={x.flex1}>
            <div>{excel.file_name}</div>
            <button
              onClick={() => handleGetInfo(excel.user)}
              className="btn btn-info"
            >
              info
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

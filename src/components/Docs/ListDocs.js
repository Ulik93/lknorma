import React from "react"
import { CardMedia, Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import "./index.css"
import ExcelIcon from "../../redux/uils/icons/iconfinder_excel_272697.png"

export default function ListDocs(props) {
  const docsList = [{name: props.data.fileName, file: props.data.excel}, 
                    {name: props.data.fileName, file: props.data.excel},
                    {name: props.data.fileName, file: props.data.excel},
                    {name: props.data.fileName, file: props.data.excel},]
  return (
    <div className="container">
      <Typography variant="h5" component="h6">
        {props.data.template}
      </Typography>

      <Grid container direction="row" justify="flex-start" alignItems="center">
        {docsList.map((excel, id) => {
          return (
            <div key={id} className="card-file">
                <div className="card-header">{excel.name}</div>
                    <CardMedia
                      className="icon-card"
                      type="file"
                      image={ExcelIcon}
                      // onChange={{ pathname: `/docs/${excel.id}`, state: { excel }}}
                      />
                    <h5 className="card-footer">
                    <a href={excel.file} download>
                        Скачать
                    </a>
                    </h5>
            </div>
          )
        })}
      </Grid>
    </div>
  )
}

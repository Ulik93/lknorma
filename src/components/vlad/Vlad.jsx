import React from "react"
import Footer from "../Footer/footer"
import Header from "../Header/Header"
import { useSelector } from "react-redux"
import Message from "./messages/Message"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import TableDoc from "../Docs/TableDoc"
import UpdateProfile from "../Profile/UpdateProfile"

export default function Vlad() {
  const userData = useSelector((state) => state.data.userData)
  const docsList = useSelector((state) => state.docs.getTemplateExcelVlad)
  const successUpdate = useSelector((state) => state.data.updateProfile.success)

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/vlad">
            <Header userData={userData} />
            <Message docsList={docsList} />
            <Footer />
          </Route>
          {!successUpdate && (
            <Route path="/main/update-profile" component={UpdateProfile} />
          )}
          <Route path="/docs/my_doc/:id" component={TableDoc} />
          <Redirect to="/vlad" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

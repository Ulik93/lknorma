import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/Header'
import ContactInfo from '../ContactInfo/ContactInfo'
import { useSelector } from 'react-redux';
import Message from './messages/Message';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import TableDoc from '../Docs/TableDoc';

export default function Vlad() {
    const userData = useSelector((state) => state.data.userData)
    const docsList = useSelector((state) => state.docs.getTemplateExcelVlad)
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/vlad">
                        <Header userData={userData}/>
                        <Message docsList={docsList}/>
                        <Footer/>
                    </Route>
                    <Route path="/docs/my_doc/:id" component={TableDoc} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
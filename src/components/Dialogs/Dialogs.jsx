import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as axios from "axios";

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} key = {d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key = {m.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let api = new WooCommerceRestApi({
        url: "https://fixrolls.ru",
        consumerKey: "ck_682e8df99b3b8c0906b5252521bfc762066a87cf",
        consumerSecret: "cs_5fa872dda649995e52655bd445c517f3ac0e59e3",
        version: "wc/v3"
    });

    let apiAction = () => {
        api.get("products", {
            per_page: 20, // 20 products per page
        }).then((response) => {
            console.log(response)
    })
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                    <div><button onClick={apiAction}>WP BUTTON</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
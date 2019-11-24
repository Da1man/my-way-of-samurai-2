import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>ID: {props.profile.userId}</div>
                <div>Имя: {props.profile.fullName}</div>
                <br/>
                <div>О себе: {props.profile.aboutMe}</div>
                <div>Контакты:</div>
                <div>
                    {props.profile.contacts.twitter ? <div>FB: {props.profile.contacts.facebook}</div> : <div></div> }
                    {props.profile.contacts.twitter ? <div>VK: {props.profile.contacts.vk}</div> : <div></div> }
                    {props.profile.contacts.twitter ? <div>Твиттер: {props.profile.contacts.twitter}</div> : <div></div> }
                    {props.profile.contacts.instagram ? <div>Инстаграм: {props.profile.contacts.instagram}</div> : <div></div> }
                    {props.profile.contacts.youtube ? <div>YouTube: {props.profile.contacts.youtube}</div> : <div></div> }
                    {props.profile.contacts.github ? <div>GIT: {props.profile.contacts.github}</div> : <div></div> }
                    {props.profile.contacts.website ? <div>Сайт: {props.profile.contacts.website}</div> : <div></div> }
                </div>
                <br/>
                <div>Дополнительная информация:</div>
                {props.profile.lookingForAJob ? <div>ИЩУ РАБОТУ</div> : <div>НЕ ИЩУ РАБОТУ</div> }
                {props.profile.lookingForAJobDescription != null ? <div>Комментарий: {props.profile.lookingForAJobDescription}</div>: <div>Комментария нет</div> }
            </div>
        </div>
    )
}

export default ProfileInfo;
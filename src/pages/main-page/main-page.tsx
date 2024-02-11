import React from "react";

import LayoutS from "@components/layout";
import {Card, Col, Row} from 'antd';
import {
    AndroidFilled,
    AppleFilled,
    CalendarOutlined,
    HeartFilled,
    ProfileOutlined
} from "@ant-design/icons";

import './main-page.css';
import {typeCardLink} from "../../TStypes";


const smallCardLink: typeCardLink[] = [
    {
        title:'Расписать тренировки',
        icon: <HeartFilled /> ,
        text:'Тренировки'
    },
    {
        title:'Назначить календарь',
        icon: <CalendarOutlined/>  ,
        text:'Календарь'
    },
    {
        title:'Заполнить профиль',
        icon: <ProfileOutlined/> ,
        text:'Профиль'
    },
]

export const MainPage: React.FC = () => {

    return <LayoutS className={' '}>
        <div className={'main-screen'}>
                <Card className={'car-description'}>
                    <p className={'card-title'}>CleverFit ты сможешь:</p>
                    <ul className={'card-container'}   >
                        <li className={'card-item'}>планировать свои тренировки на календаре, выбирая
                            тип и уровень нагрузки;
                        </li>
                        <li className={'card-item'}>отслеживать свои достижения в разделе статистики,
                            сравнивая свои результаты с нормами и рекордами;
                        </li>
                        <li className={'card-item'}>создавать свой профиль, где ты можешь загружать свои
                            фото, видео и отзывы о тренировках;
                        </li>
                        <li className={'card-item'}> выполнять расписанные тренировки для разных частей
                            тела, следуя подробным инструкциям и советам профессиональных тренеров.
                        </li>
                    </ul>
                </Card>
                <Card>
                    <p className={'card-text'}>CleverFit — это не просто приложение, а твой личный
                        помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже
                        сегодня!</p>
                </Card>
               <div className="site-card-wrapper ">
                   <Row  gutter={16}   justify={''} className={'small-card-container'}>
                       {
                           smallCardLink.map((card:typeCardLink,i:number) => {
                         return <Col key={i}>
                                   <Card className={'small-card'} title={card.title} bordered={false} >
                                       {card.icon} {card.text}
                                   </Card>
                            </Col>
                           })
                       }
                   </Row>
               </div>
            <div className={'main-footer'}>
                <p className={'footer-link'}>Смотреть отзывы</p>
                <Card className={'footer-card'} title="Скачать на телефон" bordered={false}>
                   <p className={'footer-note'}>Доступно в PRO-тарифе</p>
                    <p className={'footer-ios'}><p><AndroidFilled />Android OS</p><p><AppleFilled />Apple IOS</p></p>
                </Card>
            </div>
        </div>
    </LayoutS>;
};


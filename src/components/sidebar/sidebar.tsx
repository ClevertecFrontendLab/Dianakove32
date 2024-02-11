import React from "react";
import {useResize} from "@hooks/useResize";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CalendarOutlined,
    HeartFilled,
    TrophyFilled,
    ProfileOutlined,
} from '@ant-design/icons';
import {Layout, Menu, Image, Button} from 'antd';

import fullLogo from '/src/images/Logo.svg'
import smallLogo from '/src/images/Logo.png'

import './index.css'

const { Sider  } = Layout;

const  Sidebar: React.FC = ({collapsed, setCollapsed}) =>{
    const {width} = useResize()
    return (<>
        <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
                <Image
                    preview={false}
                    src={collapsed ? smallLogo : fullLogo}
                />
            </div>
            <Menu
                className="side-bar"
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <CalendarOutlined/>,
                        label: 'Календарь',
                    },
                    {
                        key: '2',
                        icon: <HeartFilled/>,
                        label: 'Тренировки',
                    },
                    {
                        key: '3',
                        icon: <TrophyFilled/>,
                        label: 'Достижения',
                    },
                    {
                        key: '4',
                        icon: <ProfileOutlined/>,
                        label: 'Профиль',
                    },
                ]}
            />
            <div>
                <Button type="text" className={'button-exit'}>
                    <Image
                        preview={false}
                        src={'/src/images/Exit.svg'}
                    /> {collapsed ? '' : 'Выход'}</Button>
            </div>
            <div className={'shape'} onClick={() => setCollapsed(!collapsed)}><span data-test-id={width < 570  ? 'sider-switch-mobile' : 'sider-switch'} className={'trigger'}>{collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} </span> </div>
        </Sider>
        </>
    )
}

export default Sidebar

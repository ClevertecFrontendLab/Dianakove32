import React, {useState} from "react";
import {useResize} from "@hooks/useResize";

import Sidebar from "@components/sidebar";

import {  SettingOutlined,
} from '@ant-design/icons';
import {Layout, Button} from 'antd';

import 'antd/dist/antd.css';
import './index.css'

const { Header, Content } = Layout;

const LayoutS: React.FC = ({ children })  => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {width, isScreenSm, isScreenXl} = useResize()

    return (
        <Layout>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Layout className="site-layout">
                <Header className="site-layout-background"  >
                    <span className={'header-page'}>Главная</span>
                    <div className={'header-content'}>
                        <h1>Приветствуем тебя в CleverFit - приложении, которое поможет тебе добиться своей мечты!</h1>
                        {isScreenXl && <Button type="text" icon={<SettingOutlined/>}> Настройки</Button>}
                        {width < 1000 && isScreenSm && <Button type="text" > Настройки</Button>}
                        {width < 570 && <Button className={'btn-setting'} shape="circle" icon={<SettingOutlined />} />}
                    </div>
                </Header>
                <Content
                    className="site-layout-background content"
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default LayoutS

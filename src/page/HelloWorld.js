import { Card,Tag } from 'antd';

export default () => {
    const style = {
        width:'400px',
        margin:'30px auto',
        boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
        border:'1px solid #e8e8e8',
    }
    return (
        <Card style={style} actions={[<a>操作一</a>,<a>操作二</a>,<a>操作三</a>]}>
            <Card.Meta 
               avatar={<img 
                  alt=""
                  style={{width:'64px',height:'64px',borderRadius:'32px'}}
                  src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
               />}
                title = "Alipay"
                description="在中台产品的研发过程中，会呈现出不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
            />
            <div style={{margin:'20px 0 0 60px'}}>
                <Tag visible="true" color="yellow">逛街</Tag>
                <Tag visible="true" color="red">美食</Tag>
                <Tag visible="true" color="blue">娱乐</Tag>
                <Tag visible="true" color="green">旅游</Tag>
                <Tag visible="true" color="gray">运动</Tag>
                <Tag visible="true" color="yellow">美女</Tag>
            </div>
        </Card>
    )
}
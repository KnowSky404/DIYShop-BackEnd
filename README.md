# DIYShop-BackEnd

DIYShop's BackEnd

## 当前的想法

根据用户的当前IP来返回一个较为粗糙的地址

### 数据库架构

#### 店铺信息

心情妙妙屋, 天气洲管所, 文具物语店, 节假日旗舰店, 旅游魔法屋

#### 商品目录

心情, 天气, 文具, 节假日, 旅游

```javascript
let obj = {
    shop: {
        name,
        des,
        img
        rate,//好评率
    },
    product: {
        name,
        des,
        img,
        price,
        rate
    }

}
```

#### 用户信息

账号,密码,积分,订单记录,注册时间,最后登录时间,头像, IP地址,昵称

```javascript
let user = {
    user,
    passwd,
    name,
    img,
    ip_signin,
    ip_current,
    ip_last,
    order,
    points
}
```

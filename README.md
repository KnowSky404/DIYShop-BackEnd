# DIYShop-BackEnd

这是项目[DIYShop](https://github.com/LittleControl/DIYShop)的后端程序,主要提供API接口和身份认证服务

## 环境要求

- Node.js
- MongoDB

## 启动前准备

- 首先在MongoDB中创建一个数据库,设置到端口号,然后修改[cconfig.default.js](https://github.com/LittleControl/DIYShop-BackEnd/blob/master/config/config.default.js)中的`client`中的`url`为你创建的数据库地址
- 在新建的数据库中创建四个Collecton,名称分别为`shoplists`, `users`, `banners`, `shopinfos`
- 将[data](https://github.com/LittleControl/DIYShop-BackEnd/tree/master/data)中的文件对应名称分别导入到Collection中.(如果不懂命令行操作,推荐使用MongoDB Compass)

## 启动项目

- `yarn install`
- `npm run dev` or `yarn run dev`
- 访问<http:127.0.0.1:7001>,出现`Hello, home index`即启动成功

## API信息

以下请求地址均省略`http:127.0.0.1:7001/`字段

### 根据IP地址获取地理位置

- 请求方式: `GET`
- 请求地址: `/ip`
- 返回信息示例

```JSON
{
    "status": 0,
    "message": "query ok",
    "result": {
        "ip": "2409:8a04:131e:24f0:4984:f25e:e24d:544f",
        "location": {
            "lat": 38.03599,
            "lng": 114.46979
        },
        "ad_info": {
            "nation": "中国",
            "province": "河北省",
            "city": "",
            "district": "",
            "adcode": 130000
        }
    }
}
```

### 获取首页轮播图的地址

- 请求方式: `GET`
- 请求地址: `/banners`
- 返回信息示例

```JSON
[
    {
        "_id": "5ea6e2b2a23b0526bc9f3764",
        "url": "https://s1.ax1x.com/2020/04/22/JNFSKS.md.jpg",
        "target": ""
    },
    {
        "_id": "5ea6e2dda23b0526bc9f3765",
        "url": "https://s1.ax1x.com/2020/04/22/JNivgf.md.jpg",
        "target": ""
    },
    {
        "_id": "5ea6e2fca23b0526bc9f3766",
        "url": "https://s1.ax1x.com/2020/04/22/JNij8P.md.jpg",
        "target": ""
    }
]
```

### 获取商家列表

- 请求方式: `get`
- 请求地址: `/shoplist`
- 返回信息示例

```JSON
[
    {
        "support": {
            "quickShip": true,
            "noReason": true,
            "isGirl": true
        },
        "_id": "5ea92650e7763d18ac4271f3",
        "img": "https://s1.ax1x.com/2020/04/29/JTRf3Q.jpg",
        "name": "心情妙妙屋",
        "rating": 5,
        "medal": true,
        "count": 233
    },
    {
        "support": {
            "quickShip": true,
            "noReason": true,
            "isGirl": true
        },
        "_id": "5ecaf2da0eb3b3e533542b6d",
        "img": "https://s1.ax1x.com/2020/05/25/tpQcCt.jpg",
        "name": "小天气会所",
        "rating": 5,
        "medal": true,
        "count": 404
    }
]
```

### 获取用户信息(登录)

- 请求方式: `POST`
- 请求地址: `/user`
- 请求参数: `{email, password}`
- 返回信息示例(一般email和password都用base64加密了,这里方便查看,用的原数据)

```JSON
{
    "resCode": 200,
    "msg": "Okay",
    "userInfo": {
        "_id": "5f0a4e4f1ed09301586a5c72",
        "email": "littlecontrol2019@gmail.com",
        "password": "@LittleControl",
        "name": "LittleControl",
        "bio": "NothingToDo",
        "__v": 0
    }
}
```

### 用户注册

- 请求方式: `POST`
- 请求地址: `/signup`
- 请求参数: `{email, password, name(可选), bio(可选)}`
- 返回信息示例

```JSON
{
    "resCode": 200,
    "msg": "Signup Succeed!"
}
```

### 获取店铺具体信息

- 请求方式: `POST`
- 请求地址: `/shopinfo`
- 请求参数: `{id}`
- 返回信息示例

```JSON
{
    "goods": [
        {
            "name": "折扣",
            "icon": "https://s1.ax1x.com/2020/07/06/UCSFjs.png",
            "foods": [
                {
                    "count": 0,
                    "name": "我恋爱了呀",
                    "price": 20,
                    "oldPrice": "18",
                    "description": "Nothing To Do But Love",
                    "sellCount": 43,
                    "rating": 92,
                    "info": "Cool, You are the best!",
                    "ratings": [
                        {
                            "username": "3******c",
                            "rateTime": 1469281964000,
                            "rateType": 0,
                            "text": "Nothing",
                            "avatar": "https://s1.ax1x.com/2020/07/01/N7iPqs.jpg"
                        }
                    ],
                    "icon": "https://s1.ax1x.com/2020/07/01/NTzheP.jpg",
                    "image": "https://s1.ax1x.com/2020/07/01/NTzRsI.jpg"
                }
            ]
        }
    ],
    "_id": "5ea92650e7763d18ac4271f3",
    "info": {
        "name": "心情妙妙屋",
        "description": "Geek速运",
        "deliveryTime": 28,
        "score": 4.2,
        "serviceScore": 4.1,
        "foodScore": 4.3,
        "rankRate": 69.2,
        "minPrice": 20,
        "deliveryPrice": 4,
        "ratingCount": 24,
        "sellCount": 90,
        "distance": "1000m",
        "bulletin": "如果你见到有人没有笑，那你就给他们一个微笑",
        "supports": [
            {
                "type": 2,
                "name": "特价",
                "content": "【立减19.8】我恋爱了呀"
            }
        ],
        "avatar": "https://s1.ax1x.com/2020/04/29/JTRf3Q.jpg",
        "bgImg": "https://s1.ax1x.com/2020/07/01/NTz4df.jpg",
        "pics": [
            "https://s1.ax1x.com/2020/07/01/NTzRsI.jpg",
            "https://s1.ax1x.com/2020/07/01/NTzWLt.jpg",
            "https://s1.ax1x.com/2020/07/01/NTz2QA.png",
            "https://s1.ax1x.com/2020/07/01/NTzczd.png",
            "https://s1.ax1x.com/2020/07/01/NTzheP.jpg"
        ],
        "category": "心情, 生活",
        "phone": "17777777777",
        "address": "火星帝都商业大厦二楼777室",
        "workTime": "23:59:59-24:00:00"
    },
    "ratings": [
        {
            "username": "3******c",
            "rateTime": 1469281964000,
            "deliveryTime": 30,
            "score": 5,
            "rateType": 0,
            "text": "不错,出售的心情很好,强烈推荐老八蜜汁小憨包.",
            "avatar": "https://s1.ax1x.com/2020/07/01/N7CHA0.jpg",
            "recommend": [
                "欢天喜地",
                "心花怒放",
                "老八蜜汁小憨包"
            ]
        }
    ]
}
```

### 获取搜索结果

- 请求方式: `GET`
- 请求地址: `/search`
- 请求参数: `keyword`
- 返回信息示例

```JSON
[
    {
        "support": {
            "quickShip": true,
            "noReason": true,
            "isGirl": true
        },
        "_id": "5ea92650e7763d18ac4271f3",
        "img": "https://s1.ax1x.com/2020/04/29/JTRf3Q.jpg",
        "name": "心情妙妙屋",
        "rating": 5,
        "medal": true,
        "count": 233
    }
]
```

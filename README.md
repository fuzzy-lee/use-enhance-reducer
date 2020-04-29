# use-enhance-reducer
![GitHub stars](https://img.shields.io/github/stars/fuzzy-lee/use-enhance-reducer?style=social)![GitHub](https://img.shields.io/github/license/fuzzy-lee/use-enhance-reducer)![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@lswlishiwen/use-enhance-reducer?color=rgb%28124%2C176%2C18%29)![GitHub last commit](https://img.shields.io/github/last-commit/fuzzy-lee/use-enhance-reducer?color=RGB%28141%2C186%2C5%29)

增强react useReducer支持dispatch一个函数


### usage
`npm install --save @lswlishiwen/use-enhance-reducer`

与react的useReducer使用方法一致(将来会支持惰性初始化)，额外增加支持dispatch一个函数
```javascript
import {useEnhanceReducer} from "@lswlishiwen/use-enhance-reducer";

//此处省略reducer、initState
let [state, dispatch] = useEnhanceReducer(reducer, initState);

let funAction = (dispatch, state) => {
    setTimeout(() => {
        dispatch({type: "ADD_TYPE"});
    }, 1000)
};

dispatch(funAction)

```


### TODO 
1. 支持惰性初始化（模拟重载实现）


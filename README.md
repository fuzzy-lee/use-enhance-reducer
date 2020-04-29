# use-enhance-reducer
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


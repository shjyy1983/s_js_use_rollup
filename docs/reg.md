## Functions

<dl>
<dt><a href="#isCode">isCode()</a></dt>
<dd><p>判断是否是验证码</p>
</dd>
<dt><a href="#isEmail">isEmail()</a></dt>
<dd><p>判断是否是邮箱</p>
</dd>
<dt><a href="#isIDCard">isIDCard()</a></dt>
<dd><p>判断是否是身份证</p>
</dd>
<dt><a href="#isPhone">isPhone()</a></dt>
<dd><p>判断是否是手机号码</p>
</dd>
</dl>

<a name="isCode"></a>

## isCode()
判断是否是验证码

**Kind**: global function  
**Example**  
```js
import {isCode} from 'zrutil'
isEmail('123456') => true
```
<a name="isEmail"></a>

## isEmail()
判断是否是邮箱

**Kind**: global function  
**Example**  
```js
import {isEmail} from 'zrutil'
isEmail('xxx@qq.com') => true
```
<a name="isIDCard"></a>

## isIDCard()
判断是否是身份证

**Kind**: global function  
**Example**  
```js
import {isIDCard} from 'zrutil'
isEmail('610321198804163373') => true
```
<a name="isPhone"></a>

## isPhone()
判断是否是手机号码

**Kind**: global function  
**Example**  
```js
import {isPhone} from 'zrutil'
isPhone('13333333333') => true
```

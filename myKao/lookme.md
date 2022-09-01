

##  michaelray/console-color

```js
console.group('---------variable use color------------');

let name = 'Michael Ray';
let age    = 1000;

let obj  = {
	name : 'Michael Jackson',
	age  : '100'
};

function hello(){
	return 'hello';
}

function isBoole(){
	return true;
}

console.log(name);
console.log('Hello,My name is ' + name.green +',I am a'+' man'.yellow+'.');
console.log(age.blue);
console.log(obj.name.blue);
console.log(hello().red);
//Boolean value must change to string.
console.log(isBoole().toString().red);

console.groupEnd();
```

引入
```js
const _console = require('@michaelray/console-color');
```
使用
```js//use system console function，The system console maybe no color
console.group('-----------demo1:use system console function-----------');
_console.info('info');
_console.debug('debug');
_console.warn('warn');
_console.error('error');
_console.info('hello', 'michael', 'ray');
console.groupEnd();
```

“粗体”
“斜体”
“下划线”
“逆”
“删除线”
“白色”
“灰色”
“黑色”
“蓝色”
“青色”
“绿色”
“洋红色”
“红色”
“黄色”
“白色BG”
“灰色BG”
'黑色BG'
“蓝色BG”
“青色BG”
“绿色BG”
“洋红色BG”
“红BG”
“黄色BG”

'bold'
'italic'
'underline'
'inverse'
'strikethrough'
'white'
'grey'
'black'
'blue'
'cyan'
'green'
'magenta'
'red'
'yellow'
'whiteBG'
'greyBG'
'blackBG'
'blueBG'
'cyanBG'
'greenBG'
'magentaBG'
'redBG'
'yellowBG'
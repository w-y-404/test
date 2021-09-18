import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'power-assert';
// 引入
// import List from './todoList/List';

const testResults = [];
//==============================答题部分 start==============================

/********************第 1 题**********************/
// 将下划线风格的变量名转换成驼峰风格，如： 输入 alipay_first_quiz 返回 alipayFirstQuiz
// 注：下划线只会出现在单词中间，不会出现在开头或者结尾

function snake2camel(str) {
  // todo
  return str.replace(/_(\w)/g, function (all, letter) {
      return letter.toUpperCase()
    });
}


/*******测试用例*******/
try {
  assert.deepStrictEqual(snake2camel(), '');
  assert.deepStrictEqual(snake2camel(undefined), '');
  assert.deepStrictEqual(snake2camel(null), '');
  assert.deepStrictEqual(snake2camel(''), '');
  assert.deepStrictEqual(snake2camel('alipay'), 'alipay');
  assert.deepStrictEqual(snake2camel('alipay_first_quiz'), 'alipayFirstQuiz');
  assert.deepStrictEqual(snake2camel('aaaa_bb_ccc'), 'aaaaBbCcc');

  testResults[0] = '通过';
} catch {
  testResults[0] = '不通过';
}

/********************第 2 题**********************/
// 将驼峰风格的变量名转换成下划线风格，如： 输入 alipayFirstQuiz 返回 alipay_first_quiz
function camel2snake(str) {
  // todo
  if(typeof(str)!== 'string'){
    return ' ';
  }else{
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
  }
}

/*******测试用例*******/
try {
  assert.deepStrictEqual(camel2snake(), '');
  assert.deepStrictEqual(camel2snake(undefined), '');
  assert.deepStrictEqual(camel2snake(null), '');
  assert.deepStrictEqual(camel2snake(''), '');
  assert.deepStrictEqual(camel2snake('alipay'), 'alipay');
  assert.deepStrictEqual(camel2snake('alipayFirstQuiz'), 'alipay_first_quiz');
  assert.deepStrictEqual(camel2snake('aaaaBbCcc'), 'aaaa_bb_ccc');
  assert.deepStrictEqual(camel2snake('AaaaBbCcc'), 'aaaa_bb_ccc');

  testResults[1] = '通过';
} catch {
  testResults[1] = '不通过';
}

/********************第 3 题**********************/
// 给出一个数组和一个整数目标值 target，你需要找出 2 个数字，他们相加之和等于目标数字，并返回这两个数字的数组下标（升序排序）
// 注：你可以假设给出的入参一定可以找出这样 2 个数字，并且是唯一解
// 注：数组中同一个数字不能使用两遍
// 例子：数组 [3,4,7,15] 目标 10，则 3 + 7 满足目标 10，返回他们的下标 [0, 2]

function findSum(arr, target) {
  // todo
  let len = arr.length;
  let back = [];
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === target) {
        back[0] = i;
        back[1] = j;
      }
    }
  }
  return back;
}

/*******测试用例*******/
try {
  assert.deepStrictEqual(findSum([1, 2], 3), [0, 1]);
  assert.deepStrictEqual(findSum([4, 5, 13, 9], 13), [0, 3]);
  assert.deepStrictEqual(findSum([4, 5, 13, 9], 14), [1, 3]);
  assert.deepStrictEqual(findSum([4, 5, 13, 9], 9), [0, 1]);
  assert.deepStrictEqual(findSum([1, 8, 10, 11], 21), [2, 3]);

  testResults[2] = '通过';
} catch {
  testResults[2] = '不通过';
}

/********************第 4 题**********************/
// 输入一个合法的 URL 返回它的 query string 解析结果（数据结构参考下方单元测试）


function parseQueryString(url) {
  // todo
  let obj = {};
  url
    .split('?')[1]
    .split('&')
    .forEach(item => {
      if(item==''){
        return ''
      }else{
        obj[item.split('=')[0]] = decodeURI(item.split('=')[1]);
      }
    });
  return obj;
}

/*******测试用例*******/
try {
  assert.deepStrictEqual(parseQueryString(), {});
  assert.deepStrictEqual(parseQueryString('https://google.com'), {});
  assert.deepStrictEqual(parseQueryString('https://google.com?'), {});
  assert.deepStrictEqual(parseQueryString('https://google.com/?name=jeff&nick=dean'), { name: 'jeff', nick: 'dean' });
  assert.deepStrictEqual(parseQueryString('https://google.com/?name=jeff&nick=&'), { name: 'jeff', nick: '' });
  assert.deepStrictEqual(parseQueryString('https://google.com/?name=jeff&name'), { name: '' });
  assert.deepStrictEqual(parseQueryString('https://google.com/?q=%E6%94%AF%E4%BB%98%E5%AE%9D'), { q: '支付宝' });

  testResults[3] = '通过';
} catch {
  testResults[3] = '不通过';
}

/********************第 5 题**********************/
// 将一个 JSON Object 转换成 query string
// 如：输入 { a:1, b:2 } 输出 a=1&b=2
// 注意：需要考虑 URL 转义的情况，如中文或特殊字符

function toQueryString(map) {
  // todo
  // let arr = [];
  // for (let key in map) {
  //   arr.push(key + '=' + map[key]);
  // }
  // return arr.join('&');
  let obj = Object.keys(map)
    .map(item => {
      return item + '=' + map[item];
    })
    .join('&');
  return obj;
}

/*******测试用例*******/
try {
  assert.deepStrictEqual(toQueryString(), '');
  assert.deepStrictEqual(toQueryString({}), '');
  assert.deepStrictEqual(toQueryString({ a: 1, b: 2 }), 'a=1&b=2');
  assert.deepStrictEqual(toQueryString({ a: 1, b: undefined }), 'a=1&b=');
  assert.deepStrictEqual(toQueryString({ a: 1, b: null }), 'a=1&b=');
  assert.deepStrictEqual(toQueryString({ a: 1, b: 0 }), 'a=1&b=0');
  assert.deepStrictEqual(toQueryString({ a: '/' }), 'a=%2F');

  testResults[4] = '通过';
} catch {
  testResults[4] = '不通过';
}

//==============================答题部分 end================================

//==============================说明部分 start==============================

function App() {
  return (
    <div className="App">
      <div>
        <h3>题目列表</h3>
        <p>见左侧代码区域部分，共 5 题。</p>
      </div>
      <div>
        <h3>答题说明</h3>
        <ol>
          <li>请 Fork 到自己的账号下完成题目</li>
          <li>所有题目需要用原生 JS 实现，不能借助第三方类库</li>
          <li>答题部分在题干内 TODO 的位置，入参出参格式可以参考测试用例</li>
          <li>每道题的下方有单测，可以验证代码正确性，答题时也可自行添加用例</li>
          <li>
            尽可能完成所有题目, <strong>有疑问随时联系对应的面试官</strong>
          </li>
        </ol>
        <p></p>
      </div>
      <div>
        <h3>单测结果</h3>
        <ul>
          <li>第 1 题：{testResults[0]}</li>
          <li>第 2 题：{testResults[1]}</li>
          <li>第 3 题：{testResults[2]}</li>
          <li>第 4 题：{testResults[3]}</li>
          <li>第 5 题：{testResults[4]}</li>
        </ul>
      </div>
      <div>
        <h3>React 实践</h3>
        <p>
          使用 React Hooks 完成一个简单的 Todo List 组件，包含 Todo 事项的 <strong>新增事项、删除、修改文字、完成事项</strong> 这些操作。
        </p>
        <p>
          如果这些对你来说比较简单的话，可以试试能否再加上 <strong>列表的拖拽排序</strong> 。
        </p>
        <p>--- 在这里渲染你的 React 组件吧（下方只是功能示意图，样式可以自由发挥） ---</p>
        {/* <List /> */}
        <img src="https://gw.alipayobjects.com/mdn/rms_e0a0c6/afts/img/A*sMe6TrKUF1IAAAAAAAAAAAAAARQnAQ" alt="example" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
//==============================说明部分 end================================

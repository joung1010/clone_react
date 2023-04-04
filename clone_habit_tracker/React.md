## React
Components 들로 이루어진 UI 라이브러리
### Components
한가지 기능을 수행하는 UI 단위   
서로 독립적이며, 고립되어있고, 재사용이 가능하다.   
   
리엑트 어플리케이션은 하나의 컴포넌트로 이루어져있다.   
최상위에 존재하는 컴포넌트를 **Root**라고  한다.   
<pre>
React
    Root
     |
     |
     ----->  Navbar (Component)     
     |          |
     |          |
     |          ----->  Logo(component)  
     |          |
     |          |
     |          -----> button(component) 
     |          |
     |          |
     |          -----> button(component) 
     ----->  Content (Component)
                |
                |
                ----->  Article(Component)

이렇게 독립적인 Component 들을 조합해서 만들어 놓은 것을 리액트 어플리케이션이라고 한다.
</pre>
이 리엑트의 Component 들도 DOM Tree 와 마찬가지로 Tree 형식으로 만들어져 있다.
   
--> 리엑트는 UI 만들 수 있는 라이브러리 이고, 이 리액트를 이용해서 웹어플리케이션을 만든다는 것은   
컴포넌트들을 만든다 라고 말할 수 도 있다.

### 형태
react 에서 제공하는 컴포넌트라는 클래스를 상속해야 된다.
<pre>
<code>
import React from 'react';

class Button extends Component{
    state = {
        numberOfLikes: 0
    }l
    render(){
    return &lt;button&gt;
        {this.state.numberOfLikes}
    &lt;/button&gt;;
    }

}
</code>
</pre>
### 1.State
컴포넌트에 들어있는 데이터를 나타내는 오브젝트
### 2.render
render 함수는 사용자에게 어떻게 표기될 건지 JSX로 표기   
--> 데이터가 변경이 되면 이 render 함수가 자동적으로 다시 호출(변경된 State 값이 화면에 나타날 수 있게)   
   
만약 최상위 컴퍼넌트인 Root 가 변경이되면 그 하위 자식요소의 render함수도 같이 호출된다.   
그러면 state 가 변깅이 될때 마다 모든 render함수가 다시 호출 되는건 서능에 안좋은게 아닐까??   
### Virtual Dom Tree
브라우저의 DOM Tree 처럼 리액트도 리액트만의 Virtual Dom Tree 가 존재   
가상의 돔 트리로 메모리상에 보관이 되어져있다.   
그래서 컴포넌트에 변경이 생겨서 자식 컴퍼넌트의 render 함수가 호출이되면   
**previous tree** 와 (이전의 Virtual Dom Tree) 와 비교해서   
정말 실질적으로 어떤 부분이 업데이트 돼야 되는지 계산을 한다음에 정말 필요한 부분만   
Dom Tree 에 업데이트 를 한다   
그래서 render함수가 많이 호출되어도 실질적으로 보여지는 데이터가 변동되지 않으면   
DOM Tree 에는 영향을 주지 않는다.   
이때 매번 업데이트를 하는 것이 아니라 업데이트해야 되는 내용들을 모았다가   
한 번에 다같이 업데이트를 한다.
1. 컴포넌트 변경, render 함수 호출
2. 이전 Virtual Dom Tree 현재 Virtual Dom Tree 를 비교
3. 실질적으로 보여지는 화면에 데이터가 변동이 되면 DOM Tree 업데이트
   
### Re-render the whole app on every update
리엑트는 데이터가 변경이 될때마다 어플리케이션 전체를 다시 렌더링  
그래서 state 에 맞게 render 함수가에서 어떻게 표기될 건지 한 번만 정리를 해 놓으면   
 react 가 알아서 render함수를 호출 해준다.

### 공식 사이트
[React](https://reactjs.org/docs/getting-started.html)   
[Create React App](https://create-react-app.dev/docs/getting-started)   

### 필요한 Tool
1. 터미널   
1.1 window: [cmder](https://cmder.net/)   
1.2 mac: [iterm](https://iterm2.com/downloads.html) [iTerm 셋팅](https://gist.github.com/kevin-smets/8568070)
2. 노드: [NodeJS](https://nodejs.org/en/)
3. yarn : [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable), npm install yarn --global
   
NodeJs : 자바스크립트를 실행할 수 있는 환경   
예전에는 자바스크립트를 브라우저 위에서 동작하는 웹페이지나    
웹 어플리케이션을 위해서 작성하는 언어였다.   
하지만 NodeJs 덕분에 웹브라우저 밖에서도, 즉 운영체제 위에서나 노드JS 환경이 있다면   
우리가 작성한 자바스크립트 코드를 실행할 수 있다.   
--> 어느 곳에서나 자바스크립트로 프로그래밍이 가능하게 하는 프레임 워크   
   
npm : 패키지 매니저   
라이브러리, 패키지들 쉽게 관리할 수 있게 도와주는 것이 npm   
npm을 이용하면 package.json 파일이 생기는데 이패지키 안에 우리가 사용하고 있는   
외부 라이브러리들과 그들의 버전정보들이 들어 있다.   
--> 설치 및 업데이트 (실행할 수는 없음)
   
npx: 우리가 원하는 라이브러리를 실행할 수 있게 도와줌   
ex) npx 원하는라이브러리 이름
   
yarn : 페이스북에서 만들어진 패키지 매니저   
npm에서 서능, 보안 등을 개선해서 만든 패키지 매니저   
--> npm 위에서 동작하기 때문에 npm 에서 쓰는 package.json 파일 그대로 사용가능   
npm과 호환이 가능하게 사용 가능
   
설치확인   
1. node -v
2. npm -v
3. yarn -v

### Create React App
<pre>
npx create-react-app my-app(프로젝트 이름)   
cd my-app   
npm start
</pre>
<pre>
npm init react-app my-app
</pre>
<pre>
yarn create react-app my-app
</pre>
<pre>
yarn start : 작성한 코드를 실행
yarn build : 실행 x, 배포 빌드
yarn test : 테스트 성공 여부 확인
yarn eject : React App을 이용해서 다운로드 받은 패키지들을 확인하고 수정할 수 있다.
</pre>
### Babel
바벨은 자바스크립트 튼랜스 컴파일러   
convert ECMAScript 2015+ -> older version   
TypeScript, JSX -> JavaScript   
-> 예전 버전의 브라우저가 이해할 수 있는 소스코드로 변환해줌   
### Webpack
우리가 작성한 소스코드, 이미지들을 한 번에 묶어서 번들 단위로 사용자가에게 제공을 도와줌   
메인 페이지를 열었을때 자바스크립트 abc 가 필요하고 특정 이미지가 필요하면   
이것을 잘 묶어서 사용자에게 보내주고 사용자가 다시 다른페이지를 열어서 그페이지에   
필요한 Javascript 이미지 등을 잘 묶어서 다시 보내준다.   
또한 우리가 작성한 자바스크립트를 소스코드를 조금 줄여주고   
긴변수나 함수의 이름을 다른사람들이 알아 보지 못하도록 이름을 조금 이상하게 만들어 놓는   
그런일 도 하고 있음
### ESLint
즉각적으로 우리의 코드가 잘못된 것이 있다면 경고 사인을 보내줌
### Jest
유닛 테스트를 할 수 있게 도와주는 테스팅 프레임워크
### PostCSS
CSS 전처리기중 하나   
expandable CSS libraries tool for transforming CSS with Javascript
### 브라우저 개발툴
크롬브라우저 확장프로그램 : React Developer Tools   
***
## About Component
웹어플리케이션, 웹페이지에서 독립적이고 재사용이 가능한 단위로(박스 단위로)  
나뉘어진 블럭을 말합니다

리액트 라이브러리를 이용해서 컴포넌트를 만들 수 있는 방법은 클래스형, 함수형 두가지가 있다.   


1. Class   
1.1. React 에서 제공하는 Component Class를 상속해서 만들 수 있음   
1.2. state 라는 object 가 있음(스테이트가 변경되면 render 함수가 호출)   
1.3. lifecycle mehtods : 사용자에게 보여질떄, DOM Tree 올라갔을 때 , 나왔을때, 컴포넌트가 업데이트   
가 되었을때 등 컴포넌트의 상태에 따라서 우리가 함수를 구현하면 리액트가 알아서 불러줌
<pre>
<code>
import React from 'react';

class Button extends Component{
    state = {
        numberOfLikes: 0
    }l
    render(){
    return &lt;button&gt;
        {this.state.numberOfLikes}
    &lt;\button&gt;;
    }

}
</code>
</pre>
리액트에서 제공하는 **React.Component 클래스를 상속**하는 클래스를 만들면 되고,   
UI가 어떻게 표기 될 것인지 정의하는 **render() 함수를 구현** 햐야 한다.

컴포넌트 자체에 계속 기억이 되어져야 하는, UI를 표기 하기 위한 데이터가 있다면   
**this.state 멤버 변수**에 오브젝트 형태로 데이터를 저장 한다.   

클래스 특성상, 클래스의 인스턴스(오브젝트)가 생성이 되면 클래스의 메소드(함수)를   
아무리 많이 호출해도 클래스의 멤버 변수를 직접 적으로 수정하지 않는한   
멤버 변수는 한번 만들어 지면 계속 그 값이 유지가 된다.   

그래서 render 함수가 아무리 많이 호출이 되어져도(부모 컴포넌트로 부터 전달받은 props이 변경되는 경우  
컴포넌트 자체적인 데이터, this.state가 변경되지 않아도 render 함수가 계속  
호출될수 있다) , this.state 에 들어 있는 데이터는 변하지 않기 때문에,   
컴포넌트에서 가지고 있던 데이터를 잃어 버리지 않고 일정하게 데이터를    
사용자에게 보여줄 수 있다.   

컴포넌트에서 데이터를 변경해서 UI를 업데이트 해주고 싶다면,   
간단하게 this.state 만 업데이트 해주면    
리액트가 알아서 render 함수를 다시 호출해 주고 브라우저에 업데이트를 해주게 된다.   
   
즉,  **리액트에서 컴포넌트를 만들려면 React.Component 클래스를 상속하고,   
데이터는 꼭 this.state에 담아 두고, render() 함수에 HTML과 같은 JSX 문법을   
이용해서 데이터를 어떻게 UI로 표기 할건지 정의를 해놓도록 만들기!   
이것이 리액트 라이브러리에서 정해진 규칙**
   
여기서 포인트는 리엑트는 **변경사항이 한가지 방향으로만 흘러간다.**   
> 데이터가 변경이 되면 -> UI 가 업데이트 된다.
> >이말은 즉 데이터(State)가 변경이 되면 -> 리액트가 render() 함수를 호출해서 UI가 업데이트 됨


2.Function   
2.1. 함수로 구현(한가지를 일을 수행하는 작은 단위)   
2.2. 상태나, 라이프사이클 메소드 X
<pre>
App component
<code>
function App(){
 return &lt;h1&gt;Hello &lt;\h1&gt;; 
}
</code>
</pre>
내 컴포넌트가 상태에 따라서 주기적으로 업데이트 되어야한다면 Class 컴포넌트를 사용   
내 컴포넌트가 상태가 없고 항상 정적으로 데이터가 표기 된다면 함수 컴포넌트를 사용   
### React Hook (React. 16.8)
React Hook 을 이용하면 함수 컴포넌트 안에서도 스태이트를 가질 수 있고   
라이프사이클 메소드도 사용 가능

***
## JSX
Javascript 에서 문법적,구문적 확장을 한 것   
사실 리엑트는 JSX 없이 JS 만으로 구현이 가능하지만   
JS 익숙하지않은 다른 사람과의 협업 , 시각적인 보조 등으로 JSX가 유용하다   

## Embedding Expressions 
<pre>
<code>
const name = 'mason';
const element = &lt;h1&gt;Hello, {name}&lt;/h1&gt;
</code>
</pre>
<pre>
<code>
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  &lt;h1&gt;
    Hello, {formatName(user)}!
  &lt;/h1&gt;
);
</code>
</pre>
주의점   
React 에서 render 함수나 function 함수에서 이 JSX를 리턴하게 되면   
형제 노드를 쓸 수가 없다
<pre>
<code>
function App() {
  const name = 'mason';
  return  &lt;h1&gt;Hello {name}:)  &lt;/h1&gt;
       &lt;h1&gt;Hello&lt;/h1&gt;;
}
//Parsing error:
//Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...&lt;/>?
</code>
</pre>
그래서 JSX 는 다수의 태그를 리턴할 수 없기때문에   
<React.Fragment>태그를 사용하거나 <> </>  사용해서 묶어줘야한다.
<pre>
<code>
import React from "react";

function App() {
  const name = 'mason';
  
  return &lt;React.Fragment&gt;
    &lt;h1&gt;Hello {name}:)&lt;/h1&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/React.Fragment&gt;;
}
</code>
</pre>
<pre>
<code>
import React from "react";

function App() {
  const name = 'mason';
  
  return &lt;&gt;
    &lt;h1&gt;Hello {name}:)&lt;/h1&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/&gt;;
}
</code>
</pre>
또 JSX 안에서 자바스크립트 코드 작성 가능
<pre>
<code>
function App() {
  const name = 'mason';
  
  return &lt;&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
   {name && &lt;h1&gt;Hello {name}:)&lt;/h1&gt;}
          {
                ['apple','banana'].map(item => &lt;h1&gt;{item}&lt;/h1&gt;)
            }
  &lt;/&gt;;
</code>
</pre>
[Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
React.createElement(component, props, ...children)
<pre>
<code>
const element = (
  &lt;h1 className="greeting"&gt;
    Hello, world!
  &lt;/h1&gt;
);
// 동일
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

// 속성이 많을 때
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
</code>
</pre>
### JSX 심화
근본 적으로 JSX 는 React.createElement 함수에 syntactic sugar 를 제공하는 것이다   
이런식으로 코드를 작성해도
<pre>
<code>
const element = (
  &lt;h1 className="greeting"&gt;
    Hello, world!
  &lt;/h1&gt;
);
</code>   
</pre>
실제로 컴파일은 React.createElement 함수를 통해서 이루어진다.
<pre>
<code>
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
</code>
</pre>
## React 요소 지정
JSX 태그의 첫번째 문자로 리액트 요소의 타입인지를 결정한다   
즉 대문자로 시작하는 JSX 태그는 리액트 컴포넌트를 참조함을 나타낸다.   
그래서 컴파일할때 해당 변수명으로 직접 참조해서 컴파일하기때문에 만약   
JSX 안에서 &lt;Foo/&gt; 표현식을 사용한다면  사용하는 스코프 내에 반드시 Foo 가 존재 해야한다.
## React Must Be in Scope
JSX 는  React.createElement 호출해서 컴파일 하기때문에    
리액트 라이브러리가 반드시 JSX 코드 스코프에 존재해야한다.   
   
예를 들어 Javascript 에서 직접적으로 React 와 CustomButton 을 직접적으로 참조하지 않지만   
코드 상에서 이 둘의 imports 는 필요하다
<pre>
<code>
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return &lt;CustomButton color="red" /&gt;;
}
</code>
</pre>
Javascript bundler 를 사용하지않고 &lt;script&gt; 테그를 이용해서 React 로드했다면   
이미 React global scope에 포함되어 있다
## Using Dot Notation
JSX 에서 Dot Notation(.)을 이용해서 리액트 컴포넌트를 참조할 수 있다.
<pre>
<code>
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return &lt;div&gt;Imagine a {props.color} datepicker here.&lt;/div&gt;
  }
}

function BlueDatePicker() {
  return &lt;MyComponents.DatePicker color="blue" /&gt;;
}
</code>
</pre>
### 사용자 정의 컴포넌트는 대문자로!
태그가 소문자로 시작하면, 즉 이미 만들어져있는 컴포넌트를 참조한다   
&lt;div&gt;,&lt;span&gt; 등과 같은 태그는 React.createElement 에 전달 될때   
문자열 'div'와 'span' 으로 전달 된다.  React.createElement('div')   
하지만 대문자로 시작하면 , &lt;Foo&gt; 는 컴파일시 React.createElement(Foo) 로   
해당 태그 이름과 동일한 컴포넌트나 Javascript 파일을 참조하게 된다.   
잘못된 예시
<pre>
<code>
import React from 'react';

// Wrong! 컴포넌트는 반드시 대문자로 시작
function hello(props) {
  // Correct! This use of &lt;div&gt; is legitimate because div is a valid HTML tag:
  return &lt;div&gt;Hello {props.toWhat}&lt;/div&gt;;
}

function HelloWorld() {
  // Wrong! 리엑트는 이 태그를 &lt;hello /&gt; HTML 태그로 생각함 
  //왜냐하면 대문자가 아니기 때문에
  return &lt;hello toWhat="World" /&gt;;
}
</code>
</pre>
<pre>
<code>
function Hello(props) {
  return &lt;div&gt;Hello {props.toWhat}&lt;/div&gt;;
}

function HelloWorld() {
  return &lt;Hello toWhat="World" /&gt;;
}
</code>
</pre>
##State
컴포넌트 안에서 우리가 정의한 컴포넌트의 state 오브젝트 입니다.   
컴포넌트 UI를 위한 데이터를 보관하는 오브젝트로   
이 state라는 오브젝트를 통해서 데이터에 업데이트가 발생하면  
리액트가 자동적으로 우리가 구현한 render 함수를 호출
<pre>
<code>
import React from 'react';

class LikeButton extends Component {
 state = {
  numberOfLikes: 0,
 }; // state
 render(){
  return &lt;button&gt;
   {this.sate.numberOfLikes}
   &lt;button/&gt;
 };
}
</code>
</pre>

## Props
해당 컴포넌트 속성에 따라 동적으로 표시할 수 있음   
컴포넌트 밖에서 주어지는 데이터 입니다.   
컴포넌트 안에서 자체적으로 데이터를 정의해서 사용하는 State와는 다르게,   
Props은 컴포넌트 외부에서 데이터를 제공받습니다.   
가장 근본적인 이유는 컴포넌트의 재사용을 높이기 위해이다.   
상황에 따라 주어진 데이터를 받아서 그 데이터에 맞게 UI를 보여주기 위해서 사용 되어져요.   
아래처럼 부모컴포넌트에서 이렇게 LikeButton 컴포넌트를 사용할때    
title, onClick과 같은 아이들을 인자로 전달해 주면 이 아이들이 props 오브젝트로 묶여서 LikeButton 컴포넌트에 전달되어집니다.


class
<pre>
<code>
class App extends Component{
 handleClick = event => {
  console.log(event);
 }
 render(){
  return &lt;LikeButton title={'Lke'} onClick={this.handleClick} /&gt;;
 }
}


class LikeButton extends Component {
 state = {
  numberOfLikes: 0,
 }; // state
 render(){
  return &lt;button&gt;
   console.log(this.props); // title : "Like"
   console.log(this.state); // 0 
   {this.sate.numberOfLikes}
   &lt;button/&gt;
 };
}
</code>
</pre>

함수
<pre>
<code>
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return &lt;SpecificStory story={props.story} /&gt;
}
</code>
</pre>

<pre>
<code>
const MyComponents = {
    DatePicker: function DatePicker(props) {
        return &lt;div&gt;Imagine a {props.name} datepicker here.&lt;/div&gt;;
    }
}
function App() {
    const name = 'mason';

    return (
        &lt;&gt;
        &lt;h1&gt;Hello&lt;/h1&gt;
            &lt;MyComponents.DatePicker color="blue" name="mason"/&gt;
                                   //color , name -> props
        &lt;/&gt;
    );
}
</code>
</pre>
### 다양한 props 사용 방법
1. JavaScript Expressions
<pre>
<code>
&lt;MyComponent foo={1 + 2 + 3 + 4} /&gt;
</code>
결과 : 10 
</pre>
2. String Literals
<pre>
<code>
&lt;MyComponent message="hello world" /&gt;
&lt;MyComponent message={'hello world'} /&gt;

&lt;MyComponent message="& lt; 3" /&gt;
&lt;MyComponent message={'<3'} /&gt;

</code>
</pre>
3.Props Default
<pre>
<code>
// 아무 값도 넘기지 않으면 기본값으로 true 가 넘어간다.
&lt;MyTextBox autocomplete /&gt;

&lt;MyTextBox autocomplete={true} /&gt;
</code>
</pre>
4.Spread Attributes
<pre>
<code>
function App1() {
  return &lt;Greeting firstName="Ben" lastName="Hector" /&gt;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return &lt;Greeting {...props} /&gt;;
}
</code>
</pre>
<pre>
<code>
const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return &lt;button className={className} {...other} /&gt;
};


function App() {
    const name = 'mason';

    return (
        &lt; &gt;
            &lt;Button kind="primary" other="other" test="test" onClick={() =&gt; console.log("clicked!")}&gt;
                Hello World!
            &lt;/Button&gt;
        &lt;/>
    );
}
</code>
결과 :  &lt;button class="PrimaryButton" other="other" test="test"&gt;Hello World!&lt;/button&gt;
</pre>


[JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)

***
## Handling Events
DOM 요소의 이벤트 핸들링과 유사   
문법적 차이만 있음   
1. React의 이벤트는 소문자 대신 캐멀 케이스 사용
2. JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달   
   
기존 HTML
<pre>
<code>
&lt;button onclick="activateLasers()"&gt;
  Activate Lasers
&lt;/button&gt;
</code>
</pre>
React
<pre>
<code>
&lt;button onClick={activateLasers}&gt; //onClick 캐멀 케이스, activateLasers함수를 그대로 전달
  Activate Lasers
&lt;/button&gt;
</code>
</pre>
3. React 에서는 return false를 했다고 해서 기본적으로 작동하는 동작을 막을 수 없다.   
반드시 preventDefault 함수를 호출해 줘야한다.   

<pre>
<code>
&lt;form onsubmit="console.log('You clicked submit.'); return false"&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
</code>
return false 때문에 submit event가 작동 하지않음
</pre>
React 에서는
<pre>
<code>
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
}
</code>
preventDefault 를 이용해야 된다.
</pre>
여기서 handleSubmit 함수에 인자로 전달되는 e(event) 는 SyntheticEvent   
**SyntheticEvent**: 브라우저에서 사용하는 event 객체를 한번더 감싼 이벤트 객체   
[SyntheticEvent 공식문서](https://reactjs.org/docs/events.html)
***
##List and Key
릭에트 에서는 자식 컴포넌트가 있다면 고유한 key 값을 가지고 있어야한다.   
즉 각각의 컴포넌트에 고유학 아이디를 부여함으로써 리액트가 불필요한 렌더링을 하지 않는다던지   
조금 성능을 아이디를 이용해서 계산을 한다.   
즉 나중에 다른 자식 요소가 추가 되거나 위치가 변경이되어도 아이디가 동일하다면 불필요하게 렌더링을   
하지않는다.   
-> 리액트는 키를 이용해서 어떤 아이템이 추가, 변경, 삭제 되었는지 구분하기 때문에 안전성과 선을 위해   
여러 List 형태의 자식요로가 있을때 반드시 추가하는 것이 좋다. 이때 key 값은 고유한 값이어야한다.   
[Lists and Keys 공식문서](https://reactjs.org/docs/lists-and-keys.html)

***
## React Refs
Refs 는 DOM 노드에 접근 하거나 render method 를 통해 만들어진 React Elements 에 접근하는 방법이다.   
   
일반적인 리엑트 데이터 흐름에서 부모요소가 자식요소와 상호작용할 수 있는 방법은 props를 이용하는 것이다.   
그래서 자식요소를 수정하기 위해서는 새로은 props 와 함께 새롭게 다시 render 해야한다.   
근데 몇몇 케이스에서 부득이하게 이 일반적인 데이터흐름 말고 자식요소를 변경해야할 떄가 있다.   
이 변경된 자식요소는 React Component 일 수도 DOM element 일 수도 있다.   

### Refs 사용할때
1. 포커스, 텍스트 선택 영역, 미디어 플레이를 관리할때
2. 애니메이션 직접 실행할때
3. DOM 라이브러리에 접근할때   
   
## Creating Refs
React.createRef()함수 사용후 해당 요소에 ref 속성으로 연결   
<pre>
<code>
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return &lt;div ref={this.myRef} /&gt;;
  }
}

</code>
</pre>
## Accessing Refs
생성된 Ref 에서 **current** 속성을 통해 해당 노드를 참조한다.
<pre>
<code>
const node = this.myRef.current;
</code>
</pre>

[Ref 공식문서](https://reactjs.org/docs/refs-and-the-dom.html)
***
## PureComponent
PureComponent 는 React 의 Component 와 비슷하다   
다른점은 React.Component 은 shouldComponentUpdate() 구현하지 않았지만   
React.PureComponent shouldComponentUpdate()구현 했다   
   
shouldComponentUpdate 함수는 Conponent를 업데이트 해야 될지 안 해야 될지   
물어보는 함수인데 (prop 과 state를 가볍게 비교한다)   
--> 이전의 prop 과 state 와 지금의 prop 과 state 를 비교해서   
같다면 false를 return 하고 다르다면 true 를 return 한다. 
   
이떄 shallow Comparison을 하는데 이말은 이 오브젝트의 reference를 비교한다는 뜻   
즉 오브젝트의 내부 데이터가 어떻게 변경 되는 건 상관하지 않고 동일한 레퍼런스를   
가지고 있는 오브젝트라면 무조건 false 가 된다. 
   
두개의 변수(states)가 동일한 오브젝트를 가리키고 있는 경우
<pre>
<code>
const mason1 = { name: 'mason' };

const mason2 = mason1;
</code>
</pre>
1. mason1 === mason2 => ture 
2. ShouldComponentUpdate => false   
   
두개의 참조값이 같으므로, 업데이트 할 필요가 없어서 ShouldComponentUpdate 함수는 false를 리턴   

두개의 변수(states)가 다른 오브젝트를 가리키고 있는 경우:   
(이때, 동일한 값을 가지고 있더라도, 두개는 엄연히 다른 오브젝트이므로 다른 참조값을 가지게 됨)   
<pre>
<code>
const mason1 = { name: 'mason' };

const mason2 =  { name: 'mason' };
</code>
</pre>
1. mason1 === mason2 => false
2. ShouldComponentUpdate => true   

두개의 참조값이 다르므로, 업데이트가 필요함! ShouldComponentUpdate 함수는 true를 리턴   

***

## Life Cycle Method
컴퍼넌트가 생성, 제거 등 해당 라이프사이클에 맞추어 필요한 함수를 호출할 수 있다.   
Component 클래스를 상속하면 라이프 사이클 메소드를 이용할 수 있다.   
1. componentDidCatch: 컴포넌트가 어떤 에러 같은 것을 캐피 했을때
2. componentDidMount : 컴포넌트가 등록 되었을 때(UI 상에 등록 되었을때, 사용자에게 보여질때)
3. componentDidUpdate : 컴포넌트가 업데이트 되었을때
4. componentWillUnmount : 컴포넌트가 사라질때    
   
***
## React Hook
함수에서 state 와 라이프 사이클 함수를 사용할 수 있다.   
**함수형 컴포넌트에 리액트의 다른 기능들을 갈고리처럼 연결해준다는 의미.**   
리액트에서 기본적으로 제공되는 훅들은 **use로 시작하는 함수**   
1. State Hook   
함수형 컴포넌트에서도 State를 쓸 수 있도록, 함수형 컴포넌트가 여러번 호출이 되어도,   
계속 일정한 데이터를 기억하고 있는 useState()
2. Effect Hook   
   리액트의 라이프 싸이클 메소들처럼 활용할 수 있는, 원하는 데이터만 타켓으로 삼아서   
   그것이 변경될때마다 호출 될 수 있도록 쓸 수 있는 useEffect()
3. 기타   
   useCallback, useContext, useMemo, useReducer, useRef...등등
<pre>
<code>
const SimpleHabit = (props) => {
    // state = {
    //     count: 0,
    // };
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(  count + 1 );
    };

    return (
        &lt;li className="habit"&gt;
            &lt;span className="habit-name"&gt;Reading&lt;/span&gt;
            &lt;span className="habit-count"&gt;{count}&lt;/span&gt;
            &lt;button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            &gt;
                &lt;i className="fas fa-plus-square"&gt;&lt;/i&gt;
            &lt;/button&gt;
        &lt;/li&gt;
    );
};
</code>
</pre>
여기서 한가지 포인트!   
클래스는 한번 만들어지면 클래스 안에있는 멤버 변수들은 만들어질 때 **딱 한번**만 만들어진다.   
대신에 stae , props 가 업데이트 되면 render 함수만 반복적으로 호출   
   
함수는 컴포넌트가 변경이 되면 함수 코드블럭 자체가 반복해서 호출이 된다.   
그래서 함수 안에있는 지역변수들 도 뮤한정 반복된다.   
그러면 useState(0) 으로 계속 업데이트 되어야하는데 안그럴까????   
->useState 는 리엑트 훅의 API 중 하나로 이 useState 사용하면 리액트가 알아서 자동으로 기억해준다.   
즉 아무리 많이 호출되도 이 컴포넌트에 연결된 state 는 따로 저장이 되어져 있어서  
계속 동일한 값을 받아온다.   
   
useRef : CreateRef 처럼 호출될때마다 새로운 레퍼런스를 만드는 것이 아니라   
한 번만 만들어서 메모리에 저장하고 다시 그것을 재사용   

useCallback : 리엑트가 캐시를 해서 즉 특정 해당가 반복적으로 호출이 되어도   
동일한 콜백함수를 전달
<pre>
<code>
const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(  count + 1 );
    });

    return (
        &lt;li className="habit"&gt;
            &lt;span ref={spanRef} className="habit-name"&gt;Reading&lt;/span&gt;
            &lt;span className="habit-count"&gt;{count}&lt;/span&gt;
            &lt;button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            &gt;
                &lt;i className="fas fa-plus-square"&gt;&lt;/i&gt;
            &lt;/button&gt;
        &lt;/li&gt;
    );
};
</code>
</pre>

[React Hooks](https://reactjs.org/docs/hooks-intro.html)
***
## React 동작 원리   
리액트는 변경사항이 한가지 방향으로만 흘러간다.
>데이터가 변경이 되면 -> UI가 업데이트 된다.
   
위 문장을 풀어서 말하자면
>데이터(State)가 변경이 되면 리액트가 render() 함수를 호출해서 UI가 업데이트 된다.   
   
<pre>
<code>
class App extends Component {
 state = {
  count : 0,
 };
 render () {
  return (
   &lt;&gt;
   &lt;span&gt;{this.state.count}&lt;/span&gt;
   &lt;button
      onClick={()=>{
      this.state.count++;      
     }}
    &gt;
     Click
    &lt;/button&gt;
   &lt;/&gt;
  )
 }
}
</code>
</pre>
위와 같이 **this.state.count++** 를 이용해서 바로 this.state 값을 증가시켜주면   
제대로 값이 증가 되지 않는다.   
리액트에서 제대로 상태를 업데이트 하기 위해서는 리액트에서 제공하는 **setState** 함수를 호출해야 한다.   
   
<pre>
<code>
class App extends Component {
 state = {
  count : 0,
 };
 render () {
  return (
   &lt;&gt;
   &lt;span&gt;{this.state.count}&lt;/span&gt;
   &lt;button
      onClick={()=>{
      this.setState({count: this.state.count + 1}); 
     }}
    &gt;
     Click
    &lt;/button&gt;
   &lt;/&gt;
  )
 }
}
</code>
</pre>
위의 코드를 보시면 setState 함수를 이용해서   
새로운 상태 오브젝트(업데이트 하고자 하는 상태 데이터)를 인자로 전달해 주는것을 볼 수 있다.   
리액트가 업데이트가 되어야 한다고 알아 차리게 하기 위해서는 이렇게 setState 함수를 호출해 해야 한다.   
-> 그래야 상태가 업데이트가 되었다고 알고 UI를 업데이트하기 위해서 render()함수를 호출해준다.
   
리액트는 내부적으로 setState 함수가 호출이 되면 이제 리액트는 **현재 컴포넌트가 가지고 있는 상태**와 (this.state),   
**업데이트 해야 하는 새로운 상태** (setState 함수의 인자로 전달된 새로운 오브젝트) 두가지를 비교해서   
**업데이트가 필요한 경우** 해당 컴포넌트의 render 함수를 호출 해준다.   

컴포넌트를 업데이트 할때 현재 컴포넌트의 상태와 새로운 상태를 비교하는 방식은   
**PureComponent**인 경우에는 두가지를 얉게 비교 해서 (제일 상위 reference만 비교, shallow comparisons),   
달라진게 있다면 컴포넌트를 업데이트   

**일반 Component** 경에는 따로 라이프 싸이클 메소드중 하나인 shouldComponentUpdate를 구현하지 않았다면   
setState가 호출 될때마다 무조건 render 함수가 호출된다.   

**setState는 비동기 API**   
webAPIs 중 하나인 setTimeout, setInterval과 같은 비동기 함수처럼, setState도 비동기 함수   
그말은 setState를 호출한다고 해서 무조건 바로 render 함수가 호출되는 것이 아니라,  
리액트에 업데이트 요청을 하기만 하고 다시 뒤에 이어지는 코드가 실행   

비동기로 동작하기 때문에 리액트가 동시 다발적으로 요청된 여러가지의 setState를 더 효율적으로 처리 할 수 있다   
>  그리고, state를 업데이트 할때 이전 state 값에서 무언가가 계산이 되어지는 경우라면
> 컴포넌트 내의 state 값에 의존해서 계산한 값을 setState(updated)로 설정하기 보다는, setState(prevState => newState) 
> 이렇게 이전 state 값을 받아서 그걸로 업데이트 되는 state값을 만드는 arrow 함수를 전달할 수 있는 함수 호출을 하시는게 좋다
   
**리액트에서 제공하는 setState는 함수는 두가지 종류**   
1. setState(newState)  -> 새로운 state 오브젝트를 인자로 바로 받는 함수
2. setState(prevState => { return newState; }) -> 이전 state를 받아서 그걸로 계산해서 새로운 state를 리턴하는 함수를 인자로 받는 함수
   >this.setState((state, props) => ({
   counter: state.counter + props.increment
   }));
   
   
이전 코드 수정
<pre>
<code>
 &lt;button
      onClick={()=>{
      this.setState(state => ({count : state.count + 1,})); 
     }}
    &gt;
     Click
    &lt;/button&gt;
</code>
</pre>
[관련 공식 문서](https://reactjs.org/docs/state-and-lifecycle.html)   
   
### State를 수정하면 안되는 이유?
리액트에서 state를 직접적으로 수정하면 좋지 않다.   
사실 어떤 프로그래밍에서도 오브젝트를 직접적으로 변경하는것은 좋지 않다.   
예상치 못한 오류가 발생하는 것을 피하기 위해서는   
이미 만들어진 오브젝트는 항상 불변성을 (Immutability) 유지 하는것이 좋다   
안되는 이유!!
<pre>
<code>
class App extends Component {
 state = {
  count : 0,
 };
 render () {
  return (
   &lt;&gt;
   &lt;span&gt;{this.state.count}&lt;/span&gt;
   &lt;button
      onClick={()=>{
      **this.state.count++;      
      this.setState(this.state);**
     }}
    &gt;
     Click
    &lt;/button&gt;
   &lt;/&gt;
  )
 }
}
</code>
</pre>
this.state가 가리키고 있는 오브젝트의 count를 바로 직접적으로 수정하고, 수정된 this.state 자체를 setState의 인자로 전달   
실행 시켜보면 잘 동작하는 것을 확인할 수 있다.   
그려면 이렇게나 잘되는데, 아니 왜 도대체 state를 바로 수정하지 말라고 하는거죠? 왜 매번 귀찮게 새로운 오브젝트를 만들어야 할까???    
그렇게 하기 위해서 작성해야 하는 코드의 양도 많아 지고 정말 귀찮은데   

이렇게 State를 직접적으로 수정하는게 좋지 않은 이유   
1. setState는 비동기적으로 동작한다   
   그래서 State를 직접 수정하면서 여러번 상태를 업데이트 하는 경우 이전 업데이트 내용이 다음 업데이트 내용으로 덮어 쓰여질 수 있고   
   비동기 특성으로 인해 예상치 못한 곳에서, 예상치 못한 순간에  버그가 발생 할 수 있는 위험이 있다.
2. PureComponent에서 정상적으로 동작 하지 않는다   
   PureComponent는 현재 컴포넌트가 가지고 있는 상태와 (this.state),   
업데이트 해야 하는 새로운 상태 (setState 함수의 인자로 전달된 새로운 오브젝트)의 레퍼런스를 비교해서    
업데이트가 필요한 경우 해당 컴포넌트의 render 함수를 호출

지금 경우는 this.stae 오브젝트를 직접적으로 수정해서 setState함수에 동일한 오브젝트를 전달하니깐,   
비교 해야 하는 대상의 레퍼런스가 동일하므로 리액트는 업데이트 할 필요가 없다고 판단해서 render 함수를 호출해 주지 않는다.   

이처럼, 리액트 상태 State를 직접적으로 수정하는것은 예상치 못한 문제가 발생 할 수 있기 때문에, 꼭 불변성을 유지 하는것이 좋다.

***
## Deployment
1. githubPage
   [Deployment](https://create-react-app.dev/docs/deployment) 참고
2. Netlify
> npm install netlify-cli -g   
>  netlify deploy   
>  Create & configure a new site 선택후 siteName 정하고 
>  publish directory 는 build 폴더 선택    
>  최종 완료되면 netlify deploy --prod 배포

*** 
## PostCSS
CSS 전처리기   
기본적인 CSS만으로는 중복적으로 작성해야 되는 CSS 코드나 다른 브라우저 호환성을 위해서   
반복적으로 해줘야하는 작업들이 많다.   
이런 반복적인, 중복되는 코드 작성을 최소화하고자 CSS 전처리기가 나왔다.   
ex) LESS, SASS .....   
[PostCSS](https://postcss.org/)

[PostCSS Plugins](https://www.postcss.parts/)

[Plugins Github 페이지](https://github.com/postcss/postcss/blob/master/docs/plugins.md)

<pre>
<code>
button1.module.css
{
 .button{
  background-color: sandybrown;
 }
 .text{
  color: black;
 }
}

button2.module.css
{
 .button{
  background-color: blue;
 }
 .text{
  color: white;
 }
}
</code>
</pre>

<pre>
<code>
import React,{Component} from 'react';
import styles from './button1.button2.module.css'

class Button1 extends Component {
 render () {
  return (
   &lt;div className="{styles.button}" &gt;
    &lt;span className="{styles.text}"&gt;Button1 &lt;/span&gt;
   &lt;/div&gt;
  )
 }
}// 색 sandybrown

class Button1 extends Component {
 render () {
  return (
   &lt;div className="{styles.button}" &gt;
    &lt;span className="{styles.text}" &gt;Button2 &lt;/span&gt;
   &lt;/div&gt;
  )
 }
}//blue
</code>
</pre>



***
### 기타   
1.폰트오쏨 명령어: yarn add @fortawesome/fontawesome-free

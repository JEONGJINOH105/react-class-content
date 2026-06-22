import "./App.css";
import Drink from "./component/Drink";

function App() {
  return (
  <>
    <h1>리액트를 사용하게 된 이유</h1>
    <h2>첫번째 이유는 html태그들이 중복이 많이 된다.</h2>

    {/* class는 css에서 썼는데 리액트는 ClassName으로 써야된다. */}
    <Drink />
    <Drink />
  </>
  );
}

export default App;

// 리액트를 사용하는 이유 중에 HTML코드로 물건을 디자인하면
// HTML 코드들이 중복이 된다.

// 새로운 내용을(태그) 추가하려고 한다.
// 중복되는 태그 전부가서 수정,추가,삭제 해야된다.
// 이게 불편해서 리액트를 사용한다.

// 리액트에 HTML에는 없는 새로운 기능이있다.
// - 직접 태그를 만들 수 있다.

// React를 쓰는 이유는 반복되는 UI를 컴포넌트 단위로 쪼개서
// 재사용할 수 있기 때문이다.
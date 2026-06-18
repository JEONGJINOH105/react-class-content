import React from 'react'
// react를 사용하면 더 이상 link를 사용할 필요가 없다.
// inport : 현재 posts 함수에 내용을 포함해라.
// App.css 파일을 연결해서 사용하고 싶다하면?
// import "css파일의 경로"
// link태그를 대신한다.
import "./App.css";
// from : 어디 경로에서 포함할꺼냐?
// 경로는 문자로 작성해야한다.
import App from './App.css';

// 내가 게시글 페이지를 직접 만들었다.
// 그 안에 여러가지 태그들을 묶었다.
// 리액트에서 함수가 태그를 묶을 수 있도록 업그레이드됬다.

// 내가 만든 게시글 태그를 다른 누군가가
// 가져가서 쓸 수 있기 때문에
// 누구든 내 posts 함수를 가져가 써라
function Posts() {
  return (
    <>
    <div>Posts</div>
    <div>Board</div>
    </>
  )
}
export default Posts;
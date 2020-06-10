# Vue JS

## I.핵심

### 1. SPA

Single Page Application

- 페이지 전환 없이(새로운 요청 응답 없이) UI 변화
- 왜?

1.  사용자 편의
2.  서버 리소스

### 2. MVVM

Model-ViewModel-View
-MVC(Model-Control- View)와의 비교

### 3. Declarative Programming

선언적 프로그래밍 <-> 명령형 프로그래밍(Imperative Programming)

- 명령형(점차적): 변화를 단계적으로 명령
  => Vanila Javascript DOM 조작
- 선언형: 변화를 선언(그림 그리기)
  => 프레임워크를 통한 조작

## II. Vue JS의 요소

### 1. Directive(지시자)

- 'v-for' : 배열과 같은 데이터를 순회
- 'v-if' : 조건부 렌더링
- 'v-else' : 조건부 렌더링
- 'v-on' : 이벤트를 바인딩( 'addEventListener()' )
- 'v-model' : 양방향 바인딩
- 'v-bind' : 속성값 설정 ( v-bind:class = "변경값을 적용할 클래스 : 속성값", 약어로 v-bind 없이 :class로 쓸 수 있음)
- 'v-text' : 데이터 렌더 (innerText) == '{{}}'
- 'v-html' : 데이서 렌더 (innerHTML)

### 2. Vue Instance(객체)

- 'new Vue{{}}'
- 'el: '#app'' : Vue 객체의 마운트 포인트
- 'data :{}' : Vue 객체가 관리할 데이터
- 'methods:{}' : Vue 객체의 함수
- 'computed:{}' : Vue 객체의 함수화된 데이터
- 'watch: {}' : 데이터 변경에 대한 콜백

#### 라이프사이클 훅

- 'created()' : 객체 생성 직후
- 'beforeMount()'
  --- Mounted : DOM에 보이기 시작

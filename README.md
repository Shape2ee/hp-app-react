# React Project 🖥

### HP 사이트 리디자인

리액트를 이용하여 컴퓨터 판매회사인 HP 사이트를 새롭게 리디자인 하였습니다.<br>
전체적으로 깔끔하면서 라운드를 이용하여 부드러운 느낌을 추가하여 대중들에게<br>
딱딱한 분위기보다 좀 더 친근하게 다가가는 느낌을 주고자 하였습니다.

[HP 사이트 바로가기](https://shape2ee.github.io/hp-app-react/)
<br>
<br>

## 작업을 하면서 느낀 점 📝

- 이번 작업은 리액트를 이용해서 처음 하는 작업이며, 학원에서 리액트를 아주 짧게 배워서<br>
  다시 처음부터 하나하나 스스로 찾아보면서 하다 보니 작업 시간도 좀 오래 걸렸고,<br>
  <s>반응형은 구현하지 못하고 모바일 버전만 작업을 하게 되었습니다.<br>
  계속 공부해서 반응형으로 Update 할 예정입니다.</s><br>
  2022.08.31 반응형 Update 및 지속가능경영(서브 페이지) 작업을 추가했습니다.👍

- React만의 기능을 최대한 이용하면서 작업을 하고 싶어 Styled-Component로 작업을 하였는데,<br>
  class를 이용해 CSS 파일을 분리해서 작업할 때는 active, on, show 등등 클래스를<br> 하나 더 붙이는 거로 움직임을 쉽게 표현했는데, 그 점이 Styled-Component에서는<br>
  어떤 식으로 해야 하는지 헷갈렸지만, useState을 이용해서 해결하는 방식을 배웠습니다.

- React의 가장 큰 특징인 컴포넌트별로의 작업이 한곳에 다 적는 것이 아니라<br>
  장점이 많았지만, 아직 props를 통해 data뿐만이 아니라 함수까지 전달하여<br>
  작업을 하는 것이 익숙하지 않아 함수가 사용되는 곳마다 비슷한 코드를<br>
  작성한 것이 조금은 아쉽습니다. 조금 더 props를 공부하여<br>
  코드 정리할 예정입니다.

- React Router를 이용하여 SPA인 React의 페이지 이동을 구현하였는데,<br>
  배포한 페이지의 path="/"를 적어준 메인화면이 보이지 않는 문제가 있었고<br>
  콘솔창에 해당 경로를 찾지 못하는 상황을 발견하였습니다.<br>
  이러한 문제는 "/"가 아닌 "/hp-app-react"를 붙여주므로 해결하였는데 Router 경로에 대하여<br>
  추가적인 공부가 필요하다고 느끼는 순간이었습니다.
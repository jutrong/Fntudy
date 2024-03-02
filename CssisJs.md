## Css-in-js가 무엇?

단어 그대로 자바스크립트 코드에 css를 작성하는 방식 !

styled-components, emotion 등등

### 왜 사용할까 ?

Styled-components 공식문서

- Automatic critical CSS

styled-components는 페이지에 렌더링된 컴포넌트를 추적하고 그 스타일만을 완전 자동으로 삽입합니다.
코드 분할과 결합되어, 사용자가 필요한 최소한의 코드만을 로드하게 됩니다.

- No class name bugs

  - 고유한 클래스 이름을 생성
  - 클래스 중복 방지

- Easier deletion of CSS

- Simple dynamic styling

- Painless maintenance

- Automatic vendor prefixing

현재 표준에 맞는 CSS를 작성하고 나머지는 styled-components에 맡기기만 하면 됩니다.

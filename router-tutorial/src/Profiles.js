import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
        /*
        component 대신에 render 가 사용되었는데요, 여기서는 컴포넌트가 아니라, 
        JSX 자체를 렌더링 할 수 있습니다. JSX 를 렌더링하는 것이기에, 
        상위 영역에서 props 나 기타 값들을 필요하면 전달 해 줄 수있습니다.
        */
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;

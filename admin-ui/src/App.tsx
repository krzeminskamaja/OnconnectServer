import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PastSourceList } from "./pastSource/PastSourceList";
import { PastSourceCreate } from "./pastSource/PastSourceCreate";
import { PastSourceEdit } from "./pastSource/PastSourceEdit";
import { PastSourceShow } from "./pastSource/PastSourceShow";
import { CurrentSourceList } from "./currentSource/CurrentSourceList";
import { CurrentSourceCreate } from "./currentSource/CurrentSourceCreate";
import { CurrentSourceEdit } from "./currentSource/CurrentSourceEdit";
import { CurrentSourceShow } from "./currentSource/CurrentSourceShow";
import { SourceDetailList } from "./sourceDetail/SourceDetailList";
import { SourceDetailCreate } from "./sourceDetail/SourceDetailCreate";
import { SourceDetailEdit } from "./sourceDetail/SourceDetailEdit";
import { SourceDetailShow } from "./sourceDetail/SourceDetailShow";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"OnconnectBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="PastSource"
          list={PastSourceList}
          edit={PastSourceEdit}
          create={PastSourceCreate}
          show={PastSourceShow}
        />
        <Resource
          name="CurrentSource"
          list={CurrentSourceList}
          edit={CurrentSourceEdit}
          create={CurrentSourceCreate}
          show={CurrentSourceShow}
        />
        <Resource
          name="SourceDetail"
          list={SourceDetailList}
          edit={SourceDetailEdit}
          create={SourceDetailCreate}
          show={SourceDetailShow}
        />
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
      </Admin>
    </div>
  );
};

export default App;

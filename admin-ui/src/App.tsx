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
import { ResourceHistoryList } from "./resourceHistory/ResourceHistoryList";
import { ResourceHistoryCreate } from "./resourceHistory/ResourceHistoryCreate";
import { ResourceHistoryEdit } from "./resourceHistory/ResourceHistoryEdit";
import { ResourceHistoryShow } from "./resourceHistory/ResourceHistoryShow";
import { ResourceSuggestionList } from "./resourceSuggestion/ResourceSuggestionList";
import { ResourceSuggestionCreate } from "./resourceSuggestion/ResourceSuggestionCreate";
import { ResourceSuggestionEdit } from "./resourceSuggestion/ResourceSuggestionEdit";
import { ResourceSuggestionShow } from "./resourceSuggestion/ResourceSuggestionShow";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { KeywordList } from "./keyword/KeywordList";
import { KeywordCreate } from "./keyword/KeywordCreate";
import { KeywordEdit } from "./keyword/KeywordEdit";
import { KeywordShow } from "./keyword/KeywordShow";
import { SynonymList } from "./synonym/SynonymList";
import { SynonymCreate } from "./synonym/SynonymCreate";
import { SynonymEdit } from "./synonym/SynonymEdit";
import { SynonymShow } from "./synonym/SynonymShow";
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
          name="ResourceHistory"
          list={ResourceHistoryList}
          edit={ResourceHistoryEdit}
          create={ResourceHistoryCreate}
          show={ResourceHistoryShow}
        />
        <Resource
          name="ResourceSuggestion"
          list={ResourceSuggestionList}
          edit={ResourceSuggestionEdit}
          create={ResourceSuggestionCreate}
          show={ResourceSuggestionShow}
        />
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
        <Resource
          name="Keyword"
          list={KeywordList}
          edit={KeywordEdit}
          create={KeywordCreate}
          show={KeywordShow}
        />
        <Resource
          name="Synonym"
          list={SynonymList}
          edit={SynonymEdit}
          create={SynonymCreate}
          show={SynonymShow}
        />
      </Admin>
    </div>
  );
};

export default App;

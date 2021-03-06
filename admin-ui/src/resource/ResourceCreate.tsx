import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ResourceHistoryTitle } from "../resourceHistory/ResourceHistoryTitle";
import { KeywordTitle } from "../keyword/KeywordTitle";
import { ResourceSuggestionTitle } from "../resourceSuggestion/ResourceSuggestionTitle";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Abstract" source="abstract" />
        <div />
        <ReferenceArrayInput
          source="historyID"
          reference="ResourceHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="keywordID"
          reference="Keyword"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeywordTitle} />
        </ReferenceArrayInput>
        <TextInput label="Link" source="link" />
        <DateTimeInput label="Relase Date" source="relaseDate" />
        <ReferenceArrayInput
          source="suggestionID"
          reference="ResourceSuggestion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceSuggestionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { KeywordTitle } from "./KeywordTitle";
import { ResourceTitle } from "../resource/ResourceTitle";
import { SynonymTitle } from "../synonym/SynonymTitle";
import { UserTitle } from "../user/UserTitle";

export const KeywordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="keyword.id" reference="Keyword" label="ChildID">
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="parentID"
          reference="Keyword"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KeywordTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="resourceID"
          reference="Resource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="synonymID"
          reference="Synonym"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SynonymTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userID"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { KeywordTitle } from "../keyword/KeywordTitle";

export const SynonymCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="keyword.id"
          reference="Keyword"
          label="KeywordID"
        >
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

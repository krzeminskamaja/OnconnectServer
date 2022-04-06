import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { KeywordTitle } from "../keyword/KeywordTitle";

export const SynonymEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="keyword.id"
          reference="Keyword"
          label="KeywordID"
        >
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SourceDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Abstract" multiline source="abstract" />
        <TextInput label="Author" source="author" />
        <TextInput label="Keyword" multiline source="keyword" />
        <TextInput label="Title" source="title" />
        <TextInput label="UniqueSourceKey" source="uniqueSourceKey" />
      </SimpleForm>
    </Edit>
  );
};

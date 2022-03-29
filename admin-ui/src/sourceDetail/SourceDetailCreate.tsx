import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SourceDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Abstract" multiline source="abstract" />
        <TextInput label="Author" source="author" />
        <TextInput label="Keyword" multiline source="keyword" />
        <TextInput label="Title" source="title" />
        <TextInput label="UniqueSourceKey" source="uniqueSourceKey" />
      </SimpleForm>
    </Create>
  );
};

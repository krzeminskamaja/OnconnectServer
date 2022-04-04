import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author(s)" source="authorS" />
        <TextInput label="Keywords" source="keywords" />
        <DateTimeInput label="Relase Date" source="relaseDate" />
      </SimpleForm>
    </Create>
  );
};

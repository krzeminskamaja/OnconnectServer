import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Author(s)" source="authorS" />
        <TextInput label="Keywords" source="keywords" />
        <DateTimeInput label="Relase Date" source="relaseDate" />
      </SimpleForm>
    </Edit>
  );
};

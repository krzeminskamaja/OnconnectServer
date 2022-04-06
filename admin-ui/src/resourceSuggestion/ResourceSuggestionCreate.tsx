import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ResourceTitle } from "../resource/ResourceTitle";
import { UserTitle } from "../user/UserTitle";

export const ResourceSuggestionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="resource.id"
          reference="Resource"
          label="ResourceID"
        >
          <SelectInput optionText={ResourceTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="UserID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

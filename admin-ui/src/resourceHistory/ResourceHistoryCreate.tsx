import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ResourceTitle } from "../resource/ResourceTitle";
import { UserTitle } from "../user/UserTitle";

export const ResourceHistoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="ReadDate" source="readDate" />
        <ReferenceInput
          source="resource.id"
          reference="Resource"
          label="SourceID"
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

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RESOURCE_TITLE_FIELD } from "./ResourceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ResourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Abstract" source="abstract" />
        <TextField label="Author(s)" source="authors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ImageURL" source="imageURL" />
        <TextField label="Link" source="link" />
        <TextField label="ReleaseDate" source="relaseDate" />
        <TextField label="ResourceType" source="resourceType" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ResourceHistory"
          target="ResourceId"
          label="ResourceHistories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="ReadDate" source="readDate" />
            <ReferenceField
              label="SourceID"
              source="resource.id"
              reference="Resource"
            >
              <TextField source={RESOURCE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="UserID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ResourceSuggestion"
          target="ResourceId"
          label="Resource Suggestions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Priority" source="priority" />
            <ReferenceField
              label="ResourceID"
              source="resource.id"
              reference="Resource"
            >
              <TextField source={RESOURCE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="UserID" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

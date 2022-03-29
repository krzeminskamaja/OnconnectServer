import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SourceDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SourceDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Abstract" source="abstract" />
        <TextField label="Author" source="author" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Keyword" source="keyword" />
        <TextField label="Title" source="title" />
        <TextField label="UniqueSourceKey" source="uniqueSourceKey" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

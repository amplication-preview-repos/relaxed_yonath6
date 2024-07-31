import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userEmail" source="userEmail" />
        <TextField label="user_firstName" source="userFirstName" />
        <TextField label="user_lastName" source="userLastName" />
        <TextField label="userPassword" source="userPassword" />
        <TextField label="user_username" source="userUsername" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="MatchmakingRequest"
          target="userId"
          label="MatchmakingRequests"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Game" source="game.id" reference="Game">
              <TextField source={GAME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="GameLookup" source="gameLookup" />
            <TextField label="ID" source="id" />
            <TextField label="requestCreatedAt" source="requestCreatedAt" />
            <TextField label="requestStatus" source="requestStatus" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="UserLookup" source="userLookup" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

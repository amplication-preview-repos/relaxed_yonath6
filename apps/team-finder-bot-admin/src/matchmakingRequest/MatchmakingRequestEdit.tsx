import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { GameTitle } from "../game/GameTitle";
import { UserTitle } from "../user/UserTitle";

export const MatchmakingRequestEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="game.id" reference="Game" label="Game">
          <SelectInput optionText={GameTitle} />
        </ReferenceInput>
        <TextInput label="GameLookup" source="gameLookup" />
        <DateTimeInput label="requestCreatedAt" source="requestCreatedAt" />
        <TextInput label="requestStatus" source="requestStatus" />
        <TextInput label="status" source="status" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="UserLookup" source="userLookup" />
      </SimpleForm>
    </Edit>
  );
};

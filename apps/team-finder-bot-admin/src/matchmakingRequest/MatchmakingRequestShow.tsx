import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { GAME_TITLE_FIELD } from "../game/GameTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MatchmakingRequestShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

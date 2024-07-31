import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { MatchmakingRequestTitle } from "../matchmakingRequest/MatchmakingRequestTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="matchmakingRequests"
          reference="MatchmakingRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MatchmakingRequestTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="userEmail" source="userEmail" type="email" />
        <TextInput label="user_firstName" source="userFirstName" />
        <TextInput label="user_lastName" source="userLastName" />
        <TextInput label="userPassword" source="userPassword" />
        <TextInput label="user_username" source="userUsername" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};

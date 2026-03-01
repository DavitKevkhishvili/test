import { gql } from "@apollo/client";

export const ADD_FAVOURITE = gql`
  mutation AddFavourite($characterId: ID!, $note: String!) {
    addfavourite(characterId: $characterId, note: $note) {
      id
      character {
        id
        name
      }
      note
    }
  }
`;

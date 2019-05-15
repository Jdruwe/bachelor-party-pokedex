import {ID} from '@datorama/akita';

export interface Mission {
  id: ID;
  text: string;
}

export function createMission({id, text}): Mission {
  return {
    id,
    text
  };
}

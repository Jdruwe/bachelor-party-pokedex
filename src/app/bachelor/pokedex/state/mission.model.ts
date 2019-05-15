import {ID} from '@datorama/akita';

export interface Mission {
  id: ID;
  text: string;
  badge: string;
}

export function createMission({id, text, badge}): Mission {
  return {
    id,
    text,
    badge
  };
}

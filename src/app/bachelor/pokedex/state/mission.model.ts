import {ID} from '@datorama/akita';

export interface Mission {
  id: ID;
  text: string;
  badge: string;
  completed: boolean;
}

export function createMission({id, text, badge, completed}): Mission {
  return {
    id,
    text,
    badge,
    completed
  };
}

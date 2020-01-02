export interface TodoItem {
  id: string;
  description: string;
  completed: boolean;
}

export interface TodoRequest {
  description: string;
  completed: boolean;
}
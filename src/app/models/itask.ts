export interface ITask {
  _id: string,
  name: string,
  description: string,
  createdDate: string,
  status: 'NEW' | 'IN PROCESS' | 'DONE'
}

export interface ITaskData {
  name: string,
  description: string,
  status: 'NEW' | 'IN PROCESS' | 'DONE'
}

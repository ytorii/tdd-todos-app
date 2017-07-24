import * as api from '../'
import client from '../client'
import MockAdapter from 'axios-mock-adapter'

describe('api', () => {
  describe('fetchTodos', () => {
    const todos = [
      {
        id: 1,
        title: 'todo1'
      }
    ]

    const mock = new MockAdapter(client)
    mock.onGet('/todos').reply(200, todos) 

    it('returns response', () => {
      return api.fetchTodos().then(res => {
        expect(res).toEqual(todos)
      })
    })
  })
})

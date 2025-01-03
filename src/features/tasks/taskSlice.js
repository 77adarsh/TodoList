import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data.map(task => ({
      id: task.id,
      title: task.title,
      description: task.title,
      status: task.completed ? 'completed' : 'pending'
    }));
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: task.title,
        completed: task.status === 'completed',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return {
      id: data.id,
      title: task.title,
      description: task.description,
      status: task.status,
    };
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: task.id,
        title: task.title,
        completed: task.status === 'completed',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return task;
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
      method: 'DELETE',
    });
    return taskId;
  }
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(task => task.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(task => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
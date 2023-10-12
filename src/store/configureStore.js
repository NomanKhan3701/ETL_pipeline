import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import mainReducer from './reducers/main'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		main: mainReducer,
	}
})
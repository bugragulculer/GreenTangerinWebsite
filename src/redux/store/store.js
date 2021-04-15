import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers';

// Creating the store and doing persist configurations.
const persistConfig = { // configuration object for redux-persist
    key: 'root',
	storage, // define which storage to use
	blacklist: ['filter']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const Store = () => {
	const store = createStore(persistedReducer);
	const persistor = persistStore(store);
	return { store, persistor };
};

export default Store
import { combineReducers } from 'redux';
import ForecastsReducer from './forecasts_reducer';

export default combineReducers({
    forecasts: ForecastsReducer
});

/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './scss/app.scss';
import axios from 'axios';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import Button from '@mui/material/Button';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import Search from './components/Search';
import { coordinates } from './api/apiGetCoordinates';
import Loader from './components/Loader';
import ShowTime from './components/ShowTime';
import { getSunriseInfo } from './api/apiGetSunRise';

function App() {
  const [state, setState] = useState({
    Date: Date.now(),
    value: '',
    current: {
    },
    sunrise: '',
    sunset: '',
    loading: false,
    error: false,
    isShow: false,
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const handleDatePickerChange = (e) => {
    console.log('handleDatePickerChange: ', e);
    setState({
      ...state,
      Date: e,
      isShow: false,
    });
  };

  const handleSearchCity = (e) => {
    e.preventDefault();
    setState({
      ...state,
      loading: true,
    });
    axios.get(coordinates(state.value))
      .then((response) => {
        const { data } = response;
        console.log('data', data);
        const { lat, lon } = data[0];
        const current = {
          city: data[0].name,
          country: data[0].country,
          lat: data[0].lat,
          lon: data[0].lon,
        };
        console.log('lat and lon: ', lat, lon);
        setState({
          ...state,
          current,
          isShow: false,
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        console.log(error);

        setState({
          ...state,
          loading: false,
          isShow: false,
          error: true,
          current: {},
        });
      });
  };

  const handleShow = (e) => {
    e.preventDefault();

    axios.get(getSunriseInfo(state.current.lat, state.current.lon, format(new Date(state.Date), 'yyyy-MM-dd')))
      .then((res) => {
        console.log('getSunriseInfo', res.data);

        const { sunrise, sunset } = res.data.results;
        console.log('sunrise', sunrise);
        console.log('sunset', sunset);
        setState({
          ...state,
          sunrise,
          sunset,
          isShow: true,
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        console.log(err);

        setState({
          ...state,
          isShow: false,
          loading: false,
          error: true,
          current: {},
        });
      });
    // const sunrise = '4:32:02 AM';
    // const sunset = '5:24:58 PM';
    // console.log('sunrise', sunrise);
    // console.log('sunset', sunset);

    // setState({
    //   ...state,
    //   isShow: true,
    //   sunrise,
    //   sunset,
    // });

    console.log('isShow clicked:', state);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Search
        value={state.value}
        data={state}
        showResult={(state.weatherInfo || state.error) && true}
        change={handleInputChange}
        submit={handleSearchCity}
      />
      <div className="datepicker-container">
        <DatePicker
          label="Select the Date:"
          value={format(new Date(state.Date), 'yyyy-MM-dd')}
          onChange={handleDatePickerChange}
          animateYearScrolling
        />

      </div>

      {
        state.loading === true
          ? <Loader />
          : (
            <div className="showBtn-container">
              {!state.isShow ? (
                <Button variant="outlined" onClick={handleShow}>Show</Button>
              ) : (
                state.current.country !== undefined
                  ? (
                    <div className="">
                      <ShowTime sunriseTime={state.sunrise} sunsetTime={state.sunset} />
                    </div>
                  )
                  : (state.error
                    ? <p className="error__loc">Sorry! we do not have any information on specified location.</p>
                    : <p className="error__loc">Please Select the location!</p>
                  )
              )}
            </div>
          )
      }
    </MuiPickersUtilsProvider>
  );
}

export default App;

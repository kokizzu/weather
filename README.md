# weather

```
deno run --allow-net weather.ts New York, 10005, Tokyo, São Paulo, Pluto
```

Example output:
```
Weather {
 consolidated_weather: undefined,
 time: undefined,
 sun_rise: undefined,
 sun_set: undefined,
 timezone_name: undefined,
 parent: undefined,
 sources: undefined,
 title: "10005",
 location_type: undefined,
 woeid: undefined,
 latt_long: undefined,
 timezone: undefined,
 location: Location { title: "10005", location_type: "ERROR", woeid: 0, latt_long: undefined }
}
Weather {
 consolidated_weather: undefined,
 time: undefined,
 sun_rise: undefined,
 sun_set: undefined,
 timezone_name: undefined,
 parent: undefined,
 sources: undefined,
 title: "Pluto",
 location_type: undefined,
 woeid: undefined,
 latt_long: undefined,
 timezone: undefined,
 location: Location { title: "Pluto", location_type: "ERROR", woeid: 0, latt_long: undefined }
}
{
 consolidated_weather: [
  {
    id: 5605022547050496,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "SSE",
    created: "2020-05-27T09:16:44.125268Z",
    applicable_date: "2020-05-27",
    min_temp: 15.405000000000001,
    max_temp: 20.765,
    the_temp: 20.6,
    wind_speed: 4.518882913894854,
    wind_direction: 159.1666408057208,
    air_pressure: 1024,
    humidity: 79,
    visibility: 10.209750059651634,
    predictability: 71
   },
  {
    id: 6103042795503616,
    weather_state_name: "Light Rain",
    weather_state_abbr: "lr",
    wind_direction_compass: "SSE",
    created: "2020-05-27T09:16:47.124992Z",
    applicable_date: "2020-05-28",
    min_temp: 16.82,
    max_temp: 19.884999999999998,
    the_temp: 20.405,
    wind_speed: 6.926864009120073,
    wind_direction: 157.16668312112554,
    air_pressure: 1022.5,
    humidity: 88,
    visibility: 8.621525292293008,
    predictability: 75
   },
  {
    id: 6516952686133248,
    weather_state_name: "Light Rain",
    weather_state_abbr: "lr",
    wind_direction_compass: "S",
    created: "2020-05-27T09:16:50.036283Z",
    applicable_date: "2020-05-29",
    min_temp: 18.92,
    max_temp: 22.560000000000002,
    the_temp: 24.03,
    wind_speed: 7.439647619502108,
    wind_direction: 181.66568781397157,
    air_pressure: 1016,
    humidity: 87,
    visibility: 9.76578034279806,
    predictability: 75
   },
  {
    id: 5813341412917248,
    weather_state_name: "Heavy Rain",
    weather_state_abbr: "hr",
    wind_direction_compass: "W",
    created: "2020-05-27T09:16:53.118500Z",
    applicable_date: "2020-05-30",
    min_temp: 19.44,
    max_temp: 25.52,
    the_temp: 25.14,
    wind_speed: 6.319493000925263,
    wind_direction: 264.53680045094507,
    air_pressure: 1011.5,
    humidity: 63,
    visibility: 11.705079833770778,
    predictability: 77
   },
  {
    id: 5910620425682944,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "N",
    created: "2020-05-27T09:16:56.228051Z",
    applicable_date: "2020-05-31",
    min_temp: 16.3,
    max_temp: 22.33,
    the_temp: 19.655,
    wind_speed: 7.614153031177921,
    wind_direction: 350.39597173156835,
    air_pressure: 1017.5,
    humidity: 44,
    visibility: 14.353674540682414,
    predictability: 70
   },
  {
    id: 5625728114622464,
    weather_state_name: "Clear",
    weather_state_abbr: "c",
    wind_direction_compass: "NNW",
    created: "2020-05-27T09:16:59.113688Z",
    applicable_date: "2020-06-01",
    min_temp: 14.275,
    max_temp: 21.33,
    the_temp: 18.89,
    wind_speed: 6.375506442376521,
    wind_direction: 338.5,
    air_pressure: 1021,
    humidity: 36,
    visibility: 9.999726596675416,
    predictability: 68
   }
],
 time: "2020-05-27T06:03:19.728505-04:00",
 sun_rise: "2020-05-27T05:29:21.601535-04:00",
 sun_set: "2020-05-27T20:16:48.506776-04:00",
 timezone_name: "LMT",
 parent: {
  title: "New York",
  location_type: "Region / State / Province",
  woeid: 2347591,
  latt_long: "42.855350,-76.501671"
 },
 sources: [
    {
    title: "BBC",
    slug: "bbc",
    url: "http://www.bbc.co.uk/weather/",
    crawl_rate: 360
   },
    {
    title: "Forecast.io",
    slug: "forecast-io",
    url: "http://forecast.io/",
    crawl_rate: 480
   },
    {
    title: "HAMweather",
    slug: "hamweather",
    url: "http://www.hamweather.com/",
    crawl_rate: 360
   },
    {
    title: "Met Office",
    slug: "met-office",
    url: "http://www.metoffice.gov.uk/",
    crawl_rate: 180
   },
    {
    title: "OpenWeatherMap",
    slug: "openweathermap",
    url: "http://openweathermap.org/",
    crawl_rate: 360
   },
    {
    title: "Weather Underground",
    slug: "wunderground",
    url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
    crawl_rate: 720
   },
    {
    title: "World Weather Online",
    slug: "world-weather-online",
    url: "http://www.worldweatheronline.com/",
    crawl_rate: 360
   }
  ],
 title: "New York",
 location_type: "City",
 woeid: 2459115,
 latt_long: "40.71455,-74.007118",
 timezone: "US/Eastern"
}
{
 consolidated_weather: [
  {
    id: 5151681434091520,
    weather_state_name: "Showers",
    weather_state_abbr: "s",
    wind_direction_compass: "E",
    created: "2020-05-27T09:20:47.195429Z",
    applicable_date: "2020-05-27",
    min_temp: 20.315,
    max_temp: 24.865000000000002,
    the_temp: 24.805,
    wind_speed: 3.9917598760942763,
    wind_direction: 96.20602311300311,
    air_pressure: 1001.5,
    humidity: 63,
    visibility: 9.356296727113655,
    predictability: 73
   },
  {
    id: 6359359531515904,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "SE",
    created: "2020-05-27T09:20:50.106631Z",
    applicable_date: "2020-05-28",
    min_temp: 18.740000000000002,
    max_temp: 24.255000000000003,
    the_temp: 23.505,
    wind_speed: 4.988499426063788,
    wind_direction: 127.83189109324583,
    air_pressure: 1008,
    humidity: 52,
    visibility: 12.812363298337708,
    predictability: 71
   },
  {
    id: 6130449250254848,
    weather_state_name: "Showers",
    weather_state_abbr: "s",
    wind_direction_compass: "SE",
    created: "2020-05-27T09:20:53.112133Z",
    applicable_date: "2020-05-29",
    min_temp: 18.009999999999998,
    max_temp: 26.375,
    the_temp: 25.02,
    wind_speed: 3.949297246888836,
    wind_direction: 144.7057210661636,
    air_pressure: 1013,
    humidity: 48,
    visibility: 13.482201443569554,
    predictability: 73
   },
  {
    id: 5241025679327232,
    weather_state_name: "Showers",
    weather_state_abbr: "s",
    wind_direction_compass: "S",
    created: "2020-05-27T09:20:56.030347Z",
    applicable_date: "2020-05-30",
    min_temp: 19.060000000000002,
    max_temp: 26.27,
    the_temp: 25.075,
    wind_speed: 6.404321828343805,
    wind_direction: 171.5206981554407,
    air_pressure: 1019,
    humidity: 50,
    visibility: 12.948754275033803,
    predictability: 73
   },
  {
    id: 6087366919847936,
    weather_state_name: "Showers",
    weather_state_abbr: "s",
    wind_direction_compass: "S",
    created: "2020-05-27T09:20:59.146638Z",
    applicable_date: "2020-05-31",
    min_temp: 19.36,
    max_temp: 24.88,
    the_temp: 24.52,
    wind_speed: 7.371710679267743,
    wind_direction: 179.66762222421085,
    air_pressure: 1019,
    humidity: 55,
    visibility: 12.187885250139187,
    predictability: 73
   },
  {
    id: 6053743550267392,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "S",
    created: "2020-05-27T09:21:02.135431Z",
    applicable_date: "2020-06-01",
    min_temp: 18.45,
    max_temp: 24.875,
    the_temp: 23.86,
    wind_speed: 5.627313091545375,
    wind_direction: 175,
    air_pressure: 1015,
    humidity: 63,
    visibility: 9.999726596675416,
    predictability: 71
   }
],
 time: "2020-05-27T19:03:20.006060+09:00",
 sun_rise: "2020-05-27T04:28:06.225917+09:00",
 sun_set: "2020-05-27T18:48:13.258016+09:00",
 timezone_name: "JST",
 parent: {
  title: "Japan",
  location_type: "Country",
  woeid: 23424856,
  latt_long: "37.487598,139.838287"
 },
 sources: [
    {
    title: "BBC",
    slug: "bbc",
    url: "http://www.bbc.co.uk/weather/",
    crawl_rate: 360
   },
    {
    title: "Forecast.io",
    slug: "forecast-io",
    url: "http://forecast.io/",
    crawl_rate: 480
   },
    {
    title: "HAMweather",
    slug: "hamweather",
    url: "http://www.hamweather.com/",
    crawl_rate: 360
   },
    {
    title: "Met Office",
    slug: "met-office",
    url: "http://www.metoffice.gov.uk/",
    crawl_rate: 180
   },
    {
    title: "OpenWeatherMap",
    slug: "openweathermap",
    url: "http://openweathermap.org/",
    crawl_rate: 360
   },
    {
    title: "Weather Underground",
    slug: "wunderground",
    url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
    crawl_rate: 720
   },
    {
    title: "World Weather Online",
    slug: "world-weather-online",
    url: "http://www.worldweatheronline.com/",
    crawl_rate: 360
   }
  ],
 title: "Tokyo",
 location_type: "City",
 woeid: 1118370,
 latt_long: "35.670479,139.740921",
 timezone: "Asia/Tokyo"
}
{
 consolidated_weather: [
  {
    id: 6428844586172416,
    weather_state_name: "Clear",
    weather_state_abbr: "c",
    wind_direction_compass: "SW",
    created: "2020-05-27T09:27:05.610369Z",
    applicable_date: "2020-05-27",
    min_temp: 9.17,
    max_temp: 21.265,
    the_temp: 19.275,
    wind_speed: 4.236047784196294,
    wind_direction: 217.39969401454843,
    air_pressure: 1019,
    humidity: 56,
    visibility: 15.027551598663804,
    predictability: 68
   },
  {
    id: 5314871736401920,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "ENE",
    created: "2020-05-27T09:27:08.199300Z",
    applicable_date: "2020-05-28",
    min_temp: 10.045,
    max_temp: 22.095,
    the_temp: 19.535,
    wind_speed: 3.669630619809645,
    wind_direction: 78.20436771058367,
    air_pressure: 1022,
    humidity: 60,
    visibility: 13.667680744452397,
    predictability: 70
   },
  {
    id: 6440771643244544,
    weather_state_name: "Clear",
    weather_state_abbr: "c",
    wind_direction_compass: "NNW",
    created: "2020-05-27T09:27:11.000639Z",
    applicable_date: "2020-05-29",
    min_temp: 10.53,
    max_temp: 25.439999999999998,
    the_temp: 22.585,
    wind_speed: 2.732259297012116,
    wind_direction: 334.75,
    air_pressure: 1020,
    humidity: 54,
    visibility: 14.500318142050425,
    predictability: 68
   },
  {
    id: 4564956554985472,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "NW",
    created: "2020-05-27T09:27:14.065188Z",
    applicable_date: "2020-05-30",
    min_temp: 11.83,
    max_temp: 24.490000000000002,
    the_temp: 23.485,
    wind_speed: 4.102735671966383,
    wind_direction: 315.3326164881278,
    air_pressure: 1018.5,
    humidity: 57,
    visibility: 14.145825876879027,
    predictability: 70
   },
  {
    id: 6705448533098496,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "W",
    created: "2020-05-27T09:27:17.121475Z",
    applicable_date: "2020-05-31",
    min_temp: 13.04,
    max_temp: 24.505,
    the_temp: 23.46,
    wind_speed: 4.818937913340757,
    wind_direction: 280.8005031457935,
    air_pressure: 1017,
    humidity: 62,
    visibility: 13.749391056231607,
    predictability: 70
   },
  {
    id: 4817429899247616,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "ESE",
    created: "2020-05-27T09:27:20.017264Z",
    applicable_date: "2020-06-01",
    min_temp: 14.835,
    max_temp: 23.395,
    the_temp: 21.21,
    wind_speed: 3.1751574803149607,
    wind_direction: 103.5,
    air_pressure: 1018,
    humidity: 67,
    visibility: 9.999726596675416,
    predictability: 70
   }
],
 time: "2020-05-27T07:03:21.023781-03:00",
 sun_rise: "2020-05-27T06:39:14.760498-03:00",
 sun_set: "2020-05-27T17:28:19.780747-03:00",
 timezone_name: "LMT",
 parent: {
  title: "Brazil",
  location_type: "Country",
  woeid: 23424768,
  latt_long: "-14.242920,-54.387829"
 },
 sources: [
  {
    title: "BBC",
    slug: "bbc",
    url: "http://www.bbc.co.uk/weather/",
    crawl_rate: 360
   },
  {
    title: "Forecast.io",
    slug: "forecast-io",
    url: "http://forecast.io/",
    crawl_rate: 480
   },
  {
    title: "Met Office",
    slug: "met-office",
    url: "http://www.metoffice.gov.uk/",
    crawl_rate: 180
   },
  {
    title: "OpenWeatherMap",
    slug: "openweathermap",
    url: "http://openweathermap.org/",
    crawl_rate: 360
   },
  {
    title: "World Weather Online",
    slug: "world-weather-online",
    url: "http://www.worldweatheronline.com/",
    crawl_rate: 360
   }
],
 title: "São Paulo",
 location_type: "City",
 woeid: 455827,
 latt_long: "-23.562880,-46.654659",
 timezone: "America/Sao_Paulo"
}
```

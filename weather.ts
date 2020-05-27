// this is Deno's typescript, requires Deno to run

//const API_REQUESTER = 'http://ip-api.com/json';
const API_PREFIX = 'https://www.metaweather.com';
const API_LOCATION = '/api/location/search/?query=';
const API_WEATHER = '/api/location/';
// @ts-ignore
const args = Deno.args.join(' ').split(',');

export class Location {
  public title: string;
  public location_type: string;
  public woeid: number;
  public latt_long: string;
  
  public static Error(title: string) {
    return new Location({title: title, woeid: 0, location_type: 'ERROR'})
  }
  
  public constructor(d: any) {
    this.title = d.title;
    this.location_type = d.location_type;
    this.woeid = d.woeid;
    this.latt_long = d.latt_long;
  }
  
	public static ByName = async function (location: string): Promise<Location> {
    let loc = location.trim();
    if(Location.IsZipCode(loc)) {
    	// TODO: get location from  first
    } 
    let url = API_PREFIX + API_LOCATION + loc;
    console.log(url);
    let res = await fetch(url);
    if (res.statusText == 'OK') {
      let arr = await res.json();
      if (arr.length) { // get first location
        return arr[0];
      }
    }
    return Location.Error(loc)
  };
  
  public static IsZipCode(str: string): boolean {
  	return (parseInt(str.trim()) <= 99999);
  }
}

// from metaweather API
export class ConsolidatedWeatherEntity {
  public id: number;
  public weather_state_name: string;
  public weather_state_abbr: string;
  public wind_direction_compass: string;
  public created: string;
  public applicable_date: string;
  public min_temp: number;
  public max_temp: number;
  public the_temp: number;
  public wind_speed: number;
  public wind_direction: number;
  public air_pressure: number;
  public humidity: number;
  public visibility: number;
  public predictability: number;
  
  public constructor(d: any) {
    this.id = d.id;
    this.weather_state_name = d.weather_state_name;
    this.weather_state_abbr = d.weather_state_abbr;
    this.wind_direction_compass = d.wind_direction_compass;
    this.created = d.created;
    this.applicable_date = d.applicable_date;
    this.min_temp = d.min_temp;
    this.max_temp = d.max_temp;
    this.the_temp = d.the_temp;
    this.wind_speed = d.wind_speed;
    this.wind_direction = d.wind_direction;
    this.air_pressure = d.air_pressure;
    this.humidity = d.humidity;
    this.visibility = d.visibility;
    this.predictability = d.predictability;
  }
}

// from metaweather API
export class Parent {
  public title: string;
  public location_type: string;
  public woeid: number;
  public latt_long: string;
  
  public constructor(d: any) {
    this.title = d.title;
    this.location_type = d.location_type;
    this.woeid = d.woeid;
    this.latt_long = d.latt_long;
  }
}

// from metaweather API
export class SourcesEntity {
  public title: string;
  public slug: string;
  public url: string;
  public crawl_rate: number;
  
  public constructor(d: any) {
    this.title = d.title;
    this.slug = d.slug;
    this.url = d.url;
    this.crawl_rate = d.crawl_rate;
  }
}

export class Weather {
  public consolidated_weather?: (ConsolidatedWeatherEntity)[] | null;
  public time: string;
  public sun_rise: string;
  public sun_set: string;
  public timezone_name: string;
  public parent: Parent;
  public sources?: (SourcesEntity)[] | null;
  public title: string;
  public location_type: string;
  public woeid: number;
  public latt_long: string;
  public timezone: string;
  public location: Location | null;
  
  public static Error(loc: Location, title: string): Weather {
    let res = new Weather({title:title});
    res.location = loc;
    return res;
  }
  
  public static ByLocation = async function (loc: Location): Promise<Weather> {
    if (!loc || !loc.woeid) return Weather.Error(loc, 'Invalid WoE ID');
    let res = await fetch(API_PREFIX + API_WEATHER + loc.woeid + '/');
    if (res.statusText == 'OK') {
	    return await res.json();
    }
    return Weather.Error(loc, 'Unknown Weather');
  };
  
  public constructor(d: any) {
    this.consolidated_weather = d.consolidated_weather;
    this.time = d.time;
    this.sun_rise = d.sun_rise;
    this.sun_set = d.sun_set;
    this.timezone_name = d.timezone_name;
    this.parent = d.parent;
    this.sources = d.sources;
    this.title = d.title;
    this.location_type = d.location_type;
    this.woeid = d.woeid;
    this.latt_long = d.latt_long;
    this.timezone = d.timezone;
    this.location = null;
  }
}

for (let z in args) {
  (function (location) {
    Location.ByName(location)
      .then(Weather.ByLocation)
      .then(console.log)
      .catch((err) => {
        console.log(location + err)
      })
  })(args[z])
}

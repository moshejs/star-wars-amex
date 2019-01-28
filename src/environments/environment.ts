// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  characters: [
    {
      'name': 'Luke Skywalker',
      'url': 'https://swapi.co/api/people/1/'
    },
    {
      'name': 'Darth Vader',
      'url': 'https://swapi.co/api/people/4/'
    },
    {
      'name': 'Obi-wan Kenobi',
      'url': 'https://swapi.co/api/people/unknown/'
    },
    {
      'name': 'R2-D2',
      'url': 'https://swapi.co/api/people/3/'
    }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

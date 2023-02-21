import { ListOfFlights } from '@data/src/lib/models';
import { map, Observable } from 'rxjs';
import { FullVsPartConfig } from 'src/app/public/components';

export const FullVsPartOperator = (
  data$: Observable<ListOfFlights[]>,
): Observable<FullVsPartConfig> =>
  data$.pipe(
    map((flights: ListOfFlights[]) => {
      const totals = flights.reduce(
        (acc: any, flight: ListOfFlights) => {
          const month = new Date(flight.day).getMonth();
          if (acc['part'][month] === undefined) {
            acc['part'][month] = 0;
          }

          if (acc['full'][month] === undefined) {
            acc['full'][month] = 0;
          }

          acc['part'][month] += Number(flight.ptEmployees);
          acc['full'][month] += Number(flight.ftEmployees);
          return acc;
        },
        {
          full: [],
          part: [],
        },
      );

      return {
        title: 'Empleados por función',
        full: totals['full'],
        part: totals['part'],
      };
    }),
  );

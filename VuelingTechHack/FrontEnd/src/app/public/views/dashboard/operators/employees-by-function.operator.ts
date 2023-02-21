import { ListOfFlights } from '@data/src/lib/models';
import { map, Observable } from 'rxjs';
import { EmployeesByFunctionConfig } from 'src/app/public/components';

export const EmployeesByFunctionOperator = (
  data$: Observable<ListOfFlights[]>,
): Observable<EmployeesByFunctionConfig> =>
  data$.pipe(
    map((flights: ListOfFlights[]) => {
      const totals = flights.reduce((acc: any, flight: ListOfFlights) => {
        if (acc[flight.handlingFuntion] === undefined) {
          acc[flight.handlingFuntion] = 0;
        }

        acc[flight.handlingFuntion]++;
        return acc;
      }, {});

      return {
        title: 'Empleados por función',
        labels: Object.keys(totals),
        data: Object.values(totals),
        datasetLabel: 'Total de Empleados',
      };
    }),
  );

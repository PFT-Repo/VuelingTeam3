export interface ListOfFLights {
  day: string;
  hour: string;
  handlingFunction: string;
  fullTimeEmployers: string;
  partTimeEmployeers: string;
  totalEmployers: string;
  fullTimeEmployersCost: string;
  partTimeEmployeersCost: string;
  totalCost: string;
}


export interface ListFlights {
  dt_flight:          Date;
  cd_flight_number:   number;
  cd_airport_dep:     CDAirport;
  cd_airport_arr:     CDAirport;
  handling_function:  HandlingFunction;
  ts_operation_start: Date;
  ts_operation_end:   Date;
  required_employees: number;
}

export enum CDAirport {
  Ams = "AMS",
  Bcn = "BCN",
  Bio = "BIO",
  Bru = "BRU",
  Fco = "FCO",
  Fue = "FUE",
  Ibz = "IBZ",
  Lgw = "LGW",
  Ory = "ORY",
  Pmi = "PMI",
  Svq = "SVQ",
  Tfn = "TFN",
  Vlc = "VLC",
}

export enum HandlingFunction {
  Coordinador = "COORDINADOR",
  Equipajes = "EQUIPAJES",
  Jardinera = "JARDINERA",
}


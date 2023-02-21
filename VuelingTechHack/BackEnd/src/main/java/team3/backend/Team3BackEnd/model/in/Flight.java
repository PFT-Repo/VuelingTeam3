package team3.backend.Team3BackEnd.model.in;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Flight {

    private Date dateFlight;
    private String FlightNum;
    private String AirportDeparture;
    private String AirportArrival;

}

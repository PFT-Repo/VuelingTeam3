package team3.backend.Team3BackEnd.model.in;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "GroundHandling")
public class GroundHandlingInput {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private Date dt_flight;
    private String cd_flight_number;
    private String cd_airport_dep;
    private String cd_airport_arr;
    private HandlingFunction handling_function;
    private Date ts_operation_start;
    private Date ts_operation_end;
    private int required_employees;



}

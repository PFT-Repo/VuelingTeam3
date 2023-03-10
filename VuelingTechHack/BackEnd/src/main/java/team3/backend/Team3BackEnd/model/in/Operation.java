package team3.backend.Team3BackEnd.model.in;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "Operation")
public class Operation {

    private String dt_flight;
    private int hour;
    private  int required_employees;
    private HandlingFunction handling_function;

}

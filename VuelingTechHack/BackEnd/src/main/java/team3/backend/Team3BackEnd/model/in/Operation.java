package team3.backend.Team3BackEnd.model.in;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "Operation")
public class Operation {
    private Date date;

}

package team3.backend.Team3BackEnd.model.in;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "workers")
public class Worker {

    private String name;
    private HandlingFunction handlingFunction;
    private WorkTime workTime;

}

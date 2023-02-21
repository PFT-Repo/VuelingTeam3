package team3.backend.Team3BackEnd.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import team3.backend.Team3BackEnd.model.in.GroundHandlingInput;

public interface GHOrepository extends MongoRepository<GroundHandlingInput, String> {
}

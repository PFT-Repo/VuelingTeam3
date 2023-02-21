package team3.backend.Team3BackEnd.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import team3.backend.Team3BackEnd.model.in.GroundHandlingInput;
import team3.backend.Team3BackEnd.model.in.User;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmail(String email);
}

package team3.backend.Team3BackEnd.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import team3.backend.Team3BackEnd.model.in.Operation;

public interface OperationRepository extends MongoRepository<Operation, String> {
}

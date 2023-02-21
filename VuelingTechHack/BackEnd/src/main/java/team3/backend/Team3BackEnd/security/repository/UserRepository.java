package team3.backend.Team3BackEnd.security.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import team3.backend.Team3BackEnd.security.domain.Usuario;
import team3.backend.Team3BackEnd.security.dto.Rol;



public interface UserRepository extends MongoRepository<Usuario, String>{

	Optional<Usuario> findByUsername(String username);

	boolean existsByUsername(String username);
	List <Usuario> findByRoles(Rol rol);

}

package team3.backend.Team3BackEnd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import team3.backend.Team3BackEnd.model.out.Operation;
import team3.backend.Team3BackEnd.service.GHOServiceImpl;

@RestController("/vueling/team3")
@CrossOrigin(origins = "http://localhost:4500")
public interface GHOcontrollers {
	

	@Autowired
	GHOServiceImpl ghoService;
	
	@GetMapping("/getData")
	public List<Operation> getOperations(){
		
		List<Operation> operations=ghoService.getOperations();
		
		
		return operations;
		
	}
	
	
}

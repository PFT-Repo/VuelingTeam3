package team3.backend.Team3BackEnd.service;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team3.backend.Team3BackEnd.model.in.Operation;
import team3.backend.Team3BackEnd.model.out.OperationDto;
import team3.backend.Team3BackEnd.repository.GHOrepository;
import team3.backend.Team3BackEnd.repository.OperationRepository;

@Service
public class GHOService{

	@Autowired
	GHOrepository repository;
	@Autowired
	OperationRepository repoOperation;
	@Autowired
	ModelMapper modelMapper;


	public List<Operation> getEmployeesByhandlingFuntion(String date, String handlingFuntion) {

		List<Operation> operationList = repoOperation.findAll();
		List<OperationDto> operationDTO=new ArrayList<OperationDto>();

		return operationList.stream().filter(operation -> operation.getDt_flight().equals(date)&&operation.getHandlingFunction().toString().equals(handlingFuntion)).collect(Collectors.toList());


	}

}
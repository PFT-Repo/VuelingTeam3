package team3.backend.Team3BackEnd.service;

//import java.text.ParseException;
//import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.util.ArrayList;
//import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import team3.backend.Team3BackEnd.model.out.OperationDto;
import team3.backend.Team3BackEnd.repository.GHOrepository;

@Service
public class GHOService{
	
	@Autowired
	GHOrepository repository;

	public List<OperationDto> getOperations() {
		
		List<OperationDto> list=new ArrayList<OperationDto>();
		
		//SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
		//Date date = formato.parse("23/11/2023");
		
		
		OperationDto oDto1=new OperationDto ("23/11/2023", LocalTime.of(10, 00, 00), "Jardinero", 1, 2, 3, 6, 7.5, 21);
		
		list.add(oDto1);
		
		return list;
	}

}

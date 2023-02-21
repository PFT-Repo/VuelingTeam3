package team3.backend.Team3BackEnd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import team3.backend.Team3BackEnd.model.in.Operation;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team3.backend.Team3BackEnd.model.out.OperationDto;
import team3.backend.Team3BackEnd.service.GHOService;

@RestController
@RequestMapping("/vueling/team3")
@CrossOrigin(origins = "http://localhost:4500")
public class GHOcontrollers {
@Autowired
	GHOService ghoService;


		@GetMapping("/getEmployeesByhandlingFuntion")
		public List<Operation> getEmployeesByhandlingFuntion(@Validated @RequestParam String date, @Validated @RequestParam String handlingFuntion) {

		return ghoService.getEmployeesByhandlingFuntion(date, handlingFuntion);
		}

		}
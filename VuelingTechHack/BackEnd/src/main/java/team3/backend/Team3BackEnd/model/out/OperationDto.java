package team3.backend.Team3BackEnd.model.out;

import java.time.LocalTime;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OperationDto {
	
	private Date day;
	private LocalTime hour;
	private String handlingFuntion;
	private int ftEmployees;
	private int ptEmployees;
	private int totalEmployees;
	private double ftEmployeesCost;
	private double ptEmployeesCost;
	private double totalCost;

}

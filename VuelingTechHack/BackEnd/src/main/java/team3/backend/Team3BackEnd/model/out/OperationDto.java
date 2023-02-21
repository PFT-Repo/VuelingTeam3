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
	
	private String date;
	private LocalTime hour;
	private String handlingFuntion;
	private int ftEmployees;
	private int ptEmployees;
	private int totalEmployees;
	private double ftEmployeesCost;
	private double ptEmployeesCost;
	private double totalCost;
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public LocalTime getHour() {
		return hour;
	}
	public void setHour(LocalTime hour) {
		this.hour = hour;
	}
	public String getHandlingFuntion() {
		return handlingFuntion;
	}
	public void setHandlingFuntion(String handlingFuntion) {
		this.handlingFuntion = handlingFuntion;
	}
	public int getFtEmployees() {
		return ftEmployees;
	}
	public void setFtEmployees(int ftEmployees) {
		this.ftEmployees = ftEmployees;
	}
	public int getPtEmployees() {
		return ptEmployees;
	}
	public void setPtEmployees(int ptEmployees) {
		this.ptEmployees = ptEmployees;
	}
	public int getTotalEmployees() {

		totalEmployees=ftEmployees+ptEmployees;
		return totalEmployees;
	}

	public double getFtEmployeesCost() {

		return ftEmployeesCost;
	}
	public void setFtEmployeesCost(double ftEmployeesCost) {
		this.ftEmployeesCost = ftEmployeesCost;
	}
	public double getPtEmployeesCost() {
		return ptEmployeesCost;
	}
	public void setPtEmployeesCost(double ptEmployeesCost) {
		this.ptEmployeesCost = ptEmployeesCost;
	}
	public double getTotalCost() {

		totalCost=ptEmployeesCost+ftEmployeesCost;
		return totalCost;
	}


}

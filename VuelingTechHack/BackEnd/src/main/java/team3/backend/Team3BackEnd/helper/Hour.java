package team3.backend.Team3BackEnd.helper;

import lombok.*;
import team3.backend.Team3BackEnd.model.in.HandlingFunction;
import team3.backend.Team3BackEnd.model.in.Worker;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Hour {
    private int hour;
    private List<Worker> workersPerHour;
    private HandlingFunction handlingFunction;
    private int workersNeeded;
}

package team3.backend.Team3BackEnd.helper;

import lombok.*;
import team3.backend.Team3BackEnd.model.in.HandlingFunction;
import team3.backend.Team3BackEnd.model.in.WorkTime;
import team3.backend.Team3BackEnd.model.in.Worker;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import java.util.stream.Collectors;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Calculate {
    private List<Hour> jardineraHours;
    private List<Hour> equipajesHours;
    private List<Hour> coordinadorHours;
    private List<Worker> jardineraWorkers;
    private List<Worker> equipajesWorkers;
    private List<Worker> coordinadorWorkers;
    public double CalculateTotalCostv1(){
        double totalCost = 0;
        ListIterator<Integer> jardineraHoursList = jardineraHours.stream().map(hour -> hour.getWorkersNeeded()).collect(Collectors.toList()).listIterator();
        int bestSalary = checkSalary(jardineraWorkers.stream().filter(worker -> worker.getHandlingFunction().equals(HandlingFunction.JARDINERA)).findFirst().get());
        while (jardineraHoursList.hasNext()){
            int hour = jardineraHoursList.next();
            List<Integer> remainingHours = new ArrayList<>();
            jardineraHoursList.forEachRemaining(integer -> remainingHours.add(integer));
            if (jardineraHoursList.next() > 0){
                if (bestSalary == 1){
                    boolean found = false;
                    List<Worker> partTimeWorkers = jardineraWorkers.stream().filter(worker -> worker.getWorkTime().equals(WorkTime.PARTTIME)).collect(Collectors.toList());
                    List<Worker> workersOnThisHour = jardineraHours.get(hour).getWorkersPerHour();
                   do {
                       Worker availibleWorker;
                       for (Worker w: workersOnThisHour
                            ) {
                           for (Worker ptw: partTimeWorkers
                                ) {
                               if (w.getId() == ptw.getId()){
                                  // availibleWorkers.add(w);
                               }
                           }
                       }
                   } while (found);
                }
            }
        }


        return  totalCost;
    }
    /*private List<Integer> checkWorkersNeededperHour(List<Hour> hours){
        List<Integer> workersperHour = new ArrayList<>();
        for (Hour hour: hours){
                workersperHour.add(hour.getWorkersNeeded());
            }
        return  workersperHour;
    }*/
    // 0 = FullTimeBetter 1 = PartTimeBetter
    private int checkSalary(Worker worker) {
        if (worker.getFTsalary() < worker.getPTsalary()){
            return 0;
        } else {
            return 1;
        }
    }
    private int checkRemainingNeededHours(List<Integer> hours){
        int countFreeHours = 0;
        for (int h: hours
             ) {
            if (h >= 0 ){
                countFreeHours++;
            }
        }
        return countFreeHours;
    }
}

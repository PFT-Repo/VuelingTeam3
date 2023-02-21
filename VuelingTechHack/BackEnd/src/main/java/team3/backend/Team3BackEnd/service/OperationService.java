package team3.backend.Team3BackEnd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team3.backend.Team3BackEnd.model.in.Operation;
import team3.backend.Team3BackEnd.repository.OperationRepository;

import java.util.List;

@Service
public class OperationService {
    @Autowired
    OperationRepository operationRepository;
}

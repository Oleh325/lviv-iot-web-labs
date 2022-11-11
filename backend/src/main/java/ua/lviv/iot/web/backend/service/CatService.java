package ua.lviv.iot.web.backend.service;

import org.springframework.stereotype.Service;
import ua.lviv.iot.web.backend.domain.Cat;

import java.util.List;

@Service
public interface CatService extends GeneralService<Cat, Integer> {

    List<Cat> findWithFilter(String cuteness, String color, String weight);

}

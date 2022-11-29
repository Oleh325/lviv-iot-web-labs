package ua.lviv.iot.web.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.lviv.iot.web.backend.domain.Cat;
import ua.lviv.iot.web.backend.exception.CatNotFoundException;
import ua.lviv.iot.web.backend.repository.CatRepository;
import ua.lviv.iot.web.backend.service.CatService;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CatServiceImpl implements CatService {

    private CatRepository catRepository;

    public List<Cat> findAll() {
        List<Cat> cats = catRepository.findAll();
        for (Cat cat : cats) {
            if (cat.getImagesrc() == null || cat.getImagesrc().isEmpty()) {
                cat.setImagesrc("https://cataas.com/cat");
            }
        }
        return cats;
    }

    public List<Cat> findWithFilter(String cuteness, String color, String weight) {
        Set<Cat> catsCuteness;
        Set<Cat> catsColor;
        Set<Cat> catsWeight;
        if (cuteness.equals("all")) {
            catsCuteness = Set.copyOf(catRepository.findAll());
        } else {
            Integer cutenessFrom = Integer.parseInt(cuteness.split("to")[0]);
            Integer cutenessTo = Integer.parseInt(cuteness.split("to")[1]);
            catsCuteness = Set.copyOf(catRepository.findWithFilterCuteness(cutenessFrom, cutenessTo == 100 ? 101 : cutenessTo));
        }
        if (color.equals("all")) {
            catsColor = Set.copyOf(catRepository.findAll());
        } else {
            catsColor = Set.copyOf(catRepository.findWithFilterColor(color));
        }
        if (weight.equals("all")) {
            catsWeight = Set.copyOf(catRepository.findAll());
        } else {
            if (weight.equals("10plus")) {
                catsWeight = Set.copyOf(catRepository.findWithFilterWeightFrom(10.0));
            } else {
                Double weightFrom = Double.parseDouble(weight.split("to")[0]);
                Double weightTo = Double.parseDouble(weight.split("to")[1]);
                catsWeight = Set.copyOf(catRepository.findWithFilterWeight(weightFrom, weightTo));
            }
        }

        Set<Cat> cats = new HashSet<>(Set.copyOf(catRepository.findAll()));
        cats.retainAll(catsCuteness);
        cats.retainAll(catsColor);
        cats.retainAll(catsWeight);
        for (Cat cat : cats) {
            if (cat.getImagesrc() == null || cat.getImagesrc().isEmpty()) {
                cat.setImagesrc("https://cataas.com/cat");
            }
        }

        return cats.stream().toList();
    }

    public Cat findById(Integer id) {
        Cat cat = catRepository.findById(id)
                .orElseThrow(() -> new CatNotFoundException(id));
        if (cat.getImagesrc() == null || cat.getImagesrc().isEmpty()) {
            cat.setImagesrc("https://cataas.com/cat");
        }
        return cat;
    }

    @Transactional
    public Cat create(Cat cat) {
        catRepository.save(cat);
        return cat;
    }

    @Transactional
    public void update(Integer id, Cat uCat) {
        Cat cat = catRepository.findById(id)
                .orElseThrow(() -> new CatNotFoundException(id));
        cat.setTitle(cat.getTitle());
        cat.setDescription(cat.getDescription());
        cat.setCuteness(cat.getCuteness());
        cat.setWeight(cat.getWeight());
        cat.setPrice(cat.getPrice());
        cat.setColor(cat.getColor());
        cat.setOptions(cat.getOptions());
        cat.setImagesrc(cat.getImagesrc());
        catRepository.save(cat);
    }

    @Transactional
    public void delete(Integer id) {
        Cat cat = catRepository.findById(id)
                .orElseThrow(() -> new CatNotFoundException(id));
        catRepository.delete(cat);
    }
}


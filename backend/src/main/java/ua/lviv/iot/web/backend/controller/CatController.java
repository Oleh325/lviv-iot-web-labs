package ua.lviv.iot.web.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.web.backend.domain.Cat;
import ua.lviv.iot.web.backend.dto.CatDTO;
import ua.lviv.iot.web.backend.dto.assembler.CatDTOAssembler;
import ua.lviv.iot.web.backend.service.CatService;

import java.util.List;

@RestController
@RequestMapping("/api/cats")
public class CatController {

    @Autowired
    private CatService catService;
    @Autowired
    private CatDTOAssembler catDTOAssembler;

    @GetMapping("/{catId}")
    public ResponseEntity<CatDTO> getCat(@PathVariable Integer catId) {
        Cat cat = catService.findById(catId);
        CatDTO catDTO = catDTOAssembler.toModel(cat);
        return new ResponseEntity<>(catDTO, HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<CollectionModel<CatDTO>> getAllCats() {
        List<Cat> cats = catService.findAll();
        CollectionModel<CatDTO> catDTOs = catDTOAssembler.toCollectionModel(cats);
        return new ResponseEntity<>(catDTOs, HttpStatus.OK);
    }

    @GetMapping("/filters")
    public ResponseEntity<CollectionModel<CatDTO>> getCatsByFilters(@RequestParam(defaultValue = "all") String cuteness,
                                                                   @RequestParam(defaultValue = "all") String color,
                                                                   @RequestParam(defaultValue = "all") String weight) {
        List<Cat> cats = catService.findWithFilter(cuteness, color, weight);
        CollectionModel<CatDTO> catDTOs = catDTOAssembler.toCollectionModel(cats);
        return new ResponseEntity<>(catDTOs, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<CatDTO> addCat(@RequestBody Cat cat) {
        Cat newCat = catService.create(cat);
        CatDTO catDTO = catDTOAssembler.toModel(newCat);
        return new ResponseEntity<>(catDTO, HttpStatus.CREATED);
    }

    @PutMapping("/{catId}")
    public ResponseEntity<?> updateCat(@RequestBody Cat uCat, @PathVariable Integer catId) {
        catService.update(catId, uCat);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{catId}")
    public ResponseEntity<?> deleteCat(@PathVariable Integer catId) {
        catService.delete(catId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}


package ua.lviv.iot.web.backend.dto.assembler;

import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;
import ua.lviv.iot.web.backend.controller.CatController;
import ua.lviv.iot.web.backend.domain.Cat;
import ua.lviv.iot.web.backend.dto.CatDTO;

import java.util.Arrays;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@Component
public class CatDTOAssembler implements RepresentationModelAssembler<Cat, CatDTO> {

    @Override
    public CatDTO toModel(Cat entity) {
        CatDTO catDTO = CatDTO.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .description(entity.getDescription())
                .cuteness(entity.getCuteness())
                .weight(entity.getWeight())
                .price(entity.getPrice())
                .color(entity.getColor())
                .options(Arrays.stream(entity.getOptions().split(", ")).toList())
                .imagesrc(entity.getImagesrc())
                .build();
        Link selfLink = linkTo(methodOn(CatController.class).getCat(catDTO.getId())).withSelfRel();
        catDTO.add(selfLink);
        return catDTO;
    }

    @Override
    public CollectionModel<CatDTO> toCollectionModel(Iterable<? extends Cat> entities) {
        CollectionModel<CatDTO> catDTOs = RepresentationModelAssembler.super.toCollectionModel(entities);
        Link selfLink = linkTo(methodOn(CatController.class).getAllCats()).withSelfRel();
        catDTOs.add(selfLink);
        return catDTOs;
    }

    public CollectionModel<CatDTO> toCollectionModel(Iterable<? extends Cat> entities, Link link) {
        CollectionModel<CatDTO> catDTOs = RepresentationModelAssembler.super.toCollectionModel(entities);
        catDTOs.add(link);
        return catDTOs;
    }
}


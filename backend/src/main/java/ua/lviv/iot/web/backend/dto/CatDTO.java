package ua.lviv.iot.web.backend.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import org.springframework.hateoas.RepresentationModel;
import org.springframework.hateoas.server.core.Relation;

import java.util.List;

@Builder
@Getter
@EqualsAndHashCode(callSuper = false)
@JsonInclude(JsonInclude.Include.NON_NULL)
@Relation(itemRelation = "cat", collectionRelation = "cats")
public class CatDTO extends RepresentationModel<CatDTO> {
    private final Integer id;
    private final String title;
    private final String description;
    private final Integer cuteness;
    private final Double weight;
    private final Integer price;
    private final String color;
    private final List<String> options;
    private final String imagesrc;
}


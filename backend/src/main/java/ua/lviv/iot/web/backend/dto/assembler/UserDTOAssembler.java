package ua.lviv.iot.web.backend.dto.assembler;

import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.stereotype.Component;
import ua.lviv.iot.web.backend.domain.Role;
import ua.lviv.iot.web.backend.domain.User;
import ua.lviv.iot.web.backend.dto.UserDTO;

@Component
public class UserDTOAssembler implements RepresentationModelAssembler<User, UserDTO> {

    @Override
    public UserDTO toModel(User entity) {
        return UserDTO.builder()
                .id(entity.getId())
                .username(entity.getUsername())
                .email(entity.getEmail())
                .roles(entity.getRoles() == null ? null : entity.getRoles().stream().map(Role::getName).toList())
                .build();
    }

}


package ua.lviv.iot.web.backend.service;

import org.springframework.stereotype.Service;
import ua.lviv.iot.web.backend.domain.Role;

@Service
public interface RoleService extends GeneralService<Role, Integer> {

    Role findByName(String name);

}

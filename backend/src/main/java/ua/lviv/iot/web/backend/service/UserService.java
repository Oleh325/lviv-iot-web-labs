package ua.lviv.iot.web.backend.service;

import org.springframework.stereotype.Service;
import ua.lviv.iot.web.backend.domain.User;

@Service
public interface UserService extends GeneralService<User, Integer> {

    User findByUsername(String username);

    User findByEmail(String email);

    void addRole(Integer userId, String name);

    void removeRole(Integer userId, String name);

}

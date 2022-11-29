package ua.lviv.iot.web.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.lviv.iot.web.backend.domain.User;
import ua.lviv.iot.web.backend.exception.UserNotFoundException;
import ua.lviv.iot.web.backend.repository.UserRepository;
import ua.lviv.iot.web.backend.service.UserService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        return user;
    }

    @Transactional
    public User create(User user) {
        userRepository.save(user);
        return user;
    }

    @Transactional
    public void update(Integer id, User uUser) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        user.setId(uUser.getId());
        user.setUsername(uUser.getUsername());
        user.setEmail(uUser.getEmail());
        user.setPassword(uUser.getPassword());
        user.setRoles(uUser.getRoles());
        userRepository.save(user);
    }

    @Transactional
    public void delete(Integer id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        userRepository.delete(user);
    }

    public User findByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Could not find 'user' with username=" + username));
        return user;
    }

    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Could not find 'user' with email=" + email));
        return user;
    }
}


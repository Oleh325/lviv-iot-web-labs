package ua.lviv.iot.web.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ua.lviv.iot.web.backend.domain.User;
import ua.lviv.iot.web.backend.exception.UserNotFoundException;
import ua.lviv.iot.web.backend.repository.RoleRepository;
import ua.lviv.iot.web.backend.repository.UserRepository;
import ua.lviv.iot.web.backend.service.UserService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

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
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return user;
    }

    @Transactional
    public void update(Integer id, User uUser) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        user.setId(uUser.getId());
        user.setUsernameUser(uUser.getUsernameUser());
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
        User user = userRepository.findByUsernameUser(username)
                .orElseThrow(() -> new RuntimeException("Could not find 'user' with username=" + username));
        return user;
    }

    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Could not find 'user' with email=" + email));
        return user;
    }

    @Override
    public void addRole(Integer userId, String name) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
        user.getRoles().add(roleRepository.findByName(name)
                .orElseThrow(() -> new RuntimeException("Could not find 'role' with name=" + name)));
        userRepository.save(user);
    }

    @Override
    public void removeRole(Integer userId, String name) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
        user.getRoles().remove(roleRepository.findByName(name)
                .orElseThrow(() -> new RuntimeException("Could not find 'role' with name=" + name)));
        userRepository.save(user);
    }
}


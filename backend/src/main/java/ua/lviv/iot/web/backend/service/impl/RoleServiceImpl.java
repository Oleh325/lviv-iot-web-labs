package ua.lviv.iot.web.backend.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ua.lviv.iot.web.backend.domain.Role;
import ua.lviv.iot.web.backend.exception.RoleNotFoundException;
import ua.lviv.iot.web.backend.repository.RoleRepository;
import ua.lviv.iot.web.backend.service.RoleService;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    public List<Role> findAll() {
        return roleRepository.findAll();
    }

    public Role findById(Integer id) {
        Role role = roleRepository.findById(id)
                .orElseThrow(() -> new RoleNotFoundException(id));
        return role;
    }

    @Transactional
    public Role create(Role role) {
        roleRepository.save(role);
        return role;
    }

    @Transactional
    public void update(Integer id, Role uRole) {
        Role role = roleRepository.findById(id)
                .orElseThrow(() -> new RoleNotFoundException(id));
        role.setId(uRole.getId());
        role.setName(uRole.getName());
        role.setUsers(uRole.getUsers());
        roleRepository.save(role);
    }

    @Transactional
    public void delete(Integer id) {
        Role role = roleRepository.findById(id)
                .orElseThrow(() -> new RoleNotFoundException(id));
        roleRepository.delete(role);
    }

    @Override
    public Role findByName(String name) {
        Role role = roleRepository.findByName(name)
                .orElseThrow(() -> new RuntimeException("Could not find 'role' with name=" + name));
        return role;
    }
}


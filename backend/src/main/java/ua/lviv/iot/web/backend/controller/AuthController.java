package ua.lviv.iot.web.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.web.backend.domain.User;
import ua.lviv.iot.web.backend.dto.UserDTO;
import ua.lviv.iot.web.backend.dto.assembler.UserDTOAssembler;
import ua.lviv.iot.web.backend.service.UserService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final UserDTOAssembler userDTOAssembler;

    @PostMapping("/signup")
    public ResponseEntity<UserDTO> addUser(@RequestBody User user, HttpServletResponse response) throws IOException {
        try {
            String email = userService.findByEmail(user.getEmail()).getEmail();
            response.getWriter().write("{\"error\": \"User with email " + email + " already exists!\"}");
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } catch (RuntimeException e) {
            User newUser = userService.create(user);
            UserDTO userDTO = userDTOAssembler.toModel(newUser);
            return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
        }
    }

    @PostMapping("/users/{userId}/roles/{roleName}")
    public ResponseEntity<?> addRoleToUser(@PathVariable Integer userId, @PathVariable String roleName) {
        userService.addRole(userId, roleName);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/users/{userId}/roles/{roleName}")
    public ResponseEntity<?> removeRoleFromUser(@PathVariable Integer userId, @PathVariable String roleName) {
        userService.removeRole(userId, roleName);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer userId) {
        userService.delete(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/refresh")
    public void getNewAccessToken() {}

    @GetMapping("/signout")
    public void signOut() {}


}

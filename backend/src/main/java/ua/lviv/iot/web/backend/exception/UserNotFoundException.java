package ua.lviv.iot.web.backend.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(Integer id) {
        super("Could not find 'user' with id=" + id);
    }

}

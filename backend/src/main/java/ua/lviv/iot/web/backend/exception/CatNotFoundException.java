package ua.lviv.iot.web.backend.exception;

public class CatNotFoundException extends RuntimeException {

    public CatNotFoundException(Integer id) {
        super("Could not find 'cat' with id=" + id);
    }

}

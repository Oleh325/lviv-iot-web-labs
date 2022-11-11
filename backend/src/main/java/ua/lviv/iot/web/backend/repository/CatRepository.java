package ua.lviv.iot.web.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ua.lviv.iot.web.backend.domain.Cat;

import java.util.List;

@Repository
public interface CatRepository extends JpaRepository<Cat, Integer> {

    @Query("SELECT c FROM Cat c WHERE c.color = :color")
    List<Cat> findWithFilterColor(@Param("color") String color);

    @Query("SELECT c FROM Cat c WHERE c.cuteness >= :from AND c.cuteness < :to")
    List<Cat> findWithFilterCuteness(@Param("from") Integer from, @Param("to") Integer to);

    @Query("SELECT c FROM Cat c WHERE c.weight > :from AND c.weight <= :to")
    List<Cat> findWithFilterWeight(@Param("from") Double from, @Param("to") Double to);

    @Query("SELECT c FROM Cat c WHERE c.weight > :from")
    List<Cat> findWithFilterWeightFrom(@Param("from") Double from);

}

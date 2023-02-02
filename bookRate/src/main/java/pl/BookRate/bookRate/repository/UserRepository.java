package pl.BookRate.bookRate.repository;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import pl.BookRate.bookRate.model.User;

import java.util.List;

public interface UserRepository extends JpaRepository <User,Long> {
    @Override
    <S extends User> List<S> findAll(Example<S> example);

}

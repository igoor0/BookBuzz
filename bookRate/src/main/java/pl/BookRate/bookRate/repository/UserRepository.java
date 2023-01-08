package pl.BookRate.bookRate.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.BookRate.bookRate.model.User;

public interface UserRepository extends JpaRepository <User,Long> {


}

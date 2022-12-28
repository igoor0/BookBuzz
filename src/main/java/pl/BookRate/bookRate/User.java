package pl.BookRate.bookRate;

import jakarta.persistence.GeneratedValue;
import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@RequiredArgsConstructor
@ToString
@EntityScan



public class User {

    @Id
    @GeneratedValue
    private int id;
    @NonNull
    private String name;
    @NonNull
    private String password;

}

package pl.BookRate.bookRate.registration;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.BookRate.bookRate.appuser.AppUser;
import pl.BookRate.bookRate.appuser.AppUserRole;
import pl.BookRate.bookRate.appuser.AppUserService;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final AppUserService appUserService;
    private EmailValidator emailValidator;
    public String register(RegistrationRequest request) {
        boolean isValidEmail = emailValidator
                .test(request.getEmail());
        if(!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }
        return appUserService.signUpUser(
                new AppUser(
                        request.getFirstName(),
                        request.getLastName(),
                        request.getEmail(),
                        request.getPassword(),
                        AppUserRole.USER
                )
        );
    }
}

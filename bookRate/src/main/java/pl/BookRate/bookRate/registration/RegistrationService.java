package pl.BookRate.bookRate.registration;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pl.BookRate.bookRate.appuser.AppUser;
import pl.BookRate.bookRate.appuser.AppUserRole;
import pl.BookRate.bookRate.appuser.AppUserService;
import pl.BookRate.bookRate.email.EmailSender;
import pl.BookRate.bookRate.registration.token.ConfirmationToken;
import pl.BookRate.bookRate.registration.token.ConfirmationTokenService;

import java.time.LocalDateTime;
import java.util.Objects;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final AppUserService appUserService;
    private EmailValidator emailValidator;
    private final ConfirmationTokenService confirmationTokenService;
    private final EmailSender emailSender;

    public String register(RegistrationRequest request) {
        boolean isValidEmail = emailValidator
                .test(request.getEmail());
        if (!isValidEmail) {
            throw new IllegalStateException("email not valid");
        }
        String token = appUserService.signUpUser(
                new AppUser(
                        request.getFirstName(),
                        request.getLastName(),
                        request.getEmail(),
                        request.getPassword(),
                        AppUserRole.USER
                )
        );

        String link = "http://localhost:8080/api/v1/registration/confirm?token=" + token;
        emailSender.send(
                request.getEmail(),
                buildEmail(request.getFirstName(),
                        link));
        return token;
    }

    @Transactional
    public String confirmToken(String token) {
        ConfirmationToken confirmationToken = confirmationTokenService
                .getToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));
        if (Objects.nonNull(confirmationToken.getConfirmedAt())) {
            throw new IllegalStateException("email already confirmed");
        }
        LocalDateTime expiredAt = confirmationToken.getExpiresAt();

        if (expiredAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("token expired");
        }
        confirmationTokenService.setConfirmedAt(token);
        appUserService.enableAppUser(
                confirmationToken.getAppUser().getEmail());
        return "Your account has been confirmed";
    }

    private String buildEmail(String name, String link) {
        return  "Hello, " + name + "!\n\n" +
                "Thank you for signing up to BookRate. Please click on the link below to activate your account: " + link;

    }
}

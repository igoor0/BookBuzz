package pl.BookRate.bookRate.email;

public interface EmailSender {
    void send(String to, String email);
}
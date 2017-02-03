package utils;

import java.util.Date;
import java.util.logging.Level;

public class Logger {
    private String name;

    public Logger(final String name) {
        this.name = name;
    }

    public void log(final Level level, final String msg) {
        final StringBuilder sb = new StringBuilder(Constantes.FORMAT.format(new Date()));
        sb.append(" - [").append(level.getName()).append("] ");
        sb.append(this.name).append(" : ").append(msg);
        System.out.println(sb.toString());
    }
}

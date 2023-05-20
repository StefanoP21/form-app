import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function FormSignUp({ handleSubmit }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    const [errors, setErrors] = useState({
        name: {
            error: false,
            warning: "",
        },
        lastName: {
            error: false,
            warning: "",
        },
    });

    function validarlongitud(valor) {
        const error = valor.length < 3;
        const warning = "Deben ser mínimo 3 caracteres";

        return {
            name: { error, warning },
            lastName: { error, warning },
        };
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({ name, lastName, email, prom, nov });
            }}
        >
            <TextField
                id="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.warning : ""}
                onBlur={(e) => {
                    setErrors(validarlongitud(e.target.value));
                }}
            />
            <TextField
                id="lastname"
                label="Apellidos"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                error={errors.lastName.error}
                helperText={
                    errors.lastName.error ? errors.lastName.warning : ""
                }
                onBlur={(e) => {
                    setErrors(validarlongitud(e.target.value));
                }}
            />
            <TextField
                id="email"
                label="Correo"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={prom}
                            onChange={(e) => {
                                setProm(e.target.checked);
                            }}
                        />
                    }
                    label="Promociones"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={nov}
                            onChange={(e) => {
                                setNov(e.target.checked);
                            }}
                        />
                    }
                    label="Novedades"
                    onChange={(e) => {
                        setNov(e.target.value);
                    }}
                />
            </FormGroup>
            <Button variant="contained" type="submit">
                Registrarse
            </Button>
        </form>
    );
}

export default FormSignUp;

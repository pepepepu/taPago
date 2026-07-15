import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth";

export function useSignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleNameChange = (val: string) => {
    setName(val);
    setErrorMsg("");
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    setErrorMsg("");
  };

  const handlePasswordChange = (val: string) => {
    setPassword(val);
    setErrorMsg("");
  };

  const handleConfirmPasswordChange = (val: string) => {
    setConfirmPassword(val);
    setErrorMsg("");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5);
    setBirthDate(value.slice(0, 10));
    setErrorMsg("");
  };

  const formatToDBDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (password !== confirmPassword) {
      setErrorMsg("As senhas não conferem.");
      return;
    }

    if (birthDate.length !== 10) {
      setErrorMsg("Data de nascimento incompleta.");
      return;
    }

    setIsLoading(true);

    try {
      await authService.signUp({
        name,
        email,
        password,
        birthDate: formatToDBDate(birthDate),
      });
      navigate("/inicio");
    } catch (error: any) {
      if (
        error.status === 422 ||
        error.message?.includes("already registered") ||
        error.code === "user_already_exists"
      ) {
        setErrorMsg("Este email já está em uso. Tente fazer login.");
      } else if (error.code === "23505") {
        setErrorMsg("Este email já está cadastrado.");
      } else if (
        error.message?.includes("Password") ||
        error.message?.includes("senha")
      ) {
        setErrorMsg("A senha deve ter pelo menos 6 caracteres.");
      } else if (error.message === "Failed to fetch") {
        setErrorMsg(
          "Erro de conexão. Verifique sua internet ou tente mais tarde.",
        );
      } else {
        setErrorMsg("Ocorreu um erro no servidor. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => navigate(-1);
  const goToLogin = () => navigate("/entrar");

  return {
    name,
    email,
    birthDate,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    isLoading,
    errorMsg,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleDateChange,
    toggleShowPassword,
    toggleShowConfirmPassword,
    handleRegister,
    goBack,
    goToLogin,
  };
}

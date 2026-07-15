import { supabase } from "./supabase";

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
  birthDate: string;
}

export const authService = {
  async signUp({ name, email, password, birthDate }: SignUpParams) {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      throw authError;
    }

    if (authData.user) {
      const { error: dbError } = await supabase.from("users").insert([
        {
          id: authData.user.id,
          email: email,
          name: name,
          birth_date: birthDate,
        },
      ]);

      if (dbError) {
        throw dbError;
      }
    }

    return authData;
  },
};

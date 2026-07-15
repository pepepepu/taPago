export type ExpenseStatus = "PENDING" | "PARTIAL" | "PAID";

export type ExpenseType =
  | "SINGLE"
  | "INSTALLMENT"
  | "RECURRING"
  | "SUBSCRIPTION";

export interface User {
  id: string;
  email: string;
  name: string;
  birth_date: string;
  created_at: string;
}

export interface Income {
  id: string;
  user_id: string;
  description: string;
  amount: number;
  income_date: string;
  created_at: string;
}

export interface Expense {
  id: string;
  user_id: string;
  description: string;
  amount: number;
  original_due_date: string;
  current_due_date: string;
  status: ExpenseStatus;
  type: ExpenseType;
  installment_number: number | null;
  total_installments: number | null;
  is_postponed: boolean;
  payment_method: string | null;
  observation: string | null;
  parent_expense_id: string | null;
  created_at: string;
}

export interface Payment {
  id: string;
  expense_id: string;
  amount_paid: number;
  payment_date: string;
  created_at: string;
}

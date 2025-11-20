export interface IForm {
  handleSubmit: (e: React.FormEvent, appId: string) => void;
  error?: string | null;
}

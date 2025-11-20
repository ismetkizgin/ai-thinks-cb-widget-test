import { useState } from 'react';
import type { IForm } from './_type';
import style from './style.module.css';

export const Form = ({ handleSubmit, error }: IForm) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(e, inputValue);
  };

  return (
    <>
      <form className={style.form} onSubmit={onSubmit}>
        <label htmlFor="appId" className={style.label}>
          App ID
        </label>
        <input
          className={style.input}
          id="appId"
          type="text"
          placeholder="App ID giriniz"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={style.button} type="submit">
          Widget'ı Başlat
        </button>
      </form>
      {error && <p className={style.error}>{error}</p>}
    </>
  );
};

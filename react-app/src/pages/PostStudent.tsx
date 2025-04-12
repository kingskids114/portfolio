import React, { useState } from 'react';

interface StudentData {
  full_name: string;
  teacher: string;
  class_name: string;
}

const PostStudent = () => {
  const [formData, setFormData] = useState<StudentData>({
    full_name: '',
    teacher: '',
    class_name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/add-student/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      alert('Успешно отправлено:');
    } catch (err: any) {
      console.error('Ошибка при отправке:', err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="Имя фамилия ученика"
          value={formData.full_name}
          onChange={handleChange}
        />
        <select
          name="class_name"
          value={formData.class_name}
          onChange={handleChange}
        >
          <option value="">Выберите класс</option>
          <option value="3А">3А</option>
          <option value="3Б">3Б</option>
          <option value="3В">3В</option>
          <option value="3Д">3Д</option>
          <option value="3Е">3Е</option>
          <option value="4А">4А</option>
          <option value="4Б">4Б</option>
          <option value="4В">4В</option>
          <option value="4Г">4Г</option>
        </select>
        <input
          type="text"
          name="teacher"
          placeholder="Классный руководитель"
          value={formData.teacher}
          onChange={handleChange}
        />
        <button type="submit">Добавить ученика</button>
      </form>
    </div>
  );
};

export default PostStudent;
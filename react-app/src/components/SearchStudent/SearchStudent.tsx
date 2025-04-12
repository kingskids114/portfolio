import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

interface Student {
  id: number;
  full_name: string;
  class_name: string;
  teacher: string;
}

const SearchStudent: React.FC = () => {
  const [query, setQuery] = useState("");
  const [className, setClassName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [suggestions, setSuggestions] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/students/search", {
          params: {
            query,
            class_name: className,
            teacher_name: teacherName,
          },
        });
        setSuggestions(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке студентов:", error);
      }
    };

    if (query.length >= 2 || className || teacherName) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query, className, teacherName]);

  const handleStudentSelect = (selectedOption: any) => {
    const student = suggestions.find((s) => s.id === selectedOption.value);
    if (student) {
      setSelectedStudent(student);
    }
  };

  const getClassOptions = () => {
    const uniqueClasses = [...new Set(suggestions.map((s) => s.class_name))];
    return uniqueClasses.map((cls) => ({ value: cls, label: cls }));
  };

  const getTeacherOptions = () => {
    const uniqueTeachers = [...new Set(suggestions.map((s) => s.teacher))];
    return uniqueTeachers.map((t) => ({ value: t, label: t }));
  };

  return (
    <div>
      <form>
        {selectedStudent ? (
          <div>
            <p>Имя: {selectedStudent.full_name}</p>
            <p>Класс: {selectedStudent.class_name}</p>
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="student">Выберите автора</label>
              <Select
                inputValue={query}
                onInputChange={setQuery}
                onChange={handleStudentSelect}
                options={suggestions.map((student) => ({
                  value: student.id,
                  label: student.full_name,
                }))}
                placeholder="Начните вводить ФИО..."
              />
            </div>

            <div>
              <label htmlFor="classname">Выберите класс</label>
              <Select
                options={getClassOptions()}
                onChange={(option) => setClassName(option?.value || "")}
                placeholder="Выберите класс"
              />
            </div>

            <div>
              <label htmlFor="teachername">Выберите учителя</label>
              <Select
                options={getTeacherOptions()}
                onChange={(option) => setTeacherName(option?.value || "")}
                placeholder="Выберите учителя"
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default SearchStudent;
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import '../styles/global.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type LevelType = 'learning' | 'quiz';

type Question = {
  id: string;
  question: string;
  choices: string[];
};

const ModuleCreatorEditLevel: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { levelId } = (location.state as { levelId?: string } | null) || {};

  const [levelName, setLevelName] = useState<string>('');
  const [levelType, setLevelType] = useState<LevelType>('learning');
  const [content, setContent] = useState<string>('');
  
  // Quiz-specific state
  const [question, setQuestion] = useState<string>('');
  const [choices, setChoices] = useState<string[]>(['', '', '', '']);
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      question: 'How many sides does a square have?',
      choices: ['3 sides', '4 sides', '5 sides', '6 sides']
    }
  ]);

  const handleSave = () => {
    // Placeholder for future API call
    if (levelType === 'quiz') {
      console.log('Save quiz level:', { levelId, levelName, levelType, questions });
    } else {
      console.log('Save learning level:', { levelId, levelName, levelType, content });
    }
    navigate('/modulecreator-create-module');
  };

  const handleCancel = () => {
    navigate('/modulecreator-create-module');
  };

  const handleUploadImage = () => {
    // Placeholder for image upload functionality
    console.log('Upload image clicked');
  };

  const handleChoiceChange = (index: number, value: string) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  const handleCreateQuestion = () => {
    if (question.trim() && choices.some(choice => choice.trim())) {
      const newQuestion: Question = {
        id: String(Date.now()),
        question: question.trim(),
        choices: choices.filter(choice => choice.trim())
      };
      setQuestions(prev => [...prev, newQuestion]);
      setQuestion('');
      setChoices(['', '', '', '']);
    }
  };

  const handleEditQuestion = (questionId: string) => {
    const questionToEdit = questions.find(q => q.id === questionId);
    if (questionToEdit) {
      setQuestion(questionToEdit.question);
      setChoices([...questionToEdit.choices, '', '', '', ''].slice(0, 4));
      setQuestions(prev => prev.filter(q => q.id !== questionId));
    }
  };

  const handleDeleteQuestion = (questionId: string) => {
    setQuestions(prev => prev.filter(q => q.id !== questionId));
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <div className="create-level">
          <div className="create-level-header">Create Level</div>

          <div className="card-section">
            <div className="field">
              <label>Level Name</label>
              <input
                className="input"
                value={levelName}
                onChange={(e) => setLevelName(e.target.value)}
                placeholder="Enter level name"
              />
            </div>

            <div className="field">
              <label>Level Type</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="levelType"
                    value="learning"
                    checked={levelType === 'learning'}
                    onChange={(e) => setLevelType(e.target.value as LevelType)}
                  />
                  <span className="radio-custom"></span>
                  Learning Content
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="levelType"
                    value="quiz"
                    checked={levelType === 'quiz'}
                    onChange={(e) => setLevelType(e.target.value as LevelType)}
                  />
                  <span className="radio-custom"></span>
                  Quiz
                </label>
              </div>
            </div>

            {levelType === 'learning' ? (
              <>
                <div className="field">
                  <label>Content</label>
                  <textarea
                    className="textarea"
                    rows={8}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter level content"
                  />
                </div>

                <div className="center-row">
                  <button className="upload-button" onClick={handleUploadImage}>
                    Upload Image
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="field">
                  <label>Question</label>
                  <textarea
                    className="textarea"
                    rows={4}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter your question"
                  />
                </div>

                <div className="field">
                  <label>Choices</label>
                  <div className="choices-container">
                    {choices.map((choice, index) => (
                      <input
                        key={index}
                        className="input choice-input"
                        value={choice}
                        onChange={(e) => handleChoiceChange(index, e.target.value)}
                        placeholder={`Choice ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="center-row">
                  <button className="create-button" onClick={handleCreateQuestion}>
                    Create Question
                  </button>
                </div>

                <div className="field">
                  <label>List of Question</label>
                  <div className="questions-list">
                    {questions.map((q) => (
                      <div key={q.id} className="question-item">
                        <div className="question-text">{questions.indexOf(q) + 1}. {q.question}</div>
                        <div className="question-actions">
                          <button
                            className="action-button green"
                            title="Edit Question"
                            onClick={() => handleEditQuestion(q.id)}
                          >
                            <EditIcon />
                          </button>
                          <button
                            className="action-button red"
                            title="Delete Question"
                            onClick={() => handleDeleteQuestion(q.id)}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="form-actions">
            <button className="create-button" onClick={handleSave}>Save</button>
            <button className="secondary-button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModuleCreatorEditLevel;

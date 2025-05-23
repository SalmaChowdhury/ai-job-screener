import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UploadForm() {
  const [resume, setResume] = useState(null);
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('job', job);

    try {
      const res = await axios.post('http://localhost:5000/api/screener', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      localStorage.setItem('feedback', res.data.feedback);
      navigate('/results');
    } catch (err) {
      alert('Upload failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Upload Resume:</label>
      <input type="file" onChange={(e) => setResume(e.target.files[0])} required />

      <label>Upload Job Description:</label>
      <input type="file" onChange={(e) => setJob(e.target.files[0])} required />

      <button type="submit">Analyze</button>
    </form>
  );
}

export default UploadForm;

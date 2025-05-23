// Import necessary hooks and libraries
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UploadForm() {
  // State to store the uploaded resume and job description files
  const [resume, setResume] = useState(null);
  const [job, setJob] = useState(null);

  // Hook for programmatic navigation (to redirect user after submission)
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior (page reload)

    // Prepare form data to send to the backend
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('job', job);

    try {
      // Send POST request to the backend server
      const res = await axios.post('http://localhost:5000/api/screener', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      // Save feedback result in localStorage for access on the results page
      localStorage.setItem('feedback', res.data.feedback);

      // Redirect user to the results page
      navigate('/results');
    } catch (err) {
      // Handle upload errors
      alert('Upload failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* File input for resume */}
      <label>Upload Resume:</label>
      <input type="file" onChange={(e) => setResume(e.target.files[0])} required />

      {/* File input for job description */}
      <label>Upload Job Description:</label>
      <input type="file" onChange={(e) => setJob(e.target.files[0])} required />

      {/* Submit button */}
      <button type="submit">Analyze</button>
    </form>
  );
}

export default UploadForm;

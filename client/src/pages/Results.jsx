function Results() {
    const feedback = localStorage.getItem('feedback');
  
    return (
      <div>
        <h2>AI Feedback</h2>
        <pre>{feedback}</pre>
      </div>
    );
  }
  
  export default Results;
  
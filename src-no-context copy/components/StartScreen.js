function Startcreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2> Welcome to The React Quiz! </h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ul"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default Startcreen;

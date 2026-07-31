function Msg({ userName, textColor }) {
  let color = { color: textColor };
  return (
    <>
      <h1 style={color}>hello {userName}</h1>
    </>
  );
}

export default Msg;

import React, {useState} from "react";

function TypeMessage(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!onSubmit || value === "") return;

    onSubmit(value);
    //set value after submit
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="chatuser-typemessage">
        <input
          placeholder="Type a message"
          type="text"
          value={value}
          onChange={handleValueChange}
        />
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}

export default TypeMessage;

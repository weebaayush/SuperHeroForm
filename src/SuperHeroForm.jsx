import { useState } from "react";

export default function SuperheroForm() {
  const powerSourceOptions = [
    "Bitten by a strange creature",
    "Radioactive exposure",
    "Science experiment",
    "Alien heritage",
    "Ancient artifact discovery",
    "Other",
  ];

  const powersOptions = [
    "Super Strength",
    "Super Speed",
    "Flight",
    "Invisibility",
    "Telekinesis",
    "Other",
  ];

  const [heroName, setHeroName] = useState("");
  const [realName, setRealName] = useState("");
  const [powerSource, setPowerSource] = useState("");
  const [powers, setPowers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePowersChange = (e) => {
    const { value, checked } = e.target;

    setPowers(
      checked
        ? [...powers, value]
        : powers.filter((p) => p !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="form-wrap">
      <h2>Superhero Application Form</h2>
      {isSubmitted ? (
          <p className="success-message">FORM SUBMITTED SUCCESSFULLY</p>
      ) : (
      <form method="post" onSubmit={handleSubmit}>
        <div className="section">
          <label>
            Hero Name
            <input
              type="text"
              value={heroName}
              onChange={(e) => setHeroName(e.target.value)}
            />
          </label>

          <label>
            Real Name
            <input
              type="password"
              value={realName}
              onChange={(e) => setRealName(e.target.value)}
            />
          </label>
        </div>

        <label className="section column">
          How did you get your powers?

          <select
            value={powerSource}
            onChange={(e) => setPowerSource(e.target.value)}
          >
            <option value="">Select one</option>

            {powerSourceOptions.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>

        <div className="section column">
          <p>List your powers (select all that apply):</p>

          {powersOptions.map((power) => (
            <label key={power} className="checkbox-label">
              <input
                type="checkbox"
                value={power}
                checked={powers.includes(power)}
                onChange={handlePowersChange}
              />
              <span>{power}</span>
            </label>
          ))}
        </div>

        <button
          className="submit-btn"
          type="submit"
          disabled={
            !heroName ||
            !realName ||
            !powerSource ||
            powers.length === 0
          }
        >
          Join the League
        </button>
      </form>
      )}
    </div>
  );
}
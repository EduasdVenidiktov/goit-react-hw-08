import DocumentTitle from "../../DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          Welcom to your contacts manager{" "}
          <img
            src="https://media.tenor.com/GCbRbnL1MYwAAAAi/contact-phone-number.gif"
            alt="Phone gif" //
            className={css.gif}
          />
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
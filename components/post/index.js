import React, { useContext } from "react";
import CreatePostButton from "../buttons/CreatePostButton";
import { PostsContext } from "../../context/PostsProvider";

const NoteSummary = ({ data }) => {
  return (
    <>
      <Block key={`note-${data.id}`}>
        <Block>
          <Heading
            renderAs="h2"
            style={{ display: "inline" }}
            className={`note-summary-title text-sm ${theme.text.classStyle}`}
          >
            {data.title}
          </Heading>
        </Block>

        <small
          style={{ marginBottom: "1rem" }}
          className={`${theme.text.classStyle} date-timestamp`}
        >
          {data.created_at}
        </small>
      </Block>
    </>
  );
};

const NotesList = () => {
  const { notes, getNote } = useContext(PostsContext);

  return (
    <div
      id="notes-init"
      className={`m-0 mt-4 p-4 ${theme.background.classStyle} 
        is-widescreen flex-col is-justify-content-center is-align-content-center`}
    >
      <Block
        className={`${theme.panel.classStyle}  
            flex is-align-self-center flex-col p-4
            is-justify-content-center is-align-items-center`}
      >
        <div
          id="create-btn-init"
          style={{ width: "100%" }}
          className="flex-row is-justify-content-flex-end mr-5"
        >
          <CreatePostButton justifyContent={"flex-end"} />
        </div>
        <Heading renderAs="h1" className={`${theme.text.classStyle} `}>
          Welcome
        </Heading>
        <Block
          style={{ width: "100%", padding: "0rem 2rem", overflowY: "scroll" }}
        >
          <ul className="note-summaries">
            {notes &&
              notes.map((note, index) => (
                <li
                  key={index}
                  className="menu-item"
                  onClick={() => getNote(note.id)}
                >
                  <NoteSummary data={note} />
                </li>
              ))}
          </ul>
        </Block>
      </Block>
    </div>
  );
};

const NoNotesDetected = () => {
  return (
    <div
      id="notes-init"
      className={`m-0 p-4 ${theme.background.classStyle} } 
    is-widescreen flex-col is-justify-content-center is-align-content-center`}
      style={{ height: "100%" }}
    >
      <Block className="flex is-align-self-center flex-col is-justify-content-center is-align-items-center">
        <Heading
          renderAs="h2"
          className={`${theme.text.classStyle}`}
          weight="semibold"
        >
          No Notes Yet.
        </Heading>
        <CreatePostButton />
      </Block>
    </div>
  );
};

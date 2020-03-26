import React from "react";

import "./Notification.scss";

const NAME: string = "Notification";

type Props = {
  notification?: {
    content: string,
    link: string,
    visible: boolean;
  };
};

/**
 * Represents notification at top of (almost) each page on the website.
 */
const Notification: React.FC<Props> = ({ notification }): React.ReactElement|null => {
  if (!notification || !notification.visible) return null;
  const { content, link } = notification;
  return (
    <aside className={NAME}>
      <p className={`${NAME}__hidden-message`}>{ content }</p>
      <a
        href={link}
        title={content}
        className={`${NAME}__inner`}
      >
        <p className={`${NAME}__message`}>{content}</p>
      </a>
    </aside>
  );
};

export default Notification;
